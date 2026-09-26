# RIIC lab website

Static single-page site (`index.html`), served by GitHub Pages.

## Adding a news item

1. Create a folder `news/YYYY-MM-DD_short-title/`. The date decides the
   position on the page (newest first) and is printed on the card; the slug is only for you.
2. Put the image in that folder.
3. Create `news.html` in the folder with the card block, referencing the
   image by bare filename:

   ```html
   <a href="https://example.org/paper" class="image fit news-item">
     <img src="figure.png" alt="Short description of the image" />
     <div class="news-overlay">
       <h3>Title</h3>
       <p>One short paragraph.</p>
     </div>
   </a>
   ```

   Use `<div class="image fit news-item">` instead of `<a>` if there is no link.

4. Regenerate the news grid in `index.html` and commit everything:

   ```bash
   python3 build_news.py
   ```

`build_news.py` needs only the Python standard library. It rewrites the block
between the `NEWS:START` and `NEWS:END` markers in `index.html`; do not edit
that block by hand. `python3 build_news.py --check` exits non-zero if the
page is stale.
