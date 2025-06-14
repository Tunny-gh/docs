import RAW_TOC from "../docs_v1/toc.json" with { type: "json" };

type RawTableOfContents = Record<string, RawTableOfContentsEntry>;

interface RawTableOfContentsEntry {
  title: string;
  pages?: [string, string][];
}

export interface TableOfContentsEntry {
  slug: string;
  title: string;
  category?: string;
  href: string;
  file: string;
}

export interface TableOfContentsCategory {
  title: string;
  href: string;
  entries: TableOfContentsCategoryEntry[];
}

export interface TableOfContentsCategoryEntry {
  title: string;
  href: string;
}

export const TABLE_OF_CONTENTS: Record<string, TableOfContentsEntry> = {};
export const CATEGORIES: TableOfContentsCategory[] = [];

for (const parent in (RAW_TOC as unknown as RawTableOfContents)) {
  const rawEntry = (RAW_TOC as unknown as RawTableOfContents)[parent];
  const href = `/docs_v1/${parent}`;
  const file = `docs_v1/${parent}/index.md`;
  const entry = {
    slug: parent,
    title: rawEntry.title,
    href,
    file,
  };
  TABLE_OF_CONTENTS[parent] = entry;
  const category: TableOfContentsCategory = {
    title: rawEntry.title,
    href,
    entries: [],
  };
  CATEGORIES.push(category);
  if (rawEntry.pages) {
    for (const [id, title] of rawEntry.pages) {
      const slug = `${parent}/${id}`;
      const href = `/docs_v1/${slug}`;
      const file = `docs_v1/${slug}.md`;
      const entry = { slug, title, category: parent, href, file };
      TABLE_OF_CONTENTS[slug] = entry;
      category.entries.push({
        title,
        href,
      });
    }
  }
}

export const SLUGS = Object.keys(TABLE_OF_CONTENTS);
