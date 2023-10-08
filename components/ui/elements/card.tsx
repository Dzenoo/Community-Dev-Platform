import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className="card">{children}</div>;
};

export default Card;
