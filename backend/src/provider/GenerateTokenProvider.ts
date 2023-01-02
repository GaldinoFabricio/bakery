import { sign } from "jsonwebtoken";
import { KEY_TOKEN } from "../shared/utils/environment";

class GenerateTokenProvider {
  async execute(user_id: string) {
    const token = sign({}, `${KEY_TOKEN}`, {
      subject: user_id,
      expiresIn: "20d"
    });

    return token;
  }
}

export { GenerateTokenProvider }
