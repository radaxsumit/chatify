import "dotenv/config";

export const ENV = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT: process.env.JWT,
    NODE_ENV: process.env.NODE_ENV,
    CLIENTURL: process.env.CLIENTURL,
    RESEND_API_KEY: process.env.RESENDER_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_FROM_EMAIL: process.env.EMAIL_FROM_EMAIL,
}