import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EditProfileForm from "@/components/profile/edit-profile/EditProfileForm";
import { fetchUser } from "@/library/actions/user.actions";
import { notAuthNavigate } from "@/library/utility";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const EditPage = async ({ params }: { params: { profileId: string } }) => {
  const session = await getServerSession(authOptions);
  const user = await fetchUser(params.profileId);

  if (!user) notFound();
  if (!session) notAuthNavigate("/");
  // @ts-ignore
  if (params.profileId !== session?.user.id) notAuthNavigate("/");

  return (
    <section className="mb-12">
      <div>
        <h2 className="section_title text-black dark:text-white">
          Edit Profile
        </h2>
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
