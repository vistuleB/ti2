import { MetaProvider, Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

export default function Something() {
  return (
    <main>
      <Title>Helloo World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps. $x$
      </p>
    </main>
  );
}
