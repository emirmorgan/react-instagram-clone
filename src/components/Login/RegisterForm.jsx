import { useSelector } from "react-redux";
import Input from "../Input";

const RegisterForm = () => {
  const isInputEmpty = useSelector((state) => state.design.isInputEmpty);

  return (
    <form className="flex flex-col items-center">
      <div className="flex flex-col mt-6 w-full">
        <Input label="Mobile Number or Email" name="email" />
        <Input label="Full Name" name="fullname" />
        <Input label="Username" name="uname" />
        <Input label="Password" name="upass" />
        <div className="mx-10 my-2">
          <button
            className={
              "w-full text-white font-semibold rounded text-sm leading-[18px] px-[9px] py-[5px] focus:outline-none " +
              (isInputEmpty ? "bg-sky-300 pointer-events-none" : "bg-sky-600")
            }
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="text-center mx-10 my-[10px]">
        <p className="text-xs text-zinc-400">
          People who use our service may have uploaded your contact information
          to Instagram.{" "}
          <a
            href="./"
            className="text-zinc-500 font-semibold hover:text-zinc-500"
          >
            Learn More
          </a>
        </p>
        <br />
        <p className="text-xs text-zinc-400">
          By signing up, you agree to our{" "}
          <a
            href="./"
            className="text-zinc-500 font-semibold hover:text-zinc-500"
          >
            Terms
          </a>
          {", "}
          <a
            href="./"
            className="text-zinc-500 font-semibold hover:text-zinc-500"
          >
            Privacy Policy
          </a>
          {" and "}
          <a
            href="./"
            className="text-zinc-500 font-semibold hover:text-zinc-500"
          >
            Cookies Policy
          </a>
          {" ."}
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
