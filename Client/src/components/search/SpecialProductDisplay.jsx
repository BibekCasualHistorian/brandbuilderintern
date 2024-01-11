import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper";
import "swiper/css";

// import { register } from "swiper/element/bundle";
// // register Swiper custom elements
// register();

// // Import Swiper styles
// import "swiper/css/navigation";

const NewCarousel = () => {
  // new Swiper(".swiper", {
  //   slidesPerView: 3,
  //   grid: {
  //     rows: 3,
  //   },
  //   mousewheel: {
  //     forceToAxis: true,
  //   },
  // });
  return (
    <Swiper className="swiper mySwiper">
      <SwiperSlide>
        <div className="relative h-52 w-full">
          <Image
            fill
            src={"/image.jpg"}
            alt="just a photo"
            className="object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-52 w-full">
          <Image fill src={"/image.jpg"} alt="just a photo" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-52">
          <Image fill src={"/image.jpg"} alt="just a photo" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-52 w-full">
          <Image fill src={"/image.jpg"} alt="just a photo" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-52 w-full">
          <Image fill src={"/image.jpg"} alt="just a photo" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-52 w-full">
          <Image fill src={"/image.jpg"} alt="just a photo" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const EachProduct = () => {
  return (
    <div>
      <NewCarousel />

      <div>
        <div>
          <h2>Jeans Armani Jeans</h2>
          <p>Supplier Name - Verfied Supplier</p>
        </div>
        <div>⭐ 4.5(125)</div>
      </div>
      <div>
        <h2>Listing Cost</h2>
        <p>35% OFF</p>
        <p>25$</p>
      </div>
      <div>
        <h2>Retial Price</h2>
        <p>40$</p>
      </div>
      <div>
        <h2>Shipping From</h2>
        <p>8.7$-7-14days❗</p>
      </div>
      <div>
        <h2>
          Stock/<span>Ordered</span>
        </h2>
        <p>
          11456 Stk/ <span>356 Ord</span>
        </p>
      </div>
    </div>
  );
};

const SpecialProductDisplay = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      <EachProduct />
      <EachProduct />
      <EachProduct />
      <EachProduct />
    </div>
  );
};

export default SpecialProductDisplay;
