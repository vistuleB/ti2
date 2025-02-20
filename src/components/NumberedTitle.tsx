import { createEffect, ParentProps } from "solid-js";

const NumberedTitle = (props: ParentProps) => {
  let span_ref: HTMLSpanElement | undefined;

  createEffect(() => {
    if (span_ref) {
      span_ref.innerText = span_ref.innerText.replace(".0", "");
    }
  });

  return (
    <span ref={span_ref} style={{ color: "blue" }}>
      {props.children}
    </span>
  );
};

export default NumberedTitle;
