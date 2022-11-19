//Components
import Posts from "../components/Home/Posts";
import Stories from "../components/Home/Stories";
import UserInfo from "../components/Home/UserInfo";

const Home = () => {
  return (
    <div className="page_wrapper w-full h-full">
      <div className="flex justify-center items-stretch">
        <div className="flex flex-col w-full max-w-[470px] lg:mr-8">
          <Stories />
          <Posts />
        </div>
        <div className="hidden lg:block">
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Home;
