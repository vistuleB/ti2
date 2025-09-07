window.MathJax = {
  loader: {
    load: ["ui/lazy"],
  },
  startup: {
    ready() {
      // extend lazy observer margin
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

      // run default startup
      MathJax.startup.defaultReady();
    },
  },

  // Renderer settings (SVG)
  // svg: {
  //   displayAlign: "left",
  //   displayIndent: "0em",
  // },

  // Input settings (TeX)
  tex: {
    tags: "ams",
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    // displayMath: [['%%', '%%']],
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
      b: "\\mathbf{b}",
      x: "\\mathbf{x}",
      y: "\\mathbf{y}",
      z: "\\mathbf{z}",
      u: "\\mathbf{u}",
      v: "\\mathbf{v}",
      w: "\\mathbf{w}",
      fcube: "\\cube^n \\rightarrow \\cube",
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
      Steps: ["\\stackrel{#1}{\\Longrightarrow^*}", 1],
      steps: ["\\stackrel{#1}{\\rightarrow^*}", 1],
      front: "\\textnormal{front}",
      Front: "\\textnormal{Front}",
      dk: ["\\hat{#1}", 1],
      dkt: ["#1", 1],
      qaccept: "q_{\\rm yes}",
      qreject: "q_{\\rm no}",
      qstart: "q_{\\rm start}",
      state: "\\textnormal{state}",
      lsr: "\\{\\texttt{L}, \\texttt{S}, \\texttt{R}\\}",
      enc: "\\textnormal{enc}",
      writelambda: "\\Sigma \\cup \\{0, 1, \\texttt{#}, \\texttt{,}, \\texttt{L}, \\texttt{S}, \\texttt{R}, \\texttt{;}\\}\\}",
      halt: "{\\rm H{\\small ALT}}",
      tm: "\\textnormal{TM}",
      diag: "\\textnormal{Diag}",
      negdiag: "\\textnormal{NegDiag}",
      top: "\\textnormal{top}",
      bottom: "\\textnormal{bottom}",
      bnegdiag: "\\textnormal{TimedNegDiag}",
      bhalt: "{\\rm T{\\small IMED}H{\\small ALT}}",
      rls: "\\{\\texttt{L}, \\texttt{S}, \\texttt{R}\\}",
      TIME: "\\textnormal{TIME}",
      NTIME: "\\textnormal{NTIME}",
      SPACE: "\\textnormal{SPACE}",
      NSPACE: "\\textnormal{NSPACE}}",
    }
  }
}
