import { useEffect, useRef } from "react";

const LoginPhoneFrame = () => {
  const ref = useRef();

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

  const frameImages = [
    "https://instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
    "https://instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
    "https://instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
    "https://instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png",
  ];

  return (
    <div className="hidden md:block bg-phone-frame h-[581px] w-[380px] bg-[length:468.32px_634.15px] bg-[-46px_0] mr-8 mb-3 self-center">
      <div className="mt-[27px] ml-[113px] relative" ref={ref}>
        {frameImages.map((image, id) => (
          <img
            key={id}
            className="w-[250px] h-[538px] absolute left-0 top-0 opacity-0 transition-opacity duration-[1500ms] ease-in-out"
            src={image}
            alt={"Screenshot " + id}
          />
        ))}
      </div>
    </div>
  );
};

export default LoginPhoneFrame;
