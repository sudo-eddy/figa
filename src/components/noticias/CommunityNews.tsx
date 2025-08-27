// import Link from "next/link";
// import { Newspaper, ExternalLink, ArrowRight } from "lucide-react";
// import { NEWS_REVALIDATE_SECONDS } from "@/data/news";

// async function getNews() {
//   const res = await fetch(`http://localhost/api/news`, {
//     // cache on the server for a bit to avoid hammering the feed
//     next: { revalidate: NEWS_REVALIDATE_SECONDS },
//   });
//   if (!res.ok) return { ok: false, items: [], source: null };
//   return res.json();
// }

// export default async function CommunityNews() {
//   const data = await getNews();
//   const items: any[] = data?.items ?? [];
//   const source = data?.source;

//   return (
//     <section className="px-6 py-14 bg-blue-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center gap-3">
//           <Newspaper className="w-6 h-6 text-blue-700" />
//           <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700">
//             Noticias de la comunidad
//           </h2>
//         </div>
//         <p className="text-gray-700 mt-2">
//           Titulares recientes (placeholder). Luego apuntaremos esto a tus fuentes locales o blog.
//         </p>

//         <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {items.map((n, idx) => (
//             <article key={idx} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
//               <h3 className="font-semibold text-gray-900 leading-snug">
//                 <Link href={n.link} target="_blank" className="hover:underline">
//                   {n.title}
//                 </Link>
//               </h3>
//               {n.pubDate && (
//                 <p className="text-xs text-gray-500 mt-1">
//                   {new Date(n.pubDate).toLocaleString()}
//                 </p>
//               )}
//               <p className="text-sm text-gray-700 mt-3 line-clamp-3">
//                 {n.description?.replace(/<[^>]*>/g, "")}
//               </p>
//               <div className="mt-4">
//                 <Link href={n.link} target="_blank" className="inline-flex items-center gap-1 text-blue-700 font-medium hover:underline">
//                   Leer más <ExternalLink className="w-4 h-4" />
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>

//         {source?.homepage && (
//           <div className="mt-8">
//             <Link href={source.homepage} target="_blank" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline">
//               Ver más titulares <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
