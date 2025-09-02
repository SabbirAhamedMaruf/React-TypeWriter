export const getEditionSelectionRange = (): {
  selection: Selection | null;
  anchorNode: Node | null;
  range: Range | null;
} => {
  const selection: Selection | null = window.getSelection();
  if (!selection) return { selection: null, anchorNode: null, range: null };
  const anchorNode: Node | null = selection?.anchorNode;
  const range: Range | null = selection?.getRangeAt(0);
  return { selection, anchorNode, range };
};

export const cleanUpHTMLEditorDOM = (root: HTMLElement, query: string) => {
  const wrappers = root.querySelectorAll(query);

  wrappers.forEach((el) => {
    const elHt = el as HTMLElement;

    // 1️⃣ Remove if textContent is empty or only whitespace
    const text = elHt.textContent?.trim() ?? "";
    if (text.length === 0) {
      elHt.remove();
      return;
    }

    // 2️⃣ Flatten unnecessary single-child text nodes
    if (elHt.childNodes.length === 1 && elHt.firstChild?.nodeType === Node.TEXT_NODE) {
      if ((elHt.firstChild.textContent ?? "").trim() === "") {
        elHt.remove();
        return;
      }
    }

    // 3️⃣ Flatten nested bold spans
    Array.from(elHt.children).forEach((child) => {
      const childHt = child as HTMLElement;
      const isBoldChild =
        (childHt.tagName.toLowerCase() === "span" && childHt.style.fontWeight === "bold") ||
        childHt.tagName.toLowerCase() === "b" ||
        childHt.tagName.toLowerCase() === "strong";

      if (isBoldChild) {
        while (childHt.firstChild) {
          elHt.insertBefore(childHt.firstChild, childHt);
        }
        childHt.remove();
      }
    });

    // 4️⃣ Merge consecutive siblings with same tag and font-weight
    let next = elHt.nextElementSibling as HTMLElement | null;
    while (next) {
      const nextHt = next as HTMLElement;

      if (nextHt.tagName !== elHt.tagName || nextHt.style.fontWeight !== elHt.style.fontWeight) break;

      elHt.innerHTML += nextHt.innerHTML;
      next = nextHt.nextElementSibling as HTMLElement | null;
      nextHt.remove();
    }
  });
};
