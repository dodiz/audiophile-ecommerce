import { FC } from "react";
import { Categories, Hero, Homepage } from "@/components";

const Page: FC = () => {
  return (
    <>
      <Hero />
      <div className="max-w-[111rem] mx-auto mt-30">
        <Categories />
        <div className="mt-30">
          <Homepage />
        </div>
      </div>
    </>
  );
};

export default Page;
