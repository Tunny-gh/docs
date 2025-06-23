export default function NavigationBar(props: { active: string }) {
  const items = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Docs v1",
      href: "/docs_v1/getting-start",
    },
    {
      name: "Docs v0",
      href: "/docs/getting-start",
    },
    {
      name: "FAQ",
      href: "/faqs/basics-and-overview",
    },
    {
      name: "Get License",
      href: "/purchase",
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
