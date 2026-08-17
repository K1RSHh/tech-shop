import ImageSlider from "../components/Slider/ImageSlider";
import { NewProducts } from "../components/Home/NewProducts/NewProducts";
import CategoryElement from "../components/Home/CategoryBlock/CategoryElements";
import Banner from "../components/Home/Banner/Banner";
import CompanyBlock from "../components/Home/CompanyBlock/CompanyBlock";

function Home() {
  const myImages = [
    {
      small: "/Home/SlideImage/slide_mobile.jpg",
      medium: "/Home/SlideImage/slide_tablet.jpg",
      large: "/Home/SlideImage/slide_desktop.jpg",
      alt: "Slide 1",
    },
    {
      small: "/Home/SlideImage/slide_mobile.jpg",
      medium: "/Home/SlideImage/slide_tablet.jpg",
      large: "/Home/SlideImage/slide_desktop.jpg",
      alt: "Slide 2",
    },
    {
      small: "/Home/SlideImage/slide_mobile.jpg",
      medium: "/Home/SlideImage/slide_tablet.jpg",
      large: "/Home/SlideImage/slide_desktop.jpg",
      alt: "Slide 3",
    },
  ];

  return (
    <div>
      <ImageSlider slides={myImages} />
      <NewProducts />
      <Banner />
      <CategoryElement />
      <CompanyBlock />
    </div>
  );
}

export default Home;
