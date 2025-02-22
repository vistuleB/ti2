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
      F: "\\mathbb{F}",
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
      x: "\\mathbf{x}",
      y: "\\mathbf{y}",
      z: "\\mathbf{z}",
      u: "\\mathbf{u}",
      v: "\\mathbf{v}",
      w: "\\mathbf{w}",
      fcube: "\\cube^n \\\rightarrow \\cube",
      pred: "\\textnormal{pred}",
      pair: "\\textnormal{pair}",
      first: "\\textnormal{first}",
      second: "\\textnormal{second}",
      height: "\\textnormal{height}",
      BST: "\\textnormal{BST}",
      keys: "\\textnormal{keys}",
      E: "\\mathbb{E}",
      array: "\\textnormal{array}",
      blackdepth: "\\textnormal{blackdepth}",
      blackheight: "\\textnormal{blackheight}",
      qstart: "q_{\\rm start}",
      qend: "q_{\\rm end}",
      step: ["\\stackrel{#1}{\\rightarrow}", 1],
      Step: ["\\stackrel{#1}{\\Rightarrow}", 1],
      First: "\\textnormal{FIRST}",

      Pets: ["\\stackrel{#1}{\\Longleftarrow}", 1],
      rstep: ["\\stackrel{#1}{\\rightarrowtail}", 1],
      Pets: ["\\stackrel{#1}{\\Longleftarrow}", 1],
      Steps: ["\\stackrel{#1}{\\Longrightarrow^*}", 1],
      steps: ["\\stackrel{#1}{\\rightarrow^*}", 1],
      qstart: "q_{\\rm start",
      front: "\\textnormal{front}",
      Front: "\\textnormal{Front}",
      qend: "{q_{\\rm end}",
      dk: ["\\hat{#1}", 1],
      dkt: ["#1", 1],
    },
  },
};
