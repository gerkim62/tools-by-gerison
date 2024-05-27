
import { app } from "@/constants";
import Image from "next/image";
import Link from "./link-with-loader";

type Props = {};

const HomePageLink = (props: Props) => {
  return (
    <div>
      <Link
        className="flex gap-1 font-semibold  tracking-tight rounded-lg  text-5xl dark:hover:text-gray-200 font-serif -mb-1 justify-center items-center"
        href={"/home"}
      >
        <Image
          className={` sm:block  lg:block `}
          src={"/images/logo-round.png"}
          alt={app.name}
          width={36}
          height={36}
        />
        <span className="text-4xl sm:5xl -mb-1">{app.name}</span>
      </Link>
    </div>
  );
};

export default HomePageLink;
