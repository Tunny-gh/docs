import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import NavigationBar from "../components/NavigationBar.tsx";
import DocsHeader from "../components/DocsHeader.tsx";
import PurchaseSection from "../islands/PurchaseSection.tsx";

const TITLE = "Get Tunny License";
const DESCRIPTION =
  "Get your Tunny license to access advanced optimization features and premium support.";

export default function PurchasePage(props: PageProps) {
  return (
    <>
      <Head>
        <title>{TITLE} | Tunny docs</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/hrntsm/Tunny-docs/main/static/home-og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div class="flex flex-col min-h-screen">
        <DocsHeader />
        <NavigationBar active="/purchase" />
        <main class="flex-1">
          <Hero />
          <LicenseComparison />
          <PurchaseSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

function Hero() {
  return (
    <section class="bg-blue-100 py-16">
      <div class="max-w-screen-lg mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Choose Your Tunny License
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Unlock advanced optimization features with Tunny's professional
          licenses. Start with our free Community version or upgrade for premium
          algorithms and support.
        </p>
      </div>
    </section>
  );
}

function LicenseComparison() {
  return (
    <section class="py-16 bg-white">
      <div class="max-w-screen-lg mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          License Comparison
        </h2>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead class="bg-blue-500 text-white">
              <tr>
                <th class="text-left p-4 font-semibold">Feature</th>
                <th class="text-center p-4 font-semibold">Community</th>
                <th class="text-center p-4 font-semibold">Trial</th>
                <th class="text-center p-4 font-semibold">
                  Professional / Educational
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="bg-gray-50">
                <td class="p-4 font-semibold text-gray-900" colspan="4">
                  License Requirements
                </td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">Need License</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">Need Subscription</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>

              <tr class="bg-gray-50">
                <td class="p-4 font-semibold text-gray-900" colspan="4">
                  Single-Objective Optimization
                </td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">TPE</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">cTPE</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">GP: Optuna & BoTorch</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">HEBO</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>

              <tr class="bg-gray-50">
                <td class="p-4 font-semibold text-gray-900" colspan="4">
                  Multi-Objective Optimization
                </td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">NSGA-II</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">NSGA-III, MOEA/D, DE</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>

              <tr class="bg-gray-50">
                <td class="p-4 font-semibold text-gray-900" colspan="4">
                  Advanced Algorithms
                </td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">CMA-ES & MO-CMA-ES</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">QMC Sampling</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">Preferential GP</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>

              <tr class="bg-gray-50">
                <td class="p-4 font-semibold text-gray-900" colspan="4">
                  Support
                </td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">Forum Support</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">Email Support</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600 text-xl">🐟</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
