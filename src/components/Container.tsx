import { MetaProvider } from "@solidjs/meta";
import { createEffect, ParentProps, Suspense } from "solid-js";

const Container = (props: ParentProps) => {
  createEffect(() => {
    const existingScripts = [
      document.querySelector('script[src="/mathjax_setup.js"]'),
      document.getElementById("MathJax-script"),
    ];
    existingScripts.forEach((e) => e?.remove());

    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "/mathjax_setup.js";
    document.body.appendChild(script);

    script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "/tex-svg.js";
    script.async = true;
    document.body.appendChild(script);
  });
  return <>{props.children}</>;
};

export default Container;
