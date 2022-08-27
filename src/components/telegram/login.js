import checkSignature from "../../utils/checkSignature";
import TelegramLoginButton from "react-telegram-login";

const TelegramLogin = ({setIsLoggedIn}) => {

  const handleTelegramResponse = response => {
    if (checkSignature(response)){
      console.log("Signature is valid");
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="FlamaLoginTestBot" />,
    </>
  );
};

export default TelegramLogin;
