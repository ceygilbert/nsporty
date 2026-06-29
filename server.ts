import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import { ALL_ARTICLES } from "./src/data";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Generate sitemap dynamically
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = "https://auracore.biz";
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    // Add home page
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${baseUrl}/</loc>\n`;
    sitemap += `    <changefreq>daily</changefreq>\n`;
    sitemap += `    <priority>1.0</priority>\n`;
    sitemap += `  </url>\n`;

    // Add categories
    const categories = ['Top Stories', 'Football', 'Basketball', 'E-Sport', 'Game Rules'];
    categories.forEach(category => {
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${baseUrl}/category/${encodeURIComponent(category.toLowerCase().replace(/ /g, '-'))}</loc>\n`;
      sitemap += `    <changefreq>daily</changefreq>\n`;
      sitemap += `    <priority>0.8</priority>\n`;
      sitemap += `  </url>\n`;
    });

    // Add articles
    ALL_ARTICLES.forEach(article => {
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${baseUrl}/article/${article.slug}</loc>\n`;
      sitemap += `    <changefreq>weekly</changefreq>\n`;
      sitemap += `    <priority>0.7</priority>\n`;
      sitemap += `  </url>\n`;
    });

    sitemap += `</urlset>`;
    
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Robots.txt
  app.get("/robots.txt", (req, res) => {
    const robots = `User-agent: *\nAllow: /\nSitemap: https://auracore.biz/sitemap.xml\n`;
    res.header('Content-Type', 'text/plain');
    res.send(robots);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
