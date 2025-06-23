import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import NavigationBar from "../components/NavigationBar.tsx";
import DocsHeader from "../components/DocsHeader.tsx";

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
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">Need Subscription</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>

              <tr class="bg-gray-50">
                <td class="p-4 font-semibold text-gray-900" colspan="4">
                  Single-Objective Optimization
                </td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">TPE</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">cTPE</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">GP: Optuna & BoTorch</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">HEBO</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>

              <tr class="bg-gray-50">
                <td class="p-4 font-semibold text-gray-900" colspan="4">
                  Multi-Objective Optimization
                </td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">NSGA-II</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">NSGA-III, MOEA/D, DE</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>

              <tr class="bg-gray-50">
                <td class="p-4 font-semibold text-gray-900" colspan="4">
                  Advanced Algorithms
                </td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">CMA-ES & MO-CMA-ES</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">QMC Sampling</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">Preferential GP</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>

              <tr class="bg-gray-50">
                <td class="p-4 font-semibold text-gray-900" colspan="4">
                  Support
                </td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">Forum Support</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>
              <tr>
                <td class="p-4 text-gray-700">Email Support</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center">-</td>
                <td class="p-4 text-center text-green-600">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function PurchaseSection() {
  const stripeUrls = {
    trial: "https://buy.stripe.com/your-trial-url",
    professionalMonthly: "https://buy.stripe.com/your-professional-monthly-url",
    professionalYearly: "https://buy.stripe.com/your-professional-yearly-url",
    educational: "https://buy.stripe.com/your-educational-url",
  };

  return (
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-lg mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          Get Your License Today
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Community */}
          <div class="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Community</h3>
            <div class="text-3xl font-bold text-green-600 mb-4">Free</div>
            <ul class="text-gray-600 mb-6 space-y-2">
              <li>✓ Basic TPE optimization</li>
              <li>✓ NSGA-II multi-objective</li>
              <li>✓ Random & BruteForce</li>
              <li>✓ Forum support</li>
            </ul>
            <div class="bg-gray-200 text-gray-500 py-3 px-6 rounded-lg font-semibold">
              Already Included
            </div>
          </div>

          {/* Trial */}
          <div class="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-blue-500">
            <div class="bg-blue-500 text-white text-sm py-1 px-3 rounded-full inline-block mb-2">
              LIMITED TIME
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Trial</h3>
            <div class="text-3xl font-bold text-blue-600 mb-4">Free</div>
            <ul class="text-gray-600 mb-6 space-y-2">
              <li>✓ All Community features</li>
              <li>✓ Advanced algorithms</li>
              <li>✓ Constrained optimization</li>
              <li>✓ 30-day trial period</li>
            </ul>
            <a
              href={stripeUrls.trial}
              target="_blank"
              rel="noopener noreferrer"
              class="block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Start Free Trial
            </a>
          </div>

          {/* Professional */}
          <div class="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-green-500">
            <div class="bg-green-500 text-white text-sm py-1 px-3 rounded-full inline-block mb-2">
              MOST POPULAR
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
            <div class="mb-4">
              <div class="text-2xl font-bold text-green-600">$xx</div>
              <div class="text-sm text-gray-500">/month</div>
              <div class="text-lg font-bold text-green-600 mt-2">$xx</div>
              <div class="text-sm text-gray-500">/year</div>
              <div class="text-xs text-green-600 font-medium">(Save 17%)</div>
            </div>
            <ul class="text-gray-600 mb-6 space-y-2">
              <li>✓ All Trial features</li>
              <li>✓ Commercial use</li>
              <li>✓ Priority email support</li>
            </ul>
            <div class="space-y-2">
              <a
                href={stripeUrls.professionalMonthly}
                target="_blank"
                rel="noopener noreferrer"
                class="block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Buy Monthly
              </a>
              <a
                href={stripeUrls.professionalYearly}
                target="_blank"
                rel="noopener noreferrer"
                class="block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Buy Annual
              </a>
            </div>
          </div>

          {/* Educational */}
          <div class="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Educational</h3>
            <div class="text-3xl font-bold text-purple-600 mb-1">$xx</div>
            <div class="text-sm text-gray-500 mb-4">/month</div>
            <ul class="text-gray-600 mb-6 space-y-2">
              <li>✓ All Professional features</li>
              <li>✓ Academic institutions only</li>
              <li>✓ Student & educator discount</li>
              <li>✓ Research license</li>
            </ul>
            <a
              href={stripeUrls.educational}
              target="_blank"
              rel="noopener noreferrer"
              class="block bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Buy Educational
            </a>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-gray-600 mb-4">
            Need help choosing the right license? Check our documentation or
            contact support.
          </p>
          <div class="flex justify-center gap-4">
            <a
              href="/docs_v1/subscription"
              class="text-blue-600 hover:underline"
            >
              License Documentation
            </a>
            <span class="text-gray-400">|</span>
            <a
              href="/faqs/basics-and-overview"
              class="text-blue-600 hover:underline"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
