// Importing the required types and libraries
"use client";
import { type QuestionDetailsCodeComponentPropsTypes } from "@/types/questions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Defining a functional component that takes in codeSnippet and language as props
const QuestionDetailsCode: React.FC<QuestionDetailsCodeComponentPropsTypes> = ({
  codeSnippet,
  language,
}) => {
  // Rendering the code snippet using SyntaxHighlighter component from react-syntax-highlighter library
  // If language prop is not provided, default to "javascript"
  return (
    <SyntaxHighlighter language={language || "javascript"} style={vscDarkPlus}>
      {codeSnippet}
    </SyntaxHighlighter>
  );
};

// Exporting the component as default
export default QuestionDetailsCode;
