"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutCard = () => {
  return (
    <div className="px-20 relative mt-7 mb-32">
      <div
        style={{ height: "500px" }}
        className="bg-pink-100 overflow-hidden relative flex rounded-lg"
      >
        <div className=" basis-1/2 px-20">
          <div className="flex flex-col mt-20 gap-3">
            <div>
              <p className="text-md text-left">Built Out of Frustration</p>
            </div>
            <div>
              <p className="text-3xl font-bold">Meet the ahead app</p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex items-center">
          <div className="flex flex-col w-4/5 items-center">
            <div>
              <p className="text-lg pb-5">
                A personalized pocket coach that provide
                bitesized,science-driven tools to boost emotional intelligence.
              </p>
              <p className="text-lg">
                Think of it as a pocket cheerleader towards a better, more
                fulfilling.
              </p>
            </div>
          </div>
        </div>

        {/* circle div  */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            hidden: { opacity: 1, x: 0, y: 20 },
            visible: {
              x: [0, -550],
              y: [55, -18],
            },
          }}
          animate={{
            x: [0, -550],
            y: [55, -18],
          }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="bg-pink-20 h-100 w-100 absolute rounded-full"
          style={{ bottom: "-16px", right: "850px" }}
        ></motion.div>

        {/* leaves division */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            visible: {
              x: [0, 10],
              y: [55, -25],
              rotate: 25,
            },
            hidden: { y: 55 },
          }}
          animate={{
            x: [0, 10],
            y: [55, -5],
            rotate: 25,
          }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="h-28 w-24 absolute"
          style={{ right: "60%", top: "20%", transform: "translate(50%,50%)" }}
        >
          <Image height={100} width={100} src="/assets/leaf.png" alt="" />
        </motion.div>

        {/*GHost Div  */}
        <div
          style={{ top: "62%", left: "15%", transform: "translate(-50%,-50%)" }}
          className="absolute  flex justify-center items-center rounded-full bg-white h-44 w-44 border-8 border-borderGrey"
        >
          <motion.div
            transition={{ duration: "1.5" }}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { rotate: [0, 25, -15, 0] },
              hidden: { opacity: 0, scale: 0.5, rotate: 0 },
            }}
            className="h-20 w-16 inline-block"
          >
            <Image
              height={100}
              width={100}
              src="/assets/newGhost.png"
              className="h-full w-full"
              alt=""
            />
          </motion.div>
          {/*Badge*/}
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0, zIndex: -10 },
              hidden: { y: 60, opacity: 0, scale: 0.5 },
            }}
            transition={{
              type: "spring",
              duration: "1.5",
              ease: "easeInOut",
              delay: "0.5",
            }}
            className="absolute h-11 w-11"
            style={{ top: "-22px" }}
          >
            <Image height={100} width={100} src="/assets/badge.png" alt="" />
          </motion.div>
        </div>
      </div>
      {/* flower div */}
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={{
          visible: { opacity: 1, rotate: 360 },
          hidden: { opacity: 1 },
        }}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: 2,
        }}
        style={{ right: "280px", top: "-20px" }}
        className="h-11 w-11 absolute "
      >
        <Image height={100} width={100} src="/assets/flower.png" alt="" />
      </motion.div>
    </div>
  );
};

export default AboutCard;
