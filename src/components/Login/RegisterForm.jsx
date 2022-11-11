import { Form, Formik } from "formik";
import { AiFillFacebook } from "react-icons/ai";
import registerSchema from "../../validation/registerSchema";

import Input from "../Input";
import LoginDivider from "./LoginDivider";

const RegisterForm = () => {
  const handleSubmit = (values) => {};

  return (
    <Formik
      initialValues={{
        email: "",
        fullname: "",
        uname: "",
        upass: "",
      }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      {(isSubmitting) => (
        <>
          <div className="w-full">
            <div className="mx-10">
              <div className="mb-[10px] text-center">
                <h2 className="text-zinc-400 font-semibold">
                  Sign up to see photos and videos from your friends.
                </h2>
              </div>
              <div className="mb-[16px]">
                <button
                  type="button"
                  className="flex items-center justify-center text-white border-0 focus:outline-none active:opacity-70 bg-[#0095f6] rounded px-[9px] py-[5px] w-full"
                >
                  <AiFillFacebook fontSize={20} className="mr-2" />
                  <span className="text-sm font-semibold">
                    Log in with Facebook
                  </span>
                </button>
              </div>
            </div>
          </div>
          <LoginDivider />
          <Form className="flex flex-col items-center">
            <div className="flex flex-col w-full">
              <Input label="Mobile Number or Email" name="email" type="text" />
              <Input label="Full Name" name="fullname" type="text" />
              <Input label="Username" name="uname" type="text" />
              <Input label="Password" name="upass" type="password" />
            </div>
            <div className="text-center mx-10 my-[10px]">
              <p className="text-xs text-zinc-400">
                People who use our service may have uploaded your contact
                information to Instagram.{" "}
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
            <div className="w-full">
              <div className="mx-10 my-2">
                <button
                  type="submit"
                  disabled={!(isSubmitting.isValid && isSubmitting.dirty)}
                  className="w-full text-white rounded text-sm leading-[18px] px-[9px] py-[5px] focus:outline-none bg-[#0095f6] disabled:opacity-30"
                >
                  Sign up
                </button>
              </div>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default RegisterForm;
