"use client"; // This component uses hooks, so it must be a Client Component

import { useEffect, useState, useRef } from "react";

type VisibilityHandlerProps = {
  children: React.ReactNode;
  docIdToHideFrom: string;
};

export const VisibilityHandler = ({
  children,
  docIdToHideFrom,
}: VisibilityHandlerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Find the element to observe
    const targetElement = document.querySelector(`.${docIdToHideFrom}`);

    if (!targetElement) {
      console.warn(`Element with class "${docIdToHideFrom}" not found.`);
      return;
    }

    // Create an Intersection Observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Hide children when the target element is in the viewport
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null, // Observe relative to the viewport
        threshold: 0.1, // Trigger when 10% of the target element is visible
      }
    );

    // Start observing the target element
    observerRef.current.observe(targetElement);

    // Cleanup the observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [docIdToHideFrom]);

  return <>{isVisible ? children : null}</>;
};
