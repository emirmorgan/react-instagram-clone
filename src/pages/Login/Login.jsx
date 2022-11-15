import { useState } from "react";

import RegisterForm from "../../components/Login/RegisterForm";
import LoginForm from "../../components/Login/LoginForm";
import LoginPhoneFrame from "../../components/Login/LoginPhoneFrame";
import LoginFooter from "../../components/Login/LoginFooter";
import LoginGetApp from "../../components/Login/LoginGetApp";

const Login = () => {
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  return (
    <section className="w-full min-h-screen flex flex-col items-stretch">
      <main
        className={
          "w-full h-full mx-auto my-[3px] " + (!isRegisterVisible ? "mt-8" : "")
        }
      >
        <article className="flex justify-center items-center my-auto h-full w-full pb-8">
          {!isRegisterVisible ? <LoginPhoneFrame /> : null}
          <div className="w-full max-w-[350px] flex flex-col justify-center items-center mt-3">
            <div className="w-full bg-white border border-zinc-300 rounded-[1px] py-[10px] mb-[10px]">
              <div className="flex justify-center mt-9 mb-3">
                <a href="./">
                  <img
                    className=" object-contain"
                    src="https://instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                    alt="Instagram"
                  />
                </a>
              </div>
              <div className="mb-[10px]">
                {!isRegisterVisible ? <LoginForm /> : <RegisterForm />}
              </div>
            </div>
            <div className="w-full bg-white border border-zinc-300 rounded-[1px] py-[10px] mb-[10px]">
              <div className="flex justify-center items-center text-sm">
                <p className="m-[15px]">
                  {!isRegisterVisible
                    ? "Don't have an account?"
                    : "Have an account?"}
                  <a
                    onClick={() => setRegisterVisible(!isRegisterVisible)}
                    className="text-sky-500 hover:text-sky-500 cursor-pointer"
                  >
                    <span className="font-semibold">
                      {!isRegisterVisible ? " Sign up" : " Log in"}
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <LoginGetApp />
          </div>
        </article>
      </main>
      <LoginFooter />
    </section>
  );
};

export default Login;
