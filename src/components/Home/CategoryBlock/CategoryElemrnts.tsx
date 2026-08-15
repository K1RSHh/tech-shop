import { CategoryBlock } from "./CategoryBlock";

function CategoryElement() {
  return (
    <div>
      <CategoryBlock
        title="Custom Builds"
        category="custom-desktop"
        bannerImage="/Home/custom_builds.jpg"
      />
      <CategoryBlock
        title="MSI Laptops"
        category="Laptop"
        bannerImage="/Home/msi_laptops.jpg"
        seriesList={["GS Series", "GT Series", "GL Series", "GE Series"]}
        initialSeries="GS Series"
      />
    </div>
  );
}

export default CategoryElement;
