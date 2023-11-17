import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/user/repository/implemantion/UserRepository";
import AppError from "../shared/errors/AppErrors";
import { KEY_TOKEN } from "../shared/utils/environment";
import { GroupLevelRepository } from "../modules/groupLevel";

interface IPayload {
	sub: string;
}

export async function ensureAuthenticate(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const authToken = request.headers.authorization;

	if (!authToken) {
		throw new AppError("Token is missing", 401);
	}

	const [, token] = authToken.split(" ");

	try {
		const { sub: user_id } = verify(token, `${KEY_TOKEN}`) as IPayload;

		if (!user_id) {
			throw new AppError("Token is missing", 401);
		}

		const userRepository = new UserRepository();

		const usersVerify = await userRepository.listId({ id: user_id });

		if (!usersVerify) {
			throw new AppError("User not exist", 400);
		}

		const groupLevelRepository = new GroupLevelRepository();

		const groupLevelVerify = await groupLevelRepository.listUserId({
			user_id,
		});
		if (!groupLevelVerify) {
			throw new AppError("User level not exist");
		}

		request.user = {
			id: usersVerify.id,
			is_adm: usersVerify.is_adm,
			level_id: groupLevelVerify.level_id,
		};

		next();
	} catch {
		throw new AppError("token invalid", 401);
	}
}
