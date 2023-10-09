import React, { FC } from "react";
import Sidebar from "@/components/Sidebar";
import Heading from "@/utils/Heading";
import AllPrompts from "@/components/Admin/AllPrompts";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title="Becodemy - Admin"
        description="Becodemy is a platform for students to learn and get help from teachers"
        keywords="Programming,MERN,Redux,Machine Learning"
      />
      <div className="flex min-h-screen">
        <div className="2xl:w-[16%] w-1/5">
          <Sidebar activeItem="All Prompts" />
        </div>
        <div className="2xl:w-[84%] w-[80%]">
          <AllPrompts />
        </div>
      </div>
    </div>
  );
};

export default Page;
