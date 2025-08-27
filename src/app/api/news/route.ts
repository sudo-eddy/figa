// import { NextResponse } from "next/server";
// import { XMLParser } from "fast-xml-parser";
// import { NEWS_PLACEHOLDER_SOURCE, NEWS_LIMIT } from "@/data/news";

// export const revalidate = 0; // always run server-side on request; we’ll cache in the component

// export async function GET() {
//   try {
//     const res = await fetch(NEWS_PLACEHOLDER_SOURCE.url, {
//       // RSS can be cached by our component; keep this one fresh
//       cache: "no-store",
//       headers: { "User-Agent": "Next.js (Noticias placeholder)" },
//     });

//     if (!res.ok) {
//       return NextResponse.json({ ok: false, items: [] }, { status: 502 });
//     }

//     const xml = await res.text();
//     const parser = new XMLParser({ ignoreAttributes: false });
//     const parsed = parser.parse(xml);

//     // RSS shapes vary; CBC uses <rss><channel><item>[]
//     const items = parsed?.rss?.channel?.item ?? [];
//     const mapped = items.slice(0, NEWS_LIMIT).map((it: any) => ({
//       title: it.title,
//       link: it.link,
//       pubDate: it.pubDate,
//       description: it.description,
//       // some feeds include media:content; keep it simple for now
//     }));

//     return NextResponse.json({ ok: true, source: NEWS_PLACEHOLDER_SOURCE, items: mapped });
//   } catch (e) {
//     return NextResponse.json({ ok: false, items: [] }, { status: 500 });
//   }
// }
