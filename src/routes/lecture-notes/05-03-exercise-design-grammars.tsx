import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter number={31}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="05-02-cfg-to-pda">
            <Paragraph>
              &lt;&lt; Kapitel 05.02
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="05-04-LL1-grammars">
            <Paragraph>
              Kapitel 05.04 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    5.3 Rechnerübung: Gute kontextfreie Grammatiken entwerfen
                  </span>
                </h1>
                <Paragraph>
                  <Paragraph>
                    Benutzen Sie die App{" "}
                    <a href="../../demos/drawManualGrammar.html">
                      <Paragraph>
                        drawManualGrammar.html
                      </Paragraph>
                    </a>
                    ,
                    um mit kontextfreien Grammatik zu experimentieren:{" "}
                  </Paragraph>
                </Paragraph>
                <figure>
                  <a href="../../demos/drawManualGrammar.html">
                    <img
                      style="height:20em"
                      src="../img/cfg-manual-screenshot-2.png"
                      loading="lazy" />
                  </a>
                </figure>
                <Paragraph>
                  <Paragraph>
                    Diese besteht aus folgenden Teilen:
                  </Paragraph>
                </Paragraph>
                <ol>
                  <li>
                    <Paragraph>
                      Dem Eingabefenster für die Grammatik links oben. Hier können Sie Ihre eigene Grammatik
                      eingeben.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Dem Eingabefenster für das Eingabewort.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Der Backtrack-Baum. Jeder Pfad im Backtrack-Baum ist der Versuch, das Eingabewort aus den
                      Grammatikregeln per Linksableitung abzuleiten. Die Pfade, die in Sackgassen enden, sind rot
                      markiert.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Der Ableitungsbaum. Für jeden Knoten \(w\) im Backtrack-Baum stellt der
                      Pfad von Wurzel nach \(w\) eine Linksableitung dar. Wenn Sie auf \(w\) klicken,
                      sehen Sie den entsprechenden Ableitungsbaum. Per Default wird die erste erfolgreiche
                      Linksableitung in einen Ableitungsbaum umgewandelt und angezeigt (wenn es denn überhaupt
                      eine
                      erfolgreiche Ableitung gibt).
                    </Paragraph>
                  </li>
                </ol>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    Geben Sie folgende Grammatik in die App ein:
                  </Paragraph>
                  <pre>
                    <Paragraph>
                      S -&gt; ;
                      S -&gt; "("S")"S ;
                      S -&gt; "(" S "]" S;
                    </Paragraph>
                  </pre>
                  <Paragraph>
                    <Paragraph>
                      Was ist die erzeugte Sprache? Können Sie sie in Worten beschreiben?
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Erzeugen Sie Wörter in dieser Sprache, für die der Backtrack-Baum viele rote
                      Sackgassen enthält.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Schreiben Sie eine äquivalente Grammatik (d.h., die die gleiche Sprache erzeugt),
                      für die es keine oder nur sehr kurze Sackgassen gibt.
                      Testen Sie die beiden Grammatiken mit "großen" Eingabewörtern
                      und schauen Sie, ob Sie Laufzeitunterschiede bemerken.
                      (Hier erweist sich mein ineffizienter Code als Vorteil: eine schlechte Grammatik
                      wird sofort bestraft).
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    Schreiben Sie eine kontextfreie Grammatik für die Sprache aller
                    "korrekten" URLs; also Folgen von mindestens zwei{" "}
                    <em>
                      Labels
                    </em>
                    , die
                    durch{" "}
                    <code>
                      .
                    </code>
                    separiert sind. Sie können den "Regelvorschlag"
                    ganz links unten in der App reinkopieren, um automatisch Regeln für alphanumerische
                    Zeichen zu bekommen (allerdings verschlechtert das die Laufzeit; ich habe erstmal
                    gar nicht auf Effizienz geachtet).
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Geben Sie das Eingabewort{" "}
                      <code>
                        a.aaaaa.aaaa.aaaa.aaaa.aaaa
                      </code>
                      ein. Wie
                      sieht Ihr Backtrack-Baum aus? Hat er viele Sackgassen? Können Sie Ihre Grammatik
                      so abändern, dass sie zwar noch die gleiche Sprache erzeugt, aber keine / nur wenige
                      Sackgassen hat?
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    Entwerfen Sie eine Grammatik für arithmetische Ausdrücke im Racket-Stil, also
                  </Paragraph>
                  <pre>
                    <Paragraph>
                      (* (+ 2 3) (- 4 (* 2 4) 5)
                      (+ 1 2 (* 2))
                    </Paragraph>
                  </pre>
                  <Paragraph>
                    <Paragraph>
                      Leidet Ihre Grammatik an langen Sackgassen? Wenn ja, können Sie die Grammatik abändern?
                      Haben Sie mittlerweile ein Schema erkannt, welche Konstrukte lange Sackgassen
                      begünstigen?
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    Wiederholen Sie die vorherige Übung für arithmetische Ausdrücke in der uns
                    geläufigen Infix-Notation. Hierbei sollten die Konventionen Punkt-vor-Strich
                    beachtet werden. Im Ableitungsbaum von
                  </Paragraph>
                  <Paragraph>
                    <pre>
                      <Paragraph>
                        2+3*(5+4)
                      </Paragraph>
                    </pre>
                    sollte sich das wiederspiegeln.
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    {" "}{" "}
                    <b>
                      (Challenge)
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Geben Sie die Grammatik hier ein:
                  </Paragraph>
                  <Paragraph>
                    <pre>
                      <Paragraph>
                        S -&gt; "("S")"S;
                        S -&gt; "["S"("S;
                        S -&gt; ;
                      </Paragraph>
                    </pre>
                    Überlegen Sie, was diese "bedeutet". Sie sehen, die Grammatik ist
                    nicht eindeutig. Das Wort{" "}
                    <code>
                      [([()(
                    </code>
                    hat zwei
                    verschiedene Ableitungsbäume. Können Sie eine äquivalente
                  </Paragraph>
                  <Paragraph>
                    <em>
                      eindeutige
                    </em>
                    Grammatik schreiben?
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    {" "}{" "}
                    <b>
                      (Challenge)
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Die folgende Grammatik hat User{" "}
                    <em>
                      babou
                    </em>
                    auf{" "}
                    <a href="https://cstheory.stackexchange.com/questions/22520/example-of-context-free-grammar-that-triggers-exponential-behaviour-without-memo">
                      <Paragraph>
                        StackExchange
                      </Paragraph>
                    </a>
                    vorgeschlagen als Beispiel für eine eindeutige Grammatik,
                    bei der Sie exponentiell große Backtrack-Bäume bekommen können:
                  </Paragraph>
                  <Paragraph>
                    <pre>
                      <Paragraph>
                        S -&gt;  "a" X "b" | "a" X "c";
                        X -&gt; "a" | "a" X | "a" X X;
                      </Paragraph>
                    </pre>
                    Das ist aber keine Kunst, da die Grammatik uneindeutig ist.
                    Können Sie eine{" "}
                    <em>
                      eindeutige
                    </em>
                    Grammatik angebene, die ähnlich
                    exponentielles Verhalten zeigt? Exponentiell heißt: mit jedem
                    zusätlichen Zeichen des Eingabewortes kann die Größe des
                    Backtrack-Baumes um einen Faktor \(R \gt 1\) wachsen.
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    {" "}{" "}
                    <b>
                      (Super-Challenge; ich hab selbst keine Lösung)
                    </b>
                    {" "}
                    .
                    Finden Sie eine kontextfreie Sprache \(L\), für die{" "}
                    <em>
                      jede
                    </em>
                    Grammatik,
                    die \(L\) erzeugt, unter exponentiell großen Backtrack-Bäumen leidet.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Chapter>
    </Container>
  );
};

export default Article;