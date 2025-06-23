import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import * as FeatureIcons from "../components/FeatureIcons.tsx";

const TITLE = "Tunny Documentations";
const DESCRIPTION =
  "Tunny is the next-gen Grasshopper optimization tool. it includes previously unseen features such as constrained multi-objective optimization, Quasi-MonteCarlo sampling and dashboards for results analysis etc.";

export default function MainPage(props: PageProps) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Tunny-gh/Tunny-docs/main/static/home-og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div class="flex flex-col min-h-screen">
        <HelloBar />
        <Hero />
        <div class="flex-1">
          <Intro />
          <GettingStarted />
        </div>
        <Footer />
      </div>
    </>
  );
}

function HelloBar() {
  return (
    <a
      class="bg-blue-400 text-black border(b blue-500) p-3 text-center group"
      href="https://github.com/Tunny-gh/Tunny-v1/releases"
    >
      <b>Tunny v1.0 RC1</b> has been released with{" "}
      <b>completely new modern UI</b> and <b>mac support</b>,
      <span class="group-hover:underline">→</span>
    </a>
  );
}

function Hero() {
  return (
    <>
      <div class="flex justify-end items-center gap-4 bg-blue-300">
        <a
          href="/purchase"
          class="border(1 black) inline-flex items-center h-10 px-4 m-4 text-black bg-transparent rounded hover:bg-white"
        >
          Get License
        </a>
        <a
          href="/docs_v1/getting-start"
          class="border(1 black) inline-flex items-center h-10 px-4 m-4 text-black bg-transparent rounded hover:bg-white"
        >
          Documentation
        </a>
      </div>
    </>
  );
}

function Features() {
  const item = "flex md:flex-col items-center gap-5";
  const desc = "flex-1 md:text-center";

  return (
    <div class="grid md:grid-cols-2 gap-6 md:gap-14">
      <div class={item}>
        <FeatureIcons.Globe />
        <div class={desc}>
          Multi-objective optimization <b>with constraint</b>.
        </div>
      </div>

      <div class={item}>
        <FeatureIcons.Island />
        <div class={desc}>
          The only one that supports <b>Bayesian optimization</b>.
        </div>
      </div>

      <div class={item}>
        <FeatureIcons.NoBuild />
        <div class={desc}>
          <b>Powerful</b> result analysis function.
        </div>
      </div>

      <div class={item}>
        <FeatureIcons.Gabage />
        <div class={desc}>
          Do not throw away previous results. <b>Can Restart optimization</b>
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-12">
      <div class="md:flex items-center">
        <div class="flex-1 text-center md:text-left">
          <h2 class="py-2 text(5xl sm:5xl lg:5xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            The <span class="text-blue-500">next-gen</span>{" "}
            Grasshopper optimization tool.
          </h2>

          <p class="mt-4 text-gray-600">
            Reveals design space and solution space at high speed
          </p>
        </div>

        <picture class="block mt-4 md:mt-0">
          <img
            src="/TunnyIcon.svg"
            class="w-80 mx-auto"
            width={100}
            height={100}
            alt="Tunny Icon"
          />
        </picture>
      </div>

      <Features />

      <p class="text-gray-600">
        Tunny includes previously unseen features such as constrained
        multi-objective optimization, Quasi-MonteCarlo sampling and dashboards
        for results analysis etc.
      </p>
    </section>
  );
}

function GettingStarted() {
  return (
    <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 id="getting-started" class="text(3xl gray-600) font-bold">
        <a href="#getting-started" class="hover:underline">
          Getting Started
        </a>
      </h2>
      <p class="text-gray-600">
        From version 1, Tunny supports both mac and windows.
      </p>

      <ol class="text-gray-600" type="1">
        <li>
          1. Download Tunny from{" "}
          <a
            href="https://www.food4rhino.com/en/app/tunny"
            class="text-blue-600 hover:underline"
          >
            Food4Rhino
          </a>{"  "}
          or{"  "}
          <a
            href="https://github.com/Tunny-gh/Tunny-v1/releases"
            class="text-blue-600 hover:underline"
          >
            Release page.
          </a>
        </li>
        <li>
          2. Drag and Drop the downloaded ".yak" file into the Rhino.
        </li>
        <li>
          3. Restart Rhino.
        </li>
        <li>
          4. In Grasshopper, Place the Tunny component and double-click the icon
          to start downloading the necessary libraries.
        </li>
        <li>
          5. Enjoy!
        </li>
      </ol>

      <div class="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
        <a
          href="/docs_v1/getting-start"
          class="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
        >
          View Documentation
        </a>
        <a
          href="/purchase"
          class="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
        >
          Get License
        </a>
      </div>

      <p class="text-gray-600 text-center">
        Please see{" "}
        <a
          href="/docs_v1/getting-start"
          class="text-blue-600 hover:underline"
        >
          the documentation page
        </a>{"  "}
        for more details!
      </p>
    </section>
  );
}
