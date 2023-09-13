import { AppProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function App({ Component, url }: AppProps) {
  const pathname = url.pathname;
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css"
          integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY="
          crossOrigin="anonymous"
        >
        </link>
        <title>James David Clarke</title>
        <meta
          name="description"
          content="Here you will find many projects I’ve worked on, tutorials &amp; blog posts. Contact Details
Freedom All software I develop is free as in freedom.
View details
Tutorials I provide tutorials on many subjects including GNU/Linux, Python, Assembly, etc.
View details
Services Provide services such as email marketing and bespoke software solutions.
View details
Disclaimer: The art assets from the above section are from Feather Icons. Copyright/License statement for those works is here."
        >
        </meta>
      </head>
      <body>
        <Header active={pathname} />
        <Component />
      </body>
      <footer id="footer" class="mt-auto text-center text-gray-500 py-4">
        <div class="container mx-auto px-4">
          <strong>James David Clarke</strong> &copy; 2023 All Rights Reserved.
        </div>
      </footer>
    </html>
  );
}
