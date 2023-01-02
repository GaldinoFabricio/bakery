import { NextFunction, Request, Response } from "express";
import { PermissionUserRepository } from "../modules/permission/repository/implemantation/PermissionUserRepository";
import AppError from "../shared/errors/AppErrors";

export async function permissionUser(request: Request, response: Response, next: NextFunction) {
  const { user } = request.body;

  const permissionUserRepository = new PermissionUserRepository();

  const verifyPermission = await permissionUserRepository.listUserId({ user_id: user.id });

  if (!verifyPermission) {
    throw new AppError("User not permission", 400);
  }

  next();
}