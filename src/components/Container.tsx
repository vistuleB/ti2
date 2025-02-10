import { MetaProvider } from "@solidjs/meta";
import { createEffect, ParentProps, Suspense } from "solid-js";

const Container = (props: ParentProps) => {
  createEffect(() => {
    (window as any).MathJax.typesetPromise([document.body]);
  });
  return (
    <>
      <div id="mathjax-definitions" style="display:none">
        {String.raw`\(
        \newcommand{\floor}[1]{\left\lfloor #1 \right\rfloor}
        \newcommand{\ceil}[1]{\left\lceil #1 \right\rceil}
        \newcommand{\R}{\mathbb{R}}
        \newcommand{\Z}{\mathbb{Z}}
        \newcommand{\N}{\mathbb{N}}
        \newcommand{\Q}{\mathbb{Q}}
        \newcommand{\cin}{c_{\rm in}}
        \newcommand{\cout}{c_{\rm out}}
        \newcommand{\maj}{\textnormal{Maj}}
        \newcommand{\xor}{\oplus}
        \newcommand{\depth}{\textnormal{depth}}
        \newcommand{\poly}{\textnormal{poly}}
        \newcommand{\pfrac}[2]{\left(\frac{#1}{#2}\right)}
        \newcommand{\cube}{\{0,1\}}
        \newcommand{\cuben}{\cube^{\N}}
        \)`}
      </div>
      {props.children}
    </>
  );
};

export default Container;
