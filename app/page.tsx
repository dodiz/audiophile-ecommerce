import { FC } from "react";
import { Categories, Hero } from "@/components";

const Page: FC = () => {
  return (
    <>
      <Hero />
      <div className="mt-20">
        <Categories />
      </div>
    </>
  );
};

export default Page;
