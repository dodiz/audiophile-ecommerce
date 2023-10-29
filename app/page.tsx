import { FC } from "react";
import { BeastGear, Categories, Hero, HomeProducts } from "@/components";

const Page: FC = () => {
  return (
    <>
      <Hero />
      <div className="max-w-[111rem] mx-auto mt-30">
        <Categories />
        <div className="mt-30">
          <HomeProducts />
        </div>
        <BeastGear />
      </div>
    </>
  );
};

export default Page;
