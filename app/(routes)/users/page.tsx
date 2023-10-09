import Sidebar from "@/components/Sidebar";
import Heading from "@/utils/Heading";
import AllUsers from "@/components/Admin/AllUsers";

const Page = () => {
  return (
    <div>
      <Heading
        title="Becodemy - Admin"
        description="Becodemy is a platform for students to learn and get help from teachers"
        keywords="Programming,MERN,Redux,Machine Learning"
      />
      <div className="flex min-h-screen">
        <div className="2xl:w-[16%] w-1/5">
          <Sidebar activeItem="Users" />
        </div>
        <div className="2xl:w-[84%] w-[80%]">
          <AllUsers />
        </div>
      </div>
    </div>
  );
};

export default Page;
