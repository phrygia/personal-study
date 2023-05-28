import Image from "next/image";
import styles from "./page.module.css";
import os from "os"; // 노드 APIs
import Counter from "@/components/Counter";

export default function Home() {
  console.log("안녕! - 서버");
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지다!! 버전3</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
        alt="shop"
        width="400"
        height="499"
      />
    </>
  );
}
