// Import necessary modules
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EditProfileForm from "@/components/profile/edit-profile/EditProfileForm";
import { fetchUser } from "@/library/actions/user.actions";
import { notAuthNavigate } from "@/library/utility";
import { FetchedProfilePropsTypes } from "@/types/profile";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

// Define the EditPage component
const EditPage = async ({ params }: { params: { profileId: string } }) => {
  // Get the user session
  const session = await getServerSession(authOptions);

  // Fetch the user data
  const user = (await fetchUser(params.profileId)) as FetchedProfilePropsTypes;

  // If user is not found, return 404 error
  if (!user) notFound();

  // If user is not authenticated, redirect to home page
  if (!session) notAuthNavigate("/");

  // If user is not authorized to edit the profile, redirect to home page
  // @ts-ignore
  if (params.profileId !== session?.user.id) notAuthNavigate("/");

  // Render the EditProfileForm component
  return (
    <section className="mb-12">
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
