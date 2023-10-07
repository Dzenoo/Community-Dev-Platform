import Link from "next/link";

const LogoNavigation = () => {
  return (
    <header className="py-4 px-6 shadow-md flex justify-between items-center">
      <div>
        <Link href="/">
          <h2 className="text-3xl font-bold">
            Community<span className="text-[#004ee7]">Dev</span>
          </h2>
        </Link>
      </div>
      <div>Search</div>
      <div>Profile Img</div>
    </header>
  );
};

export default LogoNavigation;
