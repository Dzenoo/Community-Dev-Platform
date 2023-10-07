import Image from "next/image";

const InputNavigation = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/graphics/loupe.png"
        alt="searct-icon"
        className="absolute left-3 top-3"
        width={16}
        height={16}
      />
      <input placeholder="Search Globaly" className="input_navigation" />
    </div>
  );
};

export default InputNavigation;
