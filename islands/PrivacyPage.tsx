import { useEffect, useState } from "preact/hooks";

export default function PrivacyPage() {
  const [privacyContent, setPrivacyContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<"en" | "ja">("en");

  const loadPrivacyContent = async (lang: "en" | "ja") => {
    setIsLoading(true);
    try {
      const filename = lang === "ja" ? "/privacy/ja.md" : "/privacy/en.md";
      const response = await fetch(filename);
      const content = await response.text();
      setPrivacyContent(content);
    } catch (error) {
      setPrivacyContent(
        lang === "ja"
          ? "プライバシーポリシーの読み込みに失敗しました。"
          : "Failed to load privacy policy.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPrivacyContent(language);
  }, [language]);

  const handleLanguageChange = (lang: "en" | "ja") => {
    setLanguage(lang);
  };

  const renderMarkdown = (content: string) => {
    return content
      .split("\n")
      .map((line, index) => {
        if (line.startsWith("# ")) {
          return (
            <h1 key={index} class="text-3xl font-bold mb-6 mt-8 text-gray-900">
              {line.substring(2)}
            </h1>
          );
        } else if (line.startsWith("## ")) {
          return (
            <h2 key={index} class="text-2xl font-semibold mb-4 mt-6 text-gray-800">
              {line.substring(3)}
            </h2>
          );
        } else if (line.startsWith("### ")) {
          return (
            <h3 key={index} class="text-xl font-semibold mb-3 mt-5 text-gray-700">
              {line.substring(4)}
            </h3>
          );
        } else if (line.startsWith("- ")) {
          return (
            <li key={index} class="ml-6 mb-2 text-gray-600">
              {line.substring(2)}
            </li>
          );
        } else if (line.trim() === "") {
          return <div key={index} class="mb-4"></div>;
        } else {
          return (
            <p key={index} class="mb-4 text-gray-600 leading-relaxed">
              {line}
            </p>
          );
        }
      });
  };

  return (
    <div class="min-h-screen bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 class="text-3xl font-bold text-white">
                {language === "ja" ? "プライバシーポリシー" : "Privacy Policy"}
              </h1>
              <div class="flex bg-white/20 backdrop-blur-sm rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => handleLanguageChange("en")}
                  class={`px-4 py-2 text-sm rounded-md transition-all ${
                    language === "en"
                      ? "bg-white text-blue-700 shadow-sm font-medium"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => handleLanguageChange("ja")}
                  class={`px-4 py-2 text-sm rounded-md transition-all ${
                    language === "ja"
                      ? "bg-white text-blue-700 shadow-sm font-medium"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  日本語
                </button>
              </div>
            </div>
          </div>

          <div class="px-6 py-8">
            {isLoading ? (
              <div class="flex justify-center items-center py-12">
                <div class="text-gray-500">
                  {language === "ja" ? "読み込み中..." : "Loading..."}
                </div>
              </div>
            ) : (
              <div class="prose prose-lg max-w-none">
                <div class="space-y-4">
                  {renderMarkdown(privacyContent)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}