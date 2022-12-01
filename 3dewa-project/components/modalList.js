import { ProductCard } from "components";

export const ModalList = () => {
  return (
    <div className="py-12 px-8 w-full mt-[28%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
