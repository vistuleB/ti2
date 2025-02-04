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
  },
};
console.log("mathjax");
