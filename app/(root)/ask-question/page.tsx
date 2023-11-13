// Importing necessary modules
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AskQuestionForm from "@/components/questions/ask-question/AskQuestionForm";
import { notAuthNavigate } from "@/library/utility";
import { getServerSession } from "next-auth";

// Defining the AskQuestionPage component as an async function
const AskQuestionPage = async () => {
  // Retrieving the server session using the authOptions
  const session = await getServerSession(authOptions);
  // If there is no session, redirect to the home page
  if (!session) notAuthNavigate("/");

  // Rendering the AskQuestionPage component
  return (
    <section className="mb-12">
      <div>
        <h2 className="section_title text-black dark:text-white">
          Ask A Question
        </h2>
      </div>
      <AskQuestionForm />
    </section>
  );
};

// Exporting the AskQuestionPage component as the default export
export default AskQuestionPage;
