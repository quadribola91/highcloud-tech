import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal
 * Animates elements when they enter/leave the viewport
 *
 * Props:
 *   - children: React nodes to animate
 *   - className: Additional CSS classes for the wrapper
 *   - origin: Direction of animation - 'up'|'down'|'left'|'right' (default: 'up')
 *   - distance: Pixel distance to translate when hidden (default: 20)
 *   - duration: Animation duration in milliseconds (default: 700)
 *   - delay: Animation delay in milliseconds (default: 0)
 *   - once: If true, animates only once and stays visible (default: false)
 *   - threshold: Intersection observer threshold (default: 0.15)
 *   - rootMargin: Intersection observer root margin (default: "0px 0px -10% 0px")
 */
export default function ScrollReveal({
  children,
  className = "",
  origin = "up",
  distance = 20,
  duration = 700,
  delay = 0,
  once = false,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Respect users who prefer reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const node = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(node);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  // Compute translation based on origin and distance
  let hiddenTransform = "";
  if (origin === "up") hiddenTransform = `translateY(${distance}px)`;
  if (origin === "down") hiddenTransform = `translateY(-${distance}px)`;
  if (origin === "left") hiddenTransform = `translateX(${distance}px)`;
  if (origin === "right") hiddenTransform = `translateX(-${distance}px)`;

  const style = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(.2,.9,.2,1)",
    transitionDelay: `${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : hiddenTransform,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
