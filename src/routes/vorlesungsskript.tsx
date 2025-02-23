import { MetaProvider, Title } from "@solidjs/meta";
import Container from "~/components/Container";
import TOC from "~/components/TOC";

export default function Home() {
  return (
    <Container>
      <MetaProvider>
        <Title title="Ti2 | Table of contents" />
      </MetaProvider>
      <TOC />
    </Container>
  );
}
