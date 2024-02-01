"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { hotelData } from "@/mock/hotel";

const Find = () => {
  return (
    <section className="py-12 xl:py-36">
      <div className="container mx-auto">
        <div className="text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 mb-6"
          >
            Find your best hotel!
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[638px] mx-auto mb-8"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eos
            animi corrupti quibusdam aperiam tempore.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Button variant={"accent"} className="px-12 mb-14 xl:mb-28">
              View All
            </Button>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]"
        >
          {hotelData.map((hotel, index) => {
            return (
              <div
                key={index}
                className="w-[270px] h-[390px] border-2 border-outline rounded-xl overflow-hidden group hover:cursor-pointer hover:bg-soft_green transition-all duration-700 mx-auto xl:mx-0"
              >
                <Image src={hotel.image} alt="" width={270} height={270} />
                <div className="p-6">
                  <h4 className="h4 group-hover:text-white transition-all duration-300">
                    {hotel.name}
                  </h4>
                  <p className="group-hover:text-white transition-all duration-300">
                    {hotel.location}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Find;
