"use client";

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import Start from "./Start";

const About = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : [],
  });

  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <motion.div
            className="flex-1 relative"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <Image src={"/about/img2.png"} alt="" width={559} height={721} />
          </motion.div>
          <motion.div
            className="xl:max-w-[470px]"
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              velit eveniet optio accusamus nisi eius nulla reiciendis animi
              molestias repellat!
            </p>
            <div className="bmy-5 xl:my-10 min-h-[35px]">
              {inView && <Start />}
            </div>
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              tempore minima voluptates dolorem iste pariatur quae aliquid
              dolor. Nam doloribus cupiditate facilis, et rerum quos!
            </p>
            <Button variant={"accent"}>Explore More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
