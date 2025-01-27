import Chapter from "~/components/Chapter";
const Article = () => {
  return (
    <Chapter
         number={2}>
      <div
           id="link-to-toc">
        <p>
          <a
               href="../vorlesungsskript">
            <p>
              Inhaltsverzeichnis
            </p>
          </a>
        </p>
        <p>
          <a
               href="01-00-BooleanCircuits">
            <p>
              &lt;&lt; Kapitel 1.1{" "}
            </p>
          </a>
        </p>
      </div>
      <div
           id="link-to-overview">
        <p>
          <a
               href="https://www.tu-chemnitz.de/informatik/theoretische-informatik/TI-2/index.html">
            <p>
              zur Kursübersicht
            </p>
          </a>
        </p>
        <p>
          <a
               href="01-02-truth-tables-cnf-dnf">
            <p>
              Kapitel 1.2 &gt;&gt;
            </p>
          </a>
        </p>
      </div>
      <main>
        <div
             id="rightSideWrapper">
          <div
               class="content">
            <div
                 class="chapter">
              <div
                   class="subChapter">
                <h1
                     class="hidden-title">
                  <span
                       class="subChapterTitle">
                    1.1 Größe, Tiefe, Fan-In
                  </span>
                </h1>
                <p>
                  Für Boolesche Schaltkreise gibt es drei Komplexitätsparameter, die uns interessieren.
                </p>
                <div
                     class="well container theorem">
                  <p>
                    <span
                         class="numbered-title">
                      Definition.{" "}
                    </span>
                    Die Größe eines Schaltkreises ist die Anzahl seiner Gates, also die Anzahl der Knoten im zugrundeliegenden DAG. Die{" "}
                  </p>
                  <p>
                    Teife ist die Länge des längsten gerichteten Pfades von einem Input- zu einem Output-Gate. Der{" "}
                  </p>
                  <p>
                    Maximum-Fan-in ist der maximale Rein-Grad aller Knoten, also der maximale Fan-in aller Gates.
                  </p>
                </div>
                <div
                     class="alter-warning">
                  <p>
                    <strong>
                      <p>
                        Vorsicht.
                      </p>
                    </strong>
                    Manchmal werden zur Bestimmung der Tiefe die NOT-Gates nicht mitgezählt. Entlang eines Pfades wird also gelegentlich nur die Anzahl der AND- und OR-Gates bestimmt.
                  </p>
                </div>
                <p>
                  Für alle Parameter Größe, Tiefe, Maximum-Fan-in gilt: klein ist gut. Dies ist klar, wenn Sie sich vorstellen, dass Schaltkreis industriell zum Einsatz kommt. Die Größe bestimmt die Anzahl der Transistoren, die Sie brauchen; die Tiefe bestimmt die Dauer, die das Signal braucht, um durch den ganzen Schaltkreis zu laufen und bestimmt somit die Geschwindigkeit, mit der Ihr Schaltkreis seinen Job erledigt.
                </p>
                <p>
                  Der Fan-in ist eher von theoretischem Interesse. Wie bereits oben gesehen, können wir immer einen Fan-in von 2 garantieren, indem wir AND- und OR-Gates mit mehr als zwei Inputs als verschachteltes AND oder OR darstellen:
                </p>
                <figure>
                  <p>
                    <img
                         loading="lazy"
                         src="../img/circuits/and-n-fold-linear-depth.svg"
                         style="height:10em" />
                    oder alternativ:
                  </p>
                  <img
                       loading="lazy"
                       src="../img/circuits/and-n-fold-log-depth.svg"
                       style="height:10em" />
                </figure>
                <p>
                  In beiden Fällen ersetzen wir ein AND-Gate von Fan-in \(n\) durch \(n-1\) AND-Gates von je Fan-in 2. Wenn wir allerdings die{" "}
                </p>
                <p>
                  Tiefe betrachten, so sehen wir, dass der linke Schaltkreis Tiefe \(n-1\) hat, der rechte jedoch nur \(\ceil&#123;\log_2(n)&#125;\). Ganz allgemein stellen wir fest:
                </p>
                <div
                     class="well container theorem">
                  <p>
                    <span
                         class="numbered-title">
                      Theorem
                    </span>
                    Sei \(C\) ein Schaltkreis Maximum-Fan-in \(k\), Größe \(s\) und Tiefe \(d\). Dann gibt es einen äquivalenten Schaltkreis \(C'\) mit Maximum-Fan-in \(2\), Größe höchstens \(s (k-1)\) und Tiefe höchstens \(d \ceil &#123;\log_2 k&#125;\).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Chapter>
  );
};

export default Article;