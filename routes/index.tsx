import { useSignal } from "@preact/signals";
import Grid from "../components/Grid.tsx";

export default function Home() {
  const count = useSignal(3);
  const grid = [
    {
      title: "Freedom",
      icon_classes: "fa fa-heart text-red-500",
      description: "All software I develop is free as in freedom.",
      url: "https://git.jamesdavidclarke.com/james/",
    },
    {
      title: "Tutorials",
      icon_classes: "fa fa-university",
      description:
        "I provide tutorials on many subjects including GNU/Linux, Python, Assembly, etc.",
      url: "https://jamesdavidclarke.com/tutorials",
    },
    {
      title: "Services",
      icon_classes: "fa fa-briefcase",
      description:
        "Provide services such as email marketing and bespoke software solutions.",
      url: "https://www.savvysenders.com/",
    },
  ];

  return (
    <div class="flex flex-col h-full">
      <div class="mx-auto px-4">
        <main id="main" class="mt-4 mb-16">
          <div id="home-jumbotron" class="text-center p-4 bg-transparent">
            <h1 class="text-4xl">Home</h1>
            <h2
              id="here-you-will-find-many-projects-ive-worked-on-tutorials--blog-posts"
              class="text-4xl"
            >
              Here you will find many projects I&rsquo;ve worked on, tutorials
              &amp; blog posts.
            </h2>
            <p class="mt-4">
              <a
                href="/contact"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Contact Details
              </a>
            </p>
            <hr class="my-4" />
            <Grid grid={grid} />
            <hr class="my-4" />
          </div>
        </main>
      </div>
    </div>
  );
}
