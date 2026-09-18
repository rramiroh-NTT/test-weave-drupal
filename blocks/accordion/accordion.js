export default function decorate(block) {
  const items = [...block.children].map((row) => {
    const [titleCell, contentCell] = [...row.children];
    if (!titleCell || !contentCell) return null;

    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const content = document.createElement('div');

    summary.innerHTML = titleCell.innerHTML;
    content.className = 'accordion-content';
    content.append(...contentCell.childNodes);

    details.append(summary, content);
    return details;
  }).filter(Boolean);

  block.replaceChildren(...items);
}
