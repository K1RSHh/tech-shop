import { useEffect } from "react";
import type { RefObject } from "react";

type MaybeRef<T> = RefObject<T | null> | Array<RefObject<T | null>>;

const normalizeRefs = <T extends HTMLElement>(
  ref: MaybeRef<T>,
): Array<RefObject<T | null>> => (Array.isArray(ref) ? ref : [ref]);

export const useOnClickOutside = <T extends HTMLElement>(
  ref: MaybeRef<T>,
  handler: () => void,
  active = true,
) => {
  useEffect(() => {
    if (!active) {
      return;
    }

    const refs = normalizeRefs(ref);

    const isVisible = (element: HTMLElement) => {
      const style = window.getComputedStyle(element);
      return (
        element.getClientRects().length > 0 &&
        style.visibility !== "hidden" &&
        style.display !== "none"
      );
    };

    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      for (const currentRef of refs) {
        const element = currentRef.current;
        if (!element || !isVisible(element)) {
          continue;
        }

        if (element.contains(target)) {
          return;
        }
      }

      handler();
    };

    document.addEventListener("pointerdown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("pointerdown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, active]);
};
