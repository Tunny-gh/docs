import { useEffect, useState } from "preact/hooks";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  licenseType: string;
}

export default function TermsModal(
  { isOpen, onClose, onAccept, licenseType }: TermsModalProps,
) {
  const [termsContent, setTermsContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      fetch("/TermsOfUse.md")
        .then((response) => response.text())
        .then((content) => {
          setTermsContent(content);
          setIsLoading(false);
        })
        .catch(() => {
          setTermsContent("利用規約の読み込みに失敗しました。");
          setIsLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const renderMarkdown = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} class="text-2xl font-bold mb-4 mt-6">{line.substring(2)}</h1>;
        } else if (line.startsWith('## ')) {
          return <h2 key={index} class="text-xl font-semibold mb-3 mt-5">{line.substring(3)}</h2>;
        } else if (line.startsWith('### ')) {
          return <h3 key={index} class="text-lg font-semibold mb-2 mt-4">{line.substring(4)}</h3>;
        } else if (line.startsWith('- ')) {
          return <li key={index} class="ml-4 mb-1">{line.substring(2)}</li>;
        } else if (line.trim() === '') {
          return <br key={index} />;
        } else {
          return <p key={index} class="mb-2">{line}</p>;
        }
      });
  };

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg max-w-4xl max-h-[80vh] w-full overflow-hidden">
        <div class="flex justify-between items-center p-6 border-b">
          <h2 class="text-2xl font-bold text-gray-900">
            Terms of Use - {licenseType}
          </h2>
          <button
            type="button"
            onClick={onClose}
            class="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div class="p-6 overflow-y-auto max-h-[60vh]">
          <div class="prose prose-sm max-w-none">
            {isLoading ? (
              <div class="flex justify-center items-center py-8">
                <div class="text-gray-500">Loading...</div>
              </div>
            ) : (
              <div class="space-y-2">
                {renderMarkdown(termsContent)}
              </div>
            )}
          </div>
        </div>

        <div class="flex justify-end gap-4 p-6 border-t bg-gray-50">
          <button
            type="button"
            onClick={onClose}
            class="px-6 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onAccept}
            class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Agree to Terms and Proceed to Purchase
          </button>
        </div>
      </div>
    </div>
  );
}
