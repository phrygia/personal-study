"use client"; // client에서 인터랙티브하게 만들어진 컴포넌트. 이 외에는 서버사이드로 실행됨
// backend에서 render되고 frontend에서 hydrate/interactive됨
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const path = usePathname();
  console.log(path);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About us!</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
