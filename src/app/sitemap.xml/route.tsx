import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://yourwebsite.com";

  const pages = [
    { loc: "/", lastmod: "2024-01-01", changefreq: "daily", priority: "1.0" },
    { loc: "/privacy-policy", lastmod: "2024-01-01", changefreq: "yearly", priority: "0.8" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}${page.loc}</loc>
        <lastmod>${page.lastmod}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}