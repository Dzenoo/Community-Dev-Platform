import AskQuestionForm from "@/components/questions/ask-question/AskQuestionForm";

const AskQuestionPage = () => {
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
