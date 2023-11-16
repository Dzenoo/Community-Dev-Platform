// This file exports a React component called Card.
// The Card component is a simple wrapper that adds a CSS class to its children.
// The CSS class adds an animation effect to the children when they are rendered.

import { type ReactNode } from "react";

// Define the Card component.
const Card = ({ children }: { children: ReactNode }) => {
  // Render a div element with the "card" and "card_animation" CSS classes.
  return <div className="card card_animation">{children}</div>;
};

// Export the Card component as the default export of this module.
export default Card;
