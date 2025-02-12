import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        count={31}
        title_gr="Rechnerübung: Gute kontextfreie Grammatiken entwerfen"
        title_en="exercise design grammars"
        number={5.3}
        path="/lecture-notes31.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="05-02-cfg-to-pda">
            &lt;&lt; Kapitel 5.2
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="05-04-LL1-grammars">
            Kapitel 5.4 &gt;&gt;
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
                      drawManualGrammar.html
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
                    Dem Eingabefenster für die Grammatik links oben. Hier können Sie Ihre eigene Grammatik
                    eingeben.
                  </li>
                  <li>
                    Dem Eingabefenster für das Eingabewort.
                  </li>
                  <li>
                    Der Backtrack-Baum. Jeder Pfad im Backtrack-Baum ist der Versuch, das Eingabewort aus den
                    Grammatikregeln per Linksableitung abzuleiten. Die Pfade, die in Sackgassen enden, sind rot
                    markiert.
                  </li>
                  <li>
                    Der Ableitungsbaum. Für jeden Knoten \(w\) im Backtrack-Baum stellt der
                    Pfad von Wurzel nach \(w\) eine Linksableitung dar. Wenn Sie auf \(w\) klicken,
                    sehen Sie den entsprechenden Ableitungsbaum. Per Default wird die erste erfolgreiche
                    Linksableitung in einen Ableitungsbaum umgewandelt und angezeigt (wenn es denn überhaupt
                    eine
                    erfolgreiche Ableitung gibt).
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
                    <i>
                      Labels
                    </i>
                    , die
                    durch `.`separiert sind. Sie können den "Regelvorschlag"
                    ganz links unten in der App reinkopieren, um automatisch Regeln für alphanumerische
                    Zeichen zu bekommen (allerdings verschlechtert das die Laufzeit; ich habe erstmal
                    gar nicht auf Effizienz geachtet).
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Geben Sie das Eingabewort `a.aaaaa.aaaa.aaaa.aaaa.aaaa`ein. Wie
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
                    {" "}
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
                    nicht eindeutig. Das Wort `[([()(`hat zwei
                    verschiedene Ableitungsbäume. Können Sie eine äquivalente
                    {" "}
                    <i>
                      eindeutige
                    </i>
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
                    {" "}
                    Die folgende Grammatik hat User{" "}
                    <i>
                      babou
                    </i>
                    {" "}
                    auf{" "}
                    <a href="https://cstheory.stackexchange.com/questions/22520/example-of-context-free-grammar-that-triggers-exponential-behaviour-without-memo">
                      StackExchange
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
                    <i>
                      eindeutige
                    </i>
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
                    .
                    Finden Sie eine kontextfreie Sprache \(L\), für die{" "}
                    <i>
                      jede
                    </i>
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