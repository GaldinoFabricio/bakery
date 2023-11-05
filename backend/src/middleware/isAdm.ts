import { NextFunction, Request, Response } from "express";
import AppError from "../shared/errors/AppErrors";

export async function isAdm(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const { is_adm } = request.user;

	if (!is_adm) {
		throw new AppError("Access Denied", 400);
	}

	next();
}
