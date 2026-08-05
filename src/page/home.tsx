import ImageSlider from "../components/Slider/ImageSlider";
import { NewProducts } from "../components/Home/NewProducts/NewProducts";

function Home() {
  const myImages = [
    {
      small: "/Home/slide_mobile.jpg",
      medium: "/Home/slide_tablet.jpg",
      large: "/Home/slide_desktop.jpg",
      alt: "Slide 1",
    },
    {
      small: "/Home/slide_mobile.jpg",
      medium: "/Home/slide_tablet.jpg",
      large: "/Home/slide_desktop.jpg",
      alt: "Slide 2",
    },
    {
      small: "/Home/slide_mobile.jpg",
      medium: "/Home/slide_tablet.jpg",
      large: "/Home/slide_desktop.jpg",
      alt: "Slide 3",
    },
  ];

  return (
    <div>
      <ImageSlider slides={myImages} />
      <NewProducts />
    </div>
  );
}

export default Home;
