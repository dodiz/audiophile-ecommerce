import { FC } from "react";
import { BestGear, Categories, Header, Hero, HomeProducts } from "@/components";

const Page: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="max-w-[111rem] mt-30 tablet:mx-12 desktop:mx-auto">
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
