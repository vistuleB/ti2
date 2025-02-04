import { ParentProps } from "solid-js";

const Paragraph = (props: ParentProps) => {
  return <p>{props.children}</p>;
};

export default Paragraph;
