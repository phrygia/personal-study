import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "소개",
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section>
        <h2>Who Am I?</h2>
        <p>
          개발을 사랑하는 풀스택 개발자 <br />
          사람과 디자인을 담는 웹앱을 만들고 있음
        </p>
        <h2>Career</h2>
      </section>
    </>
  );
}
