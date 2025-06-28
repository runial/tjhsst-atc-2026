import { useLayoutEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSectionFade(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    // Don't run if the ref is not yet connected to an element
    if (!scope.current) return;

    // Create a GSAP context for safe cleanup
    const ctx = gsap.context(() => {
      // Select all <section> elements *within* the scope element
      const sections = gsap.utils.toArray("section", scope.current);

      sections.forEach((section) => {
        gsap.from(section as HTMLElement, {
          autoAlpha: 0, // Fades in and sets visibility
          y: 100,       // Starts 100px down and moves up
          duration: 1,
          scrollTrigger: {
            trigger: section as HTMLElement,
            start: "top 80%", // Animation starts when the top of the section is 80% from the top of the viewport
            toggleActions: "play none none none", // Play the animation once and don't reverse it
          },
        });
      });
    }, scope); // The scope is the element the animations are attached to

    // Cleanup function to revert all animations when the component unmounts
    return () => ctx.revert();
  }, [scope]); // Rerun the effect if the scope ref changes
}