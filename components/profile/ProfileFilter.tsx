import Button from "../ui/elements/button";

const ProfileFilter = () => {
  return (
    <div className="pb-4 flex gap-4">
      <Button variant={"Normal"}>Questions</Button>
      <Button variant={"Outlined"}>Answers</Button>
    </div>
  );
};

export default ProfileFilter;
