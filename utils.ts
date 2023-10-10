export function findAfterElement(container: EventTarget & Element, y: number) {
  const tasks = Array.from(container.querySelectorAll(".task:not(.dragging)"));

  return tasks.reduce(
    (closest: { offset: number; element: null | Element }, child: Element) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: -Infinity, element: null }
  ).element;
}
