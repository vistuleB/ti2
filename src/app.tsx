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
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}>
      <FileRoutes />
    </Router>
  );
}
