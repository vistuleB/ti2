window.MathJax = {
  loader: {
    load: ["ui/lazy"],
  },
  startup: {
    ready() {
      //
      // Adjust the lazy observer to have a margin of 500px so expressions
      //   will be typeset a little when they are still a little bit away from being seen.
      //
      MathJax.startup.extendHandler((handler) => {
        handler.documentClass = class extends handler.documentClass {
          constructor(...args) {
            super(...args);
            this.lazyObserver = new IntersectionObserver(
              this.lazyObserve.bind(this),
              { rootMargin: "500px" }
            );
          }
        };
        return handler;
      }, 100);
      //
      // Do the regular startup.
      //
      MathJax.startup.defaultReady();
    },
  },
  tex: {
    tags: "ams",
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    macros: {
      floor: ["\\left\\lfloor #1 \\right\\rfloor", 1],
      ceil: ["\\left\\lceil #1 \\right\\rceil", 1],
      R: "\\mathbb{R}",
      Z: "\\mathbb{Z}",
      N: "\\mathbb{N}",
      Q: "\\mathbb{Q}",
      cin: "c_{\\rm in}",
      cout: "c_{\\rm out}",
      maj: "\\textnormal{Maj}",
      xor: "\\oplus",
      depth: "\\textnormal{depth}",
      poly: "\\textnormal{poly}",
      pfrac: ["\\left(\\frac{#1}{#2}\\right)", 2],
      cube: "\\{0,1\\}",
      cuben: "\\{0,1\\}^{\\N}",
      sat: "\\textnormal{sat}",
      zero: "\\textnormal{zero}",
      succ: "\\textnormal{succ}",
      comp: "\\textnormal{Comp}",
      primrec: "\\textnormal{PrimRec}",
    },
  },
};
