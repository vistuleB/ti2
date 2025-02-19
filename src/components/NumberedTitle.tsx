import { ParentProps } from "solid-js";

const NumberedTitle = (props: ParentProps) => {
  return <span style={{ color: "blue" }}>{props.children}</span>;
};

export default NumberedTitle;
