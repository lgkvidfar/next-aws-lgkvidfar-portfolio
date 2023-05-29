import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      style={{
        backgroundColor: "#1b1b1b",
      }}
    >
      <Head />
      <body
        style={{
          overflow: "hidden",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
