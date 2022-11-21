document.addEventListener('DOMContentLoaded', () => {
  htmlTableOfContents('doc-lang', 'toc-lang');
  htmlTableOfContents('doc-std', 'toc-std');
});

function htmlTableOfContents(docId, tocId) {
  const headings = [... document.getElementById(docId).querySelectorAll('h2, h3, h4, h5, h6')];
  const tocTarget = document.getElementById(tocId);
  headings.forEach(function (heading, index) {
    let ref = tocId + "-" + index;
    if ( heading.hasAttribute("id"))
      ref = heading.getAttribute("id");
    else
      heading.setAttribute("id", ref);

    const link = document.createElement("a");
    link.setAttribute("href", "#" + ref);
    link.textContent = heading.textContent;

    const div = document.createElement("div");
    div.setAttribute("class", heading.tagName.toLowerCase());
    div.appendChild(link);
    tocTarget.appendChild(div);
  });
}
