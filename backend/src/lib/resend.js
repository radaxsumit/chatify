import {Resend} from 'resend';
import "dotenv/config.js";
import {ENV} from "./env.js";

export const resendClient = new Resend(ENV.RESEND_API_KEY);

export const sender = {
    email: ENV.EMAIL_FROM,
    name: ENV.EMAIL_FROM_EMAIL,
}