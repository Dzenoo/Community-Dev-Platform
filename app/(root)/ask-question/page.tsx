import AskQuestionForm from "@/components/questions/ask-question/AskQuestionForm";
import authOptions from "@/library/auth-options";
import { notAuthNavigate } from "@/library/utility";
import { getServerSession } from "next-auth";

const AskQuestionPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) notAuthNavigate("/");

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

export default AskQuestionPage;
