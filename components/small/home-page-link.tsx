import { app } from "@/constants";
import Image from "next/image";
import Link from "./link-with-loader";

type Props = {};

const HomePageLink = (props: Props) => {
  return (
    <div>
      <Link
        className="flex gap-1 font-semibold  tracking-tight rounded-lg  text-5xl dark:hover:text-gray-200 font-serif -mb-1 justify-center items-center "
        href={"/"}
      >
        <Image
          className={` sm:block  lg:block border-2  rounded-full`}
          src={"/img/logo.png"}
          alt={app.name}
          width={46}
          height={46}
        />
        <span className="text-4xl sm:5xl text-gradient">{app.name}</span>
      </Link>
    </div>
  );
};

export default HomePageLink;
