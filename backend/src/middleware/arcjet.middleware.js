import aj from "../lib/arcjet.js"
import {isSpoofedBot} from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
    try {
        const decision = await aj.protect(req);

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({message: "Rate Limit exceeded. Please try again sometimes."});
            } else if (decision.reason.isBot()) {
                return res.status(403).json({message: "Bot access denied."});
            } else {
                return res.status(403).json({message: "Access denied by Security Policy."});
            }
        }
        if (decision.results.some(isSpoofedBot)) {
            return res.status(403).json({
                error: "Spoofed Bot is detected in this page.",
                message: "Malicious Bot is detected in this page."
            });
        }

        next();

    } catch (error) {
        console.log("Arcjet protection error: ", error);
        next();
    }
}