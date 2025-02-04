import { MetaProvider } from "@solidjs/meta";
import { createEffect, ParentProps, Suspense } from "solid-js";

const Container = (props: ParentProps) => {
  createEffect(() => {
    (window as any).MathJax.typesetPromise([document.body]);
  });
  return <>{props.children}</>;
};

export default Container;
