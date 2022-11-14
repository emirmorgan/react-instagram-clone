import { Form, Formik } from "formik";
import loginSchema from "../../validation/loginSchema";

import Input from "../Input";
import LoginDivider from "./LoginDivider";

import { AiFillFacebook } from "react-icons/ai";
import { userLogin } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/dataSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    await userLogin(values.email, values.password);
    dispatch(setAuth(true));
    navigate("/");
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
      className="flex flex-col items-center"
    >
      {(isSubmitting) => (
        <Form className="flex flex-col items-center">
          <div className="flex flex-col mt-6 w-full">
            <Input
              label="Phone number, username, or email"
              name="email"
              type="text"
            />
            <Input label="Password" name="password" type="password" />
            <div className="mx-10 my-2">
              <button
                type="submit"
                disabled={!(isSubmitting.isValid && isSubmitting.dirty)}
                className="w-full text-white rounded text-sm leading-[18px] px-[9px] py-[5px] focus:outline-none bg-[#0095f6] disabled:opacity-30"
              >
                Log in
              </button>
            </div>
          </div>
          <LoginDivider />
          <div className="w-full">
            <div className="flex justify-center mx-10">
              <button
                type="button"
                className="flex items-center bg-transparent border-0 focus:outline-none active:opacity-70"
              >
                <AiFillFacebook fontSize={20} className="mr-2" />
                <span className="text-sm font-semibold text-[#385185]">
                  Log in with Facebook
                </span>
              </button>
            </div>
          </div>
          <a className="text-xs mt-5 hover:text-sky-900" href="./">
            Forgot password?
          </a>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
