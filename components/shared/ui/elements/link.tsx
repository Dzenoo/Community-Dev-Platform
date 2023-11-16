// Importing the LinkPropsTypes type from the link file
import { type LinkPropsTypes } from "@/types/link";

// Importing the Link component from the next/link module
import Link from "next/link";

// Defining a functional component called LinkButton that takes in children and href as props
const LinkButton: React.FC<LinkPropsTypes> = ({ children, href }) => {
  // Returning a Link component with the href prop and a className of "link card_animation"
  return (
    <Link href={href} className="link card_animation">
      {children}
    </Link>
  );
};

// Exporting the LinkButton component as the default export of this module
export default LinkButton;
