import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const LINKS = [
  { icon: <AiFillGithub />, url: "" },
  { icon: <AiFillLinkedin />, url: "" },
  { icon: <AiFillYoutube />, url: "" },
];

export const metadata: Metadata = {
  title: "Contact Me",
  description: "메일 보내기",
};

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact ME</h2>
      <p>dmsgp62@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-5xl hover:text-yellow-400"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
