import TelegramLogin from "../components/telegram/login";
import {useState} from "react";

const Landing = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>Login with Telegram</h1>
      <TelegramLogin setIsLoggedIn={setIsLoggedIn}/>
    </div>
  );
};

export default Landing;
