import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const privateKeyBase = process.env.APPLE_MUSIC_PRIVATE_KEY;
const teamId = process.env.APPLE_MUSIC_TEAM_ID;
const keyId = process.env.APPLE_MUSIC_KEY_ID;

if (!privateKeyBase || !teamId || !keyId)
  throw new Error("missing enviroments variables");

const privateKeyBuffer = Buffer.from(privateKeyBase, "base64");
const privateKey = privateKeyBuffer.toString();

const getTimestampInHours = (hours: number = 24) => {
  return 1000 * 60 * 60 * 24 * hours;
};

const newToken = () => {
  const now = Math.floor(Date.now() / 1000);
  const expire = Math.floor((Date.now() + getTimestampInHours(4)) / 1000);

  const options: jwt.SignOptions = {
    header: {
      alg: "ES256",
      kid: keyId,
    },
  };

  const payload = {
    iss: teamId,
    iat: now,
    exp: expire,
  };

  return jwt.sign(payload, privateKey, options);
};

let currentToken = newToken();

setInterval(() => {
  currentToken = newToken();
}, getTimestampInHours(3));

const getCurrentToken = () => currentToken;

export default getCurrentToken;
