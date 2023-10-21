import AskQuestionForm from "@/components/questions/ask-question/AskQuestionForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { notAuthNavigate } from "@/library/utility";
import { getServerSession } from "next-auth";

const AskQuestionPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) notAuthNavigate("/");

  return (
    <section className="mb-12">
      <div>
        <h2 className="section_title text-white">Ask A Question</h2>
      </div>
      <AskQuestionForm />
    </section>
  );
};

export default AskQuestionPage;
