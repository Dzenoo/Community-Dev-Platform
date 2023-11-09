"use client";

import { type QuestionDetailsCodeComponentPropsTypes } from "@/types/questions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const QuestionDetailsCode: React.FC<QuestionDetailsCodeComponentPropsTypes> = ({
  codeSnippet,
  language,
}) => {
  return (
    <SyntaxHighlighter language={language || "javascript"} style={vscDarkPlus}>
      {codeSnippet}
    </SyntaxHighlighter>
  );
};

export default QuestionDetailsCode;
