import { z } from "zod";
import { expand } from "dotenv-expand";
import { config } from "dotenv";

expand(config())

const EnvSchema = z.object({
    PORT: z.coerce.number().default(3000),
    NODE_ENV: z.string().default("development"),
    LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
});

export type Env = z.infer<typeof EnvSchema>;

let env: Env;
try {
    env = EnvSchema.parse(process.env);
}
catch (e) {
    const error = e as z.ZodError;
    console.error("❌ Invalid environment variables:");
    console.error(error.flatten());
    process.exit(1);
}

export default env;