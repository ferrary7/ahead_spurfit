"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Scroll = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();
  const boxContainerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    observer.observe(ref?.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting && boxContainerRef.current) {
      boxContainerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  }, [isIntersecting]);

  const cards = [
    { color: "purple-200" },
    { color: "blue-300" },
    { color: "yellow-100" },
    { color: "violet-600" },
    { color: "blue-100" },
    { color: "purple-200" },
    { color: "violet-600" },
    { color: "blue-100" },
  ];

  return (
    <section className="overflow-x-hidden mt-12 mb-32 p-4 px-20" ref={ref}>
      <div className="flex flex-row items-center justify-between">
        <motion.div
          className="inline-block"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
        >
          <h1 className="text-4xl font-bold px-4 mb-5">
            Does this sound familiar...
          </h1>
        </motion.div>
        <motion.div
          animate={isIntersecting ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -500],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35, -35, -35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0 },
          }}
          transition={{
            duration: 2.1,
            ease: "easeInOut",
            type: "spring",
            delay: 0.3,
          }}
        >
          <Image width={70} height={70} alt="" src="/assets/red-ghost.png" />
        </motion.div>
      </div>
      <div
        className="p-10 flex space-x-8 gap-7 items-center overflow-x-auto hide-scrollbar h-250"
        ref={boxContainerRef}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`rounded-xl bg-${card.color} min-w-[350px] p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
              },
              hidden: { opacity: 0, scale: 0 },
            }}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            transition={{
              duration: 2.1,
              ease: "easeInOut",
              type: "spring",
              delay: index * 0.1,
            }}
          >
            <Image width={70} height={70} alt="" src="/assets/angry-emoji.svg" />
            <h3 className="font-bold text-lg text-black">
              You argue with a colleague
            </h3>
            <p className="text-gray-700">
              You get angry and defensive, instead of staying open and working
              towards common ground
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Scroll;
