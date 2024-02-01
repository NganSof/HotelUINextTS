"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Button } from "./ui/button";
import { recommendationData } from "@/mock/recommen";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Recommendation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="relative pb-12 xl:pb-[112px] xl:pt-[157px] bg-soft_green-secondary"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          loop
          speed={2000}
        >
          {recommendationData.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0">
                  <div className="max-w-[345px] xl:pt-8 order-2 xl:order-1 mx-auto xl:mx-0 text-center xl:text-left">
                    <h2 className="mb-9 h-2">{hotel.name}</h2>
                    <p className="text-soft_green text-sm mb-6">
                      {hotel.location}
                    </p>
                    <p className="mb-[60px]">{hotel.desc}</p>
                    <div className="flex items-center gap-x-[50px]">
                      <Button variant={"accent"} className="px-[44px]">
                        Book Now
                      </Button>
                      <div className="text-black">
                        <span className="font-bold text-2xl">
                          {hotel.price}
                        </span>
                        <span className="text-sm">/Night</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 xl:order-2 flex flex-1 justify-center xl:justify-end relative h-[634px]">
                    <div>
                      <Image
                        src={hotel.image}
                        alt=""
                        width={905}
                        height={528}
                        quality={100}
                        className="xl:rounded-tl-[20px] xl:rounded-bl-[20px]"
                      />
                      <div className="bg-soft_green p-4 text-center xl:text-left text-white xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:max-w-[468px] xl:min-h-[212px] xl:rounded-xl xl:px-10">
                        <p className="mb-3 max-w-md xl:max-w-none mx-auto xl:mx-0 xl:mb-6">
                          {hotel.testimonial.message}
                        </p>
                        <p className="text-xl font-bold">
                          {hotel.testimonial.personName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
      <Image
        src={"/recommendation/pattern.svg"}
        alt=""
        width={240}
        height={240}
        className="hidden xl:flex absolute left-[135px] -bottom-[120px]"
      />
    </motion.section>
  );
};

export default Recommendation;
