"use client"

// Import Swiper styles
import React from "react"
import { SwiperOptions } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import { FreeMode, Mousewheel, Navigation } from "swiper"

interface Props extends React.PropsWithChildren {
  options?: SwiperOptions
  className?: string
}

const SwiperUi = ({ children, options = {}, ...props }: Props) => {
  const childrenUi = React.Children.map(children, (el) => (
    <SwiperSlide style={{ width: "fit-content" }}>{el}</SwiperSlide>
  ))
  return (
    <Swiper
      style={{
        "--swiper-navigation-size": "20px",
        "--swiper-navigation-color": "var(--background)",
        "padding-left": "1.25rem",
        "padding-right": "1.25rem",
      }}
      {...options}
      navigation={true}
      modules={[Navigation, Mousewheel, FreeMode]}
      {...props}
    >
      {childrenUi}
    </Swiper>
  )
}

export default SwiperUi
