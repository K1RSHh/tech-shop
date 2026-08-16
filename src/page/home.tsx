import ImageSlider from "../components/Slider/ImageSlider";
import { NewProducts } from "../components/Home/NewProducts/NewProducts";
import { productStore } from "../store/productStore";
import { useEffect } from "react";
import CategoryElement from "../components/Home/CategoryBlock/CategoryElements";
import Banner from "../components/Banner/Banner";

function Home() {
  const { fetchProducts, isLoading } = productStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading,,,,</div>;

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
      <Banner />
      <CategoryElement />
    </div>
  );
}

export default Home;
