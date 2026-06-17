const dotenv = require("dotenv");
dotenv.config();
const z = require("zod");
const logger = require("./logger");


const envSchema = z.object({
  PORT: z.coerce.number(),
  MONGO_URL: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  logger.info("Check your .env variables");
  process.exit(1);
}

module.exports = parsed.data;