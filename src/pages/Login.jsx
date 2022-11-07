import { useEffect, useRef } from "react";

import { useFormik } from "formik";
import loginSchema from "../validation/loginSchema";
import Input from "../components/Input";

const Login = () => {
  const ref = useRef();

  const images = [
    "https://instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
    "https://instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
    "https://instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
    "https://instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png",
  ];

  const footerItems = [
    { text: "Meta", href: "./" },
    { text: "About", href: "./" },
    { text: "Blog", href: "./" },
    { text: "Jobs", href: "./" },
    { text: "Help", href: "./" },
    { text: "API", href: "./" },
    { text: "Privacy", href: "./" },
    { text: "Terms", href: "./" },
    { text: "Top Accounts", href: "./" },
    { text: "Hashtags", href: "./" },
    { text: "Locations", href: "./" },
    { text: "Instagram Lite", href: "./" },
    { text: "Contact Uploading & Non-Users", href: "./" },
    { text: "Dance", href: "./" },
    { text: "Food & Drink", href: "./" },
    { text: "Home & Garden", href: "./" },
    { text: "Music", href: "./" },
    { text: "Visual Arts", href: "./" },
  ];

  useEffect(() => {
    let images = ref.current.querySelectorAll("img");
    let total = images.length;
    let current = 0;

    const imageHandler = () => {
      images[(current > 0 ? current : total) - 1].classList.add("opacity-0");
      images[current].classList.remove("opacity-0");
      current = current === total - 1 ? 0 : current + 1;
    };

    imageHandler();

    let interval = setInterval(() => {
      imageHandler();
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  const LoginForm = useFormik({
    initialValues: {
      userName: "",
      userPass: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: { loginSchema },
  });

  return (
    <section className="w-full h-screen flex flex-col items-stretch">
      <main className="w-full h-screen mx-auto mt-8 my-[3px]">
        <article className="flex justify-center items-center my-auto h-full w-full pb-8">
          <div className="hidden md:block bg-phone-frame h-[581px] w-[380px] bg-[length:468.32px_634.15px] bg-[-46px_0] mr-8 mb-3 self-center">
            <div className="mt-[27px] ml-[113px] relative" ref={ref}>
              {images.map((image, id) => (
                <img
                  key={id}
                  className="w-[250px] h-[538px] absolute left-0 top-0 opacity-0 transition-opacity duration-[1500ms] ease-in-out"
                  src={image}
                  alt={"Screenshot " + id}
                />
              ))}
            </div>
          </div>
          <div className="w-full max-w-[350px] flex flex-col justify-center items-center mt-3">
            <div className="w-full bg-white border border-zinc-300 rounded-[1px] py-[10px] mb-[10px]">
              <div className="flex justify-center mt-9 mb-3">
                <img
                  className=" object-contain"
                  src="https://instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                  alt="Instagram"
                />
              </div>
              <div className="mb-[10px]">
                <form
                  onSubmit={LoginForm.handleSubmit}
                  className="flex flex-col items-center"
                >
                  <div className="flex flex-col mt-6 w-full">
                    <Input
                      label="Phone number, username, or email"
                      type="text"
                    />
                    <Input label="Password" type="text" />
                    <div className="mx-10 my-2">
                      <button className="w-full bg-sky-600 text-white font-semibold rounded text-sm leading-[18px] px-[9px] py-[5px]">
                        Log In
                      </button>
                    </div>
                  </div>
                  <a className="text-xs mt-3 hover:text-sky-900" href="./">
                    Forgot password?
                  </a>
                </form>
              </div>
            </div>
            <div className="w-full bg-white border border-zinc-300 rounded-[1px] py-[10px] mb-[10px]">
              <div className="flex justify-center items-center text-sm">
                <p className="m-[15px]">
                  Don't have an account?
                  <a href="./" className="text-sky-500 hover:text-sky-500">
                    <span className="font-semibold"> Sign Up</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center">
              <p className="text-sm mx-[20px] my-[10px]">Get the app.</p>
              <div className="flex my-[10px]">
                <a
                  className="mr-2"
                  href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
                >
                  <img
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                    alt="Download on the App Store"
                    className="h-10"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D832034DA-8446-453C-B0C9-051A8B36E973%26utm_content%3Dlo%26utm_medium%3Dbadge">
                  <img
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <footer className="w-full py-4">
        <div className="flex flex-col mb-[52px]">
          <div className="flex flex-col mt-6">
            <ul className="flex flex-wrap justify-center gap-2 text-xs">
              {footerItems.map((item) => (
                <a href={item.href}>
                  <li className="text-gray-400">{item.text}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className="flex justify-center text-xs text-gray-400 my-3">
            <select className="bg-transparent outline-none cursor-pointer">
              <option value="en">English</option>
            </select>
            <div className="ml-4">© 2022 Instagram from Meta</div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Login;
