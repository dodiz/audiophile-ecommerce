import { FC } from "react";
import { BestGear, Categories, Hero, HomeProducts } from "@/components";

const Page: FC = () => {
  return (
    <>
      <Hero />
      <div className="max-w-[111rem] mx-auto mt-30">
        <Categories />
        <div className="mt-30">
          <HomeProducts />
        </div>
        <BestGear />
      </div>
    </>
  );
};

export default Page;
