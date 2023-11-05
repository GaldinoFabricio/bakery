import "express";

declare global {
	namespace Express {
		interface Request {
			user: {
				id: string;
				is_adm: boolean;
				level_id: string;
			};

			level: {
				name: string;
			};
		}
	}
}
