export default function Footer() {
  return (
    <footer class="border(t-2 gray-200) bg-gray-100 h-32 flex flex-col gap-4 justify-center">
      <div class="text(gray-600 center)">
        <span>© {new Date().getFullYear()} hrntsm</span>
      </div>
      <a
        href="https://fresh.deno.dev/"
        style="align-items: center; display: flex; justify-content: center;"
      >
        <img
          src="/fresh-badge.svg"
          alt="Made with Fresh"
          width={150}
          height={40}
        />
      </a>
    </footer>
  );
}
