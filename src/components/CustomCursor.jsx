import { useEffect, useRef } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(false);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    // Check if it's a touch device or mobile screen size
    const isTouchDevice = 
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    // We only enable the custom cursor on non-touch devices with desktop widths
    const shouldEnableCursor = !isTouchDevice && window.innerWidth >= 768;

    if (!shouldEnableCursor) {
      return;
    }

    // Add active class to body to hide native cursor
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        dotRef.current?.classList.remove("custom-cursor--hidden");
        ringRef.current?.classList.remove("custom-cursor--hidden");
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      dotRef.current?.classList.add("custom-cursor--hidden");
      ringRef.current?.classList.add("custom-cursor--hidden");
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      dotRef.current?.classList.remove("custom-cursor--hidden");
      ringRef.current?.classList.remove("custom-cursor--hidden");
    };

    // Use event delegation on window to handle dynamically loaded elements
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Detect interactive elements (links, buttons, items with click cursor)
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest(".interactive-hover") ||
        // Also capture card components or other hoverable dashboard-like grids
        target.closest(".group") || 
        target.closest(".hover\\:scale-105") || // common tailwind card hover pattern
        target.closest(".hover\\:border-amber-400") ||
        window.getComputedStyle(target).cursor === "pointer";

      // Detect inputs, textareas, selects
      const isInput = 
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select");

      if (isInteractive) {
        ringRef.current?.classList.add("custom-cursor--hovered");
        dotRef.current?.classList.add("custom-cursor--hovered");
      } else {
        ringRef.current?.classList.remove("custom-cursor--hovered");
        dotRef.current?.classList.remove("custom-cursor--hovered");
      }

      if (isInput && !isInteractive) {
        ringRef.current?.classList.add("custom-cursor--input");
        dotRef.current?.classList.add("custom-cursor--input");
      } else {
        ringRef.current?.classList.remove("custom-cursor--input");
        dotRef.current?.classList.remove("custom-cursor--input");
      }
    };

    const handleResize = () => {
      const isCurrentlyDesktop = window.innerWidth >= 768;
      if (isCurrentlyDesktop) {
        document.body.classList.add("custom-cursor-active");
        if (dotRef.current) dotRef.current.style.display = "block";
        if (ringRef.current) ringRef.current.style.display = "block";
      } else {
        document.body.classList.remove("custom-cursor-active");
        if (dotRef.current) dotRef.current.style.display = "none";
        if (ringRef.current) ringRef.current.style.display = "none";
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("resize", handleResize);

    // Initial position matching (handles first frame positioning)
    ringPosRef.current.x = window.innerWidth / 2;
    ringPosRef.current.y = window.innerHeight / 2;

    const tick = () => {
      // Linear interpolation (lerp) for the trailing ring
      // 0.15 provides a smooth but highly responsive trail
      const lerpFactor = 0.15;
      ringPosRef.current.x += (mouseRef.current.x - ringPosRef.current.x) * lerpFactor;
      ringPosRef.current.y += (mouseRef.current.y - ringPosRef.current.y) * lerpFactor;

      // Move the dot instantly with the mouse
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Move the ring with interpolation (lagging behind)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameIdRef.current = requestAnimationFrame(tick);
    };

    // Run tick loop
    animationFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("resize", handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div className="custom-cursor-container">
      <div 
        ref={dotRef} 
        className="custom-cursor-dot custom-cursor--hidden"
      />
      <div 
        ref={ringRef} 
        className="custom-cursor-ring custom-cursor--hidden"
      />
    </div>
  );
}

export default CustomCursor;
