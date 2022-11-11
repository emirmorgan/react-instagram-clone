const loginRouteFooterItems = [
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
];

const LoginFooter = () => {
  return (
    <footer className="w-full px-4">
      <div className="flex flex-col mb-[52px]">
        <div className="flex flex-col mt-6">
          <ul className="flex flex-wrap justify-center gap-3 text-xs px-6">
            {loginRouteFooterItems.map((item, id) => (
              <a href={item.href} key={id}>
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
  );
};

export default LoginFooter;
