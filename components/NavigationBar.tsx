export default function NavigationBar(props: { active: string }) {
  const items = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Docs",
      href: "/docs/getting-start",
    },
    {
      name: "FAQ",
      href: "/faqs/faq",
    },
  ];

  return (
    <nav class="bg-blue-200 py-2">
      <ul class="flex justify-center gap-8 mx-4">
        {items.map((item) => (
          <li>
            <a
              href={item.href}
              class={`text-gray-600 hover:underline ${
                props.active == item.href ? "font-bold" : ""
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
