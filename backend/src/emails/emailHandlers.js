import {resendClient, sender} from "../lib/resend.js";
import {welcomeEmailTemplate} from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
    const {data, error} = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Welcome To Your Email",
        html: welcomeEmailTemplate(name, clientURL),
    });

    if (error) {
        console.log("Error Sending Wlcm Email",error);
        throw new Error("Error Sending Wlcm Email");
    }
    console.log("Welcome Email Sent Successfully ",data);
}