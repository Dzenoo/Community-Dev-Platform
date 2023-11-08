import Image from "next/image";
import Card from "@/components/shared/ui/elements/card";
import { ProfileItemPropsTypes } from "@/types/profile";

const ProfileStatisticsItem: React.FC<ProfileItemPropsTypes> = ({
  path,
  name,
  quantity,
}) => {
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

export default ProfileStatisticsItem;
