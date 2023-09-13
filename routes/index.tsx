import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="flex flex-col h-full">
      <div class="container mx-auto px-4" style="max-width: 700px;">
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
              <a href="/contact">Contact Details</a>
            </p>
            <hr class="my-4" />
            <div class="flex justify-around">
              <div>
                <h2 id="freedom" class="text-2xl">Freedom</h2>
                <i class="fa fa-heart text-red-500"></i>
                <p class="mt-4">
                  All software I develop is free as in freedom.
                </p>
                <p class="mt-4">
                  <a href="https://git.jamesdavidclarke.com/james/">
                    View details
                  </a>
                </p>
              </div>
              <div>
                <h2 id="tutorials" class="text-2xl">Tutorials</h2>
                <i class="fa fa-university"></i>
                <p class="mt-4">
                  I provide tutorials on many subjects including GNU/Linux,
                  Python, Assembly, etc.
                </p>
                <p class="mt-4">
                  <a href="https://jamesdavidclarke.com/tutorials">
                    View details
                  </a>
                </p>
              </div>
              <div>
                <h2 id="services" class="text-2xl">Services</h2>
                <i class="fa fa-briefcase"></i>
                <p class="mt-4">
                  Provide services such as email marketing and bespoke software
                  solutions.
                </p>
                <p class="mt-4">
                  <a href="https://www.savvysenders.com/">View details</a>
                </p>
              </div>
            </div>
            <hr class="my-4" />
          </div>
        </main>
      </div>
    </div>
  );
}
