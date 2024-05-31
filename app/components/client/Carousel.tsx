import Image from "next/image";
import { Carousel } from "flowbite-react";
import front from "../../assets/car/front.png";
import back from "../../assets/car/back.png";
import side from "../../assets/car/side.png";

export default function CarCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
      <Carousel slide={false}>
        <Image src={front} alt="Front view of the car" />
        <Image src={side} alt="Side view of the car" />
        <Image src={back} alt="Back view of the car" />
        <Image src={side} alt="Side view of the car" />
      </Carousel>
    </div>
  );
}
