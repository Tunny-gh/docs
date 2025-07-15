import { useState } from "preact/hooks";
import TermsModal from "../components/TermsModal.tsx";

export default function PurchaseSection() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState<
    {
      type: string;
      url: string;
    } | null
  >(null);

  const stripeUrls = {
    trial: "https://buy.stripe.com/your-trial-url",
    professionalMonthly: "https://buy.stripe.com/your-professional-monthly-url",
    professionalYearly: "https://buy.stripe.com/your-professional-yearly-url",
    educational: "https://buy.stripe.com/your-educational-url",
  };

  const handlePurchaseClick = (licenseType: string, url: string) => {
    setSelectedLicense({ type: licenseType, url });
    setIsTermsModalOpen(true);
  };

  const handleTermsAccept = () => {
    if (selectedLicense) {
      window.open(selectedLicense.url, "_blank", "noopener,noreferrer");
    }
    setIsTermsModalOpen(false);
    setSelectedLicense(null);
  };

  const handleTermsClose = () => {
    setIsTermsModalOpen(false);
    setSelectedLicense(null);
  };

  return (
    <>
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
              <button
                onClick={() => handlePurchaseClick("Trial", stripeUrls.trial)}
                class="block w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Start Free Trial
              </button>
            </div>

            {/* Professional */}
            <div class="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-green-500">
              <div class="bg-green-500 text-white text-sm py-1 px-3 rounded-full inline-block mb-2">
                MOST POPULAR
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Professional
              </h3>
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
                <button
                  onClick={() =>
                    handlePurchaseClick(
                      "Professional (Monthly)",
                      stripeUrls.professionalMonthly,
                    )}
                  class="block w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Buy Monthly
                </button>
                <button
                  onClick={() =>
                    handlePurchaseClick(
                      "Professional (Annual)",
                      stripeUrls.professionalYearly,
                    )}
                  class="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Buy Annual
                </button>
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
              <button
                onClick={() =>
                  handlePurchaseClick("Educational", stripeUrls.educational)}
                class="block w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Buy Educational
              </button>
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

      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={handleTermsClose}
        onAccept={handleTermsAccept}
        licenseType={selectedLicense?.type || ""}
      />
    </>
  );
}
