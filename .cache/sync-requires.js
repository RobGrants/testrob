
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/var/www/html/GATSBY/my-gatsby-site2/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/var/www/html/GATSBY/my-gatsby-site2/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/var/www/html/GATSBY/my-gatsby-site2/src/pages/about.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/var/www/html/GATSBY/my-gatsby-site2/src/pages/blog/index.js")),
  "component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-another-post-index-mdx": preferDefault(require("/var/www/html/GATSBY/my-gatsby-site2/src/pages/blog/{mdx.frontmatter__slug}.js?__contentFilePath=/var/www/html/GATSBY/my-gatsby-site2/blog/another-post/index.mdx")),
  "component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-my-first-post-index-mdx": preferDefault(require("/var/www/html/GATSBY/my-gatsby-site2/src/pages/blog/{mdx.frontmatter__slug}.js?__contentFilePath=/var/www/html/GATSBY/my-gatsby-site2/blog/my-first-post/index.mdx")),
  "component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-yet-another-post-index-mdx": preferDefault(require("/var/www/html/GATSBY/my-gatsby-site2/src/pages/blog/{mdx.frontmatter__slug}.js?__contentFilePath=/var/www/html/GATSBY/my-gatsby-site2/blog/yet-another-post/index.mdx")),
  "component---src-pages-index-js": preferDefault(require("/var/www/html/GATSBY/my-gatsby-site2/src/pages/index.js"))
}

