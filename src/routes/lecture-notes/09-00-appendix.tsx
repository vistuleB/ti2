import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        title="Appendix - Manual für das Schreiben dieses Skripts"
        number={9.0}
        path="/lecture-notes52.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="08-01-Time-hierarchy-theorem">
            &lt;&lt; Kapitel 8.1
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    9. Appendix - Manual für das Schreiben dieses Skripts
                  </span>
                </h1>
                <div class="alert-info">
                  <Paragraph>
                    Dieses Kapitel sind ausschließlich persönliche Notizen für mich dazu,
                    wie man "korrekt" dieses Skript schreibt, insbesondere wie man die
                    automatische Numerierung verwendet. Es ist also natürlich nicht Stoff
                    der Vorlesung.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Parts of these lecture notes are generated automatically with
                    javascript. This includes chapter and subchapter numbering, links to
                    next and previous chapters, the table of content, and theorem
                    numbering.
                  </Paragraph>
                </Paragraph>
                <ol>
                  <li>
                    If you want to add a new chapter, you have to do two things: add an
                    entry to
                    <a href="../javascript/table-of-contents.js">
                      table-of-contents.js
                    </a>
                    . Just follow the format there. Then add the linked file. Best to
                    copy an existing file, a "chapter" or a "subchapter" file, depending
                    on the new file you want to create. The ordering in which they
                    appear (in the table of content and in the link structure given by
                    the{" "}
                    <code>
                      next
                    </code>
                    nad{" "}
                    <code>
                      prev
                    </code>
                    navigation links) is
                    determined purely by the order in which they appear in
                    <a href="../javascript/table-of-contents.js">
                      table-of-contents.js
                    </a>
                    .
                  </li>
                  <li>
                    Theorem environments (theorems, lemmas, conjectures) can be created
                    as follows:
                    <div class="well container theorem">
                      <Paragraph>
                        <span
                          id="sauer-shelah-lemma"
                          class="numbered-title">
                          Sauer-Shelah lemma
                        </span>
                        Let $A \subseteq \&#123;0,1\&#125;^n$. If $|A| \gt&#123;\rm vol&#125;(n,r-1)$ then
                        there exists some set $I \subseteq [n]$ of indices with $|I|
                        \geq r$ such that
                      </Paragraph>
                      \begin&#123;align*&#125; \&#123; \mathbf&#123;x&#125;_I \ | \ \mathbf&#123;x&#125; \in A\&#125; =
                      \&#123;0,1\&#125;^r \ , \end&#123;align*&#125; in other words, the set $I$ of
                      coordinates is shattered.
                    </div>
                    and here is the source code:
                    <pre>
                      &lt;div class='well container theorem'&gt;
                      &lt;p&gt;&lt;span class='numbered-title' id="sauer-shelah-lemma" data-label-title="Lemma"&gt;Lemma&lt;/span&gt; 
                      &lt;strong&gt;(Sauer-Shelah lemma).&lt;/strong&gt;Let $A \subseteq \&#123;0,1\&#125;^n$. If $|A| \gt&#123;\rm vol&#125;(n,r-1)$ then
                      there exists some set $I \subseteq [n]$ of indices with $|I| \geq r$ such that&lt;/p&gt;
                      \begin&#123;align*&#125;
                      \&#123; \mathbf&#123;x&#125;_I \ | \ \mathbf&#123;x&#125; \in A\&#125; = \&#123;0,1\&#125;^r \ ,
                      \end&#123;align*&#125;
                      in other words, the set $I$ of coordinates is shattered.
                      &lt;/div class='well container theorem'&gt;
                    </pre>
                    You must give the environment{" "}
                    <code>
                      div
                    </code>
                    the class
                    <code>
                      theorem
                    </code>
                    and the title{" "}
                    <code>
                      span
                    </code>
                    the class
                    <code>
                      nunbered-title
                    </code>
                    , otherwise the automatic numbering will
                    not work.
                    <Paragraph>
                      The attributes{" "}
                      <code>
                        id="sauer-shelah-lemma"
                      </code>
                      and
                      <code>
                        data-label-title="Lemma"
                      </code>
                      are necessarily for
                      automatic referencing. Here is how you create a reference:
                    </Paragraph>
                    <div class="well container">
                      This follows easily from the
                      <span
                        data-ref="sauer-shelah-lemma"
                        class="reference" />
                      just
                      above and
                      <span
                        data-ref="theorem-N-N^2"
                        class="reference" />
                      .
                    </div>
                    and here is the source code:
                    <pre>
                      Remember that&lt;span class="reference" data-ref="theorem-N-N^2"&gt;&lt;/span&gt; shows that $\N$ and $\N^2$ are equipotent.
                    </pre>
                  </li>
                  <Paragraph>
                    <Paragraph>
                      To work, the{" "}
                      <code>
                        id
                      </code>
                      of a theorem (or a general environment)
                      has to be unique 
                      {" "}
                      <i>
                        across all files of the lecture notes
                      </i>
                      {" "}
                      .
                      Also, since we have to correctly compute the numbering of theorems
                      like{" "}
                      <span
                        data-ref="theorem-N-N^2"
                        class="reference" />
                      , we
                      would have to read the file containing it. So we'd have to write
                      code that, while loading Chapter 9, loads all chapters of referenced
                      environments. Potentially, this forces the browser to load
                    </Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <i>
                        the entire lecture notes
                      </i>
                      {" "}
                      each time a single file is loaded.
                      This would take too much time, so we use a precompilation step:
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      I wrote an html page
                    </Paragraph>
                    <Paragraph>
                      <a href="../javascript/put-all-in-one-page.html">
                        put-all-in-one-page.html
                      </a>
                      that loads the table of content and all chapters (which takes quite
                      a substantial amount of time, like 20 seconds or so) and extracts
                      all environments with class{" "}
                      <code>
                        theorem
                      </code>
                      or
                    </Paragraph>
                    <Paragraph>
                      <code>
                        exercise
                      </code>
                      that have also class
                    </Paragraph>
                    <Paragraph>
                      <code>
                        numbered-title
                      </code>
                      and numbers them. If the environment has
                      the attribute{" "}
                      <code>
                        data-label-title
                      </code>
                      , then it adds an entry
                      to a global dictionary. At the end, when all has been loaded, the
                      web page will show this dictionary as a json object.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      You should then copy this table and paste it in the beginning of the
                      file
                    </Paragraph>
                    <Paragraph>
                      <a href="../javascript/number-my-theorems.js">
                        nunmber-my-theorems.js
                      </a>
                      . The point is that creating the table is expensive (must read all
                      chapters) but using it is cheap.
                    </Paragraph>
                  </Paragraph>
                  <div class="alert-warning">
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Important:
                      </b>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      The page
                    </Paragraph>
                    <Paragraph>
                      <a href="../javascript/put-all-in-one-page.html">
                        put-all-in-one-page.html
                      </a>
                      does not work if you just open it by double-clicking in your file
                      explorer. It has to be hosted by an http-server server with CORS
                      enabled, for example
                    </Paragraph>
                    <Paragraph>
                      <pre>
                        <Paragraph>
                          http-server .  --cors
                        </Paragraph>
                      </pre>
                      Once this server is running, go to
                    </Paragraph>
                    <Paragraph>
                      <code>
                        http://localhost:8080
                      </code>
                      in your browser.
                    </Paragraph>
                  </div>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Chapter>
    </Container>
  );
};

export default Article;