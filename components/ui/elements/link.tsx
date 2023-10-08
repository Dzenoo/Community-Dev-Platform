import { LinkPropsTypes } from "@/types/link";
import Link from "next/link";

const LinkButton: React.FC<LinkPropsTypes> = ({ children, href }) => {
  return (
    <Link href={href} className="link">
      {children}
    </Link>
  );
};

export default LinkButton;
