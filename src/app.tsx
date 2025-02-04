import { MetaProvider, Title } from "@solidjs/meta";
import { Router, useAction } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createEffect, Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>TI-2</Title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
          />
          <link rel="stylesheet" type="text/css" href="../lecture-notes.css" />
          <link rel="stylesheet" type="text/css" href="../TI.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
          <script type="text/javascript" src="/mathjax_setup.js"></script>
          <script
            type="text/javascript"
            id="MathJax-script"
            async
            src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
          <div id="mathjax-definitions" style="display:none">
            \( \newcommand&#123;\floor&125;[1]&#123;\left\lfloor #1
            \right\rfloor&125; \newcommand&#123;\ceil&125;[1]&#123;\left\lceil
            #1 \right\rceil&125;
            \newcommand&#123;\R&125;&#123;\mathbb&#123;R&125;&125;
            \newcommand&#123;\Z&125;&#123;\mathbb&#123;Z&125;&125;
            \newcommand&#123;\N&125;&#123;\mathbb&#123;N&125;&125;
            \newcommand&#123;\Q&125;&#123;\mathbb&#123;Q&125;&125;
            \newcommand&#123;\cin&125;&#123;c_&#123;\rm in&125;&125;
            \newcommand&#123;\cout&125;&#123;c_&#123;\rm out&125;&125;
            \newcommand&#123;\maj&125;&#123;\textnormal&#123;Maj&125;&125;
            \newcommand&#123;\xor&125;&#123;\oplus&125;
            \newcommand&#123;\depth&125;&#123;\textnormal&#123;depth&125;&125;
            \newcommand&#123;\poly&125;&#123;\textnormal&#123;poly&125;&125; \)
          </div>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}>
      <FileRoutes />
    </Router>
  );
}
