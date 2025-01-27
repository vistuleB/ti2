import { Title } from "@solidjs/meta";

export default function About() {
  return (
    <>
      <div>
        <p>
          <a href="https://www.tu-chemnitz.de/informatik/theoretische-informatik/TI-2/index.html">
            zur Kursübersicht
          </a>
        </p>
      </div>
      <main>
        <Title>About</Title>
        <h1>Table of Contents</h1>
        <p>
          <a href="/lecture-notes/01-00-BooleanCircuits">Lecture 1</a>
        </p>
      </main>
    </>
  );
}
