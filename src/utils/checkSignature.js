import sha256 from "crypto-js/sha256";
import HmacSHA256 from "crypto-js/hmac-sha256";

export default function checkSignature ({ hash, ...data }) {
  const secretSHA256 = sha256(process.env.REACT_APP_BOT_TOKEN)
  const checkString = Object.keys(data)
    .sort()
    .map(k => (`${k}=${data[k]}`))
    .join('\n');
  const signatureHmacSHA256 = HmacSHA256(checkString, secretSHA256).toString();

  return signatureHmacSHA256 === hash;
}