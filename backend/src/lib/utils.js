import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("token", token, {
    httpOnly: true, // prevent XSS attacks by making the cookie inaccessible to JavaScript : cross-site scripting attack is a type of security vulnerability typically found in web applications. It allows attackers to inject malicious scripts into web pages viewed by other users. By setting the httpOnly flag on a cookie, you can help prevent these types of attacks by making the cookie inaccessible to JavaScript running in the browser.

    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    sameSite: "strict", // helps prevent CSRF attacks by ensuring the cookie is only sent in requests originating from the same site
    secure: process.env.NODE_ENV === "development" ? false : true, // ensures the cookie is only sent over HTTPS in production
  });
  return token;
};
