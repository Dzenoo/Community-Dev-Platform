// Importing the Image component from the Next.js library
import Image from "next/image";

// Importing the Card component and the ProfileItemPropsTypes interface from their respective files
import Card from "@/components/shared/ui/elements/card";
import { type ProfileItemPropsTypes } from "@/types/profile";

// Defining the ProfileStatisticsItem functional component that receives the path, name and quantity props
const ProfileStatisticsItem: React.FC<ProfileItemPropsTypes> = ({
  path,
  name,
  quantity,
}) => {
  // Returning a Card component that contains an Image component and a div element with two child elements
  return (
    <Card>
      <div className="flex gap-4">
        <Image src={path} alt={name} width={80} height={80} />
        <div className="flex flex-col gap-2">
          <span className="section_title text-black dark:text-white">
            {quantity}
          </span>
          <h2 className="section_subtitle text-black dark:text-white">
            {name} badges
          </h2>
        </div>
      </div>
    </Card>
  );
};

// Exporting the ProfileStatisticsItem component as the default export of this module
export default ProfileStatisticsItem;
