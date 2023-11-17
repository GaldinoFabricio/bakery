import { UserRepository } from "../repository/implemantion/UserRepository";

class UserServices {
	constructor(private userRepository: UserRepository) {}
}

export { UserServices };
