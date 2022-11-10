import { useFormik } from "formik";
import { useSelector } from "react-redux";

import loginSchema from "../../validation/loginSchema";
import Input from "../Input";

const LoginForm = () => {
  const isInputEmpty = useSelector((state) => state.design.isInputEmpty);

  const LoginValidation = useFormik({
    initialValues: {
      userName: "",
      userPass: "",
    },
    onSubmit: (values) => {
      alert(values);
    },
    validationSchema: { loginSchema },
  });

  return (
    <form
      onSubmit={LoginValidation.handleSubmit}
      className="flex flex-col items-center"
    >
      <div className="flex flex-col mt-6 w-full">
        <Input label="Phone number, username, or email" name="username" />
        <Input label="Password" name="password" />
        <div className="mx-10 my-2">
          <button
            className={
              "w-full text-white font-semibold rounded text-sm leading-[18px] px-[9px] py-[5px] focus:outline-none " +
              (isInputEmpty ? "bg-sky-300 pointer-events-none" : "bg-sky-600")
            }
          >
            Log In
          </button>
        </div>
      </div>
      <a className="text-xs mt-3 hover:text-sky-900" href="./">
        Forgot password?
      </a>
    </form>
  );
};

export default LoginForm;
