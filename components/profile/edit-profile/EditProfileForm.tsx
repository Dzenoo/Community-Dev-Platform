import Button from "@/components/ui/elements/button";
import Input from "@/components/ui/elements/input";

const EditProfileForm = () => {
  return (
    <form className="flex flex-col">
      <div className="my-12 flex flex-col gap-4">
        <div>
          <Input id="name" label="Name" />
        </div>
        <div>
          <Input id="username" label="Username" />
        </div>
        <div>
          <Input id="location" label="Location" />
        </div>
        <div>
          <Input id="biography" label="Biography" type="textarea" />
        </div>
      </div>
      <div className="flex justify-end items-end">
        <div className="max-w-2xl">
          <Button variant="Normal">Save</Button>
        </div>
      </div>
    </form>
  );
};

export default EditProfileForm;
