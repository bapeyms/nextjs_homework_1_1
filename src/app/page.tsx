import Image from "next/image";
import Link from "next/link";
import HomePageView from "./(components)/homePage";

export default function Home() {
  const pageData = {
    first: "Welcome Home (Column 1)",
    second: "Middle Content (Column 2)",
    third: "Right Content (Column 3)"
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <HomePageView 
        column1={pageData.first}
        column2={pageData.second}
        column3={pageData.third}
      />
    </div>
  );
}
