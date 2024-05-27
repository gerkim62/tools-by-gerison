import { Button } from "@/components/ui/button";
import Link from "@/components/small/link-with-loader";
export default function NotFound() {
  return (
    <div className=" text-center min-h-full flex justify-center items-center flex-col p-4 ">
      <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
        404
      </span>
      <h2 className="my-2 font-heading text-2xl font-bold">Page Not Found!</h2>
      <p>Sorry, the page you are looking for doesn&apos;t exist.</p>
      <div className="mt-8 flex justify-center gap-2">
        <Button size="lg" asChild>
          <Link href="/home">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
}
