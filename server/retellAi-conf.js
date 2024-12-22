import dotenv from "dotenv";
dotenv.config();

const conf = {
  RETELL_AI_API_KEY: String(process.env.RETELL_AI_API_KEY),
  PORT: String(process.env.PORT),
  RETELL_AI_MAIN_API_URL: String(process.env.RETELL_AI_MAIN_API_URL),
};

export default conf;
