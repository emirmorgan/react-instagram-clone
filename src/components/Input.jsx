import { useState } from "react";

const Input = ({ label, name }) => {
  const [isEmpty, setEmpty] = useState(true);
  const [isHidden, setHidden] = useState(true);

  const changeHandle = (e) => {
    let checkValue = e.target.value.length;

    if (checkValue > 0) return setEmpty(false);

    return setEmpty(true);
  };

  return (
    <div className="mx-10 mb-[6px]">
      <div className="flex border border-zinc-300 focus-within:border-zinc-400 rounded-[3px]">
        <label className="flex flex-col w-full relative h-9">
          <span
            className={
              "absolute left-2 right-0 overflow-hidden h-9 leading-9 text-zinc-400 pointer-events-none " +
              (!isEmpty
                ? "transform translate-y-[-10px] text-[10px]"
                : "text-xs")
            }
          >
            {label}
          </span>
          <input
            className={
              "w-full bg-zinc-50 text-sm outline-none pl-2 " +
              (!isEmpty ? "pt-[14px] pb-[2px]" : "pt-[9px] pb-[7px]")
            }
            type={name == "password" && isHidden ? "password" : "text"}
            aria-label={label}
            onChange={changeHandle}
          />
        </label>
        <div className="flex pr-2 bg-zinc-50">
          {name == "password" && isEmpty === false ? (
            <div className="flex text-sm ml-2">
              <button
                className="font-semibold border-none focus:outline-none active:opacity-70"
                onClick={() => setHidden(!isHidden)}
              >
                {isHidden ? "Show" : "Hide"}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Input;
