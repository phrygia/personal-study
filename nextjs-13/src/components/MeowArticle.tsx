"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/products/page.module.css";

const MeowArticle = () => {
  const [text, setText] = useState("데이터 준비중..");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com", {
      // next: { revalidate: 3 },
      // cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.aritcle}>{text}</article>;
};

export default MeowArticle;
