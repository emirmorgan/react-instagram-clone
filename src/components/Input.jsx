const Input = ({ label, type }) => {
  return (
    <div className="mx-10 mb-[6px]">
      <div className="flex border border-zinc-300 focus-within:border-zinc-400 rounded-[3px]">
        <label className="flex flex-col w-full relative h-9">
          <span className="text-xs text-zinc-400 absolute left-2 right-0 overflow-hidden h-9 leading-9 pointer-events-none">
            {label}
          </span>
          <input
            className="w-full text-sm outline-none pt-[9px] pb-[7px] pl-2"
            type="text"
            aria-label={label}
          />
        </label>
        <div className="pr-2"></div>
      </div>
    </div>
  );
};

export default Input;
