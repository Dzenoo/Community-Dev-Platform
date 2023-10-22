import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className="card card_animation">{children}</div>;
};

export default Card;
