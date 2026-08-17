import { CategoryBlock } from "./CategoryBlock";

function CategoryElement() {
  return (
    <div>
      <CategoryBlock
        title="Custom Builds"
        category="custom-desktop"
        bannerImage="/Home/ProductSlider/custom_builds.jpg"
      />
      <CategoryBlock
        title="MSI Laptops"
        category="Laptop"
        bannerImage="/Home/ProductSlider/msi_laptops.jpg"
        seriesList={["GS Series", "GT Series", "GL Series", "GE Series"]}
        initialSeries="GS Series"
      />
      <CategoryBlock
        title="Desktop"
        category="Desktop"
        bannerImage="/Home/ProductSlider/desktops.jpg"
      />
      <CategoryBlock
        title="Monitors"
        category="Monitors"
        bannerImage="/Home/ProductSlider/gaming_monitors.jpg"
      />
    </div>
  );
}

export default CategoryElement;
