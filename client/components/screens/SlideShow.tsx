import WelcomeSlide from "./WelcomeSlide";
import Swiper from "react-native-swiper";
import AllowCameraSlide from "./AllowCameraSlide";
import AllowGallerySlide from "./AllowGallerySlide";
import InputSlide from "./InputSlide";
import { useRef } from "react";

export default function SlideShow() {
  const swiperRef = useRef(null);

  const nextPage = () => {
    const currentIndex = swiperRef.current.state.index;
    swiperRef.current.scrollTo(currentIndex + 1);
  };

  return (
    <Swiper loop={false} ref={swiperRef}>
      <WelcomeSlide nextPage={nextPage} />
      <AllowCameraSlide nextPage={nextPage} />
      <AllowGallerySlide nextPage={nextPage} />
      <InputSlide />
    </Swiper>
  );
}
