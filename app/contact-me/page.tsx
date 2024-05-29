import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  MessageCircle,
} from "lucide-react";

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full py-2 p-4 text-center">
      <img
        src="/img/profile-pic.jpg"
        alt="Logo"
        className="w-32 h-32 mb-4 rounded-full"
      />
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg mb-2">
        I am skilled in Next.js, React, TypeScript, Express, Tailwind and CSS{" "}
      </p>{" "}
      <p className="text-sm mb-4">
        {" "}
        If you have a project in mind, feel free to contact me.
      </p>
      <div className="flex space-x-6 mb-4">
        <a
          href="mailto:gerkim62@gmail.com"
          className=" hover:text-muted-foreground"
        >
          <Mail size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/gerison-kimathi-111589290/"
          className=" hover:text-muted-foreground"
        >
          <Linkedin size={30} />
        </a>
        <a
          href="https://github.com/gerkim62"
          className=" hover:text-muted-foreground"
        >
          <Github size={30} />
        </a>
        <a
          href="https://x.com/dev_gerison"
          className=" hover:text-muted-foreground"
        >
          <Twitter size={30} />
        </a>
        <a
          href="https://www.facebook.com/ger.kimwakipkona"
          className=" hover:text-muted-foreground"
        >
          <Facebook size={30} />
        </a>
        <a
          href="https://wa.me/+254715870654"
          className=" hover:text-muted-foreground"
        >
          <MessageCircle size={30} />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
