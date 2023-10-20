import EditProfileForm from "@/components/profile/edit-profile/EditProfileForm";
import { fetchUser } from "@/library/actions/user.actions";

const EditPage = async ({ params }: { params: { profileId: string } }) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const user = await fetchUser(params.profileId);
  if (!user) return null;

  return (
    <section className="mb-12">
      <div>
        <h2 className="section_title text-white">Edit Profile</h2>
      </div>
      <EditProfileForm
        userId={user?._id}
        name={user?.name}
        username={user?.username}
        location={user?.location}
        biography={user?.biography}
      />
    </section>
  );
};

export default EditPage;
