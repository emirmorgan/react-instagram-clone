const homeFooterItems = [
  { text: "About", href: "./" },
  { text: "Jobs", href: "./" },
  { text: "Help", href: "./" },
  { text: "API", href: "./" },
  { text: "Privacy", href: "./" },
  { text: "Terms", href: "./" },
  { text: "Locations", href: "./" },
];

const HomeFooter = () => {
  return (
    <>
      <div className="flex flex-col mt-4">
        <ul className="flex flex-wrap justify-start gap-3 text-[11px]">
          {homeFooterItems.map((item, id) => (
            <a href={item.href} key={id}>
              <li className="text-gray-400">{item.text}</li>
            </a>
          ))}
        </ul>
      </div>
      <div className="flex justify-start text-xs text-gray-400 my-3">
        © 2022 Instagram from Meta
      </div>
    </>
  );
};

export default HomeFooter;
