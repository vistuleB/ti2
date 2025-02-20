import { createEffect, ParentProps } from "solid-js";

const Container = (props: ParentProps) => {
  createEffect(() => {
    (window as any).MathJax?.typesetPromise?.([document.body]);
  });
  return <>{props.children}</>;
};

export default Container;
