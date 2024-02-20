"use client";

import Link from "next/link";
import styles from "./page.module.css";
import VCenter from "@/components/VCenter";
import Card from "@/components/Card";
import { useState } from "react";
import { calcFetchServer, getDogImageUrl, serverGetAdvice } from "@/app/actions";

function Home() {
  const defaultBox = (
    <div
      style={{ width: "160px", height: "90px", backgroundColor: "lightgray" }}
    >
      <span>DOG IMAGE</span>
    </div>
  );

  const [imageBox, setImageBox] = useState<React.ReactNode>(defaultBox);

  const handleClick = async () => {
    console.log("FETCH DOG IMAGE!!");
    const url = await getDogImageUrl();
    console.log(url);
    const newImageBox = (
      <img
        src={url}
        alt="dog"
        style={{ width: "160px", height: "90px", objectFit: "cover" }}
      />
    );
    setImageBox(newImageBox);
  };

  const clientGet = async () => {
    const startTime = new Date().getTime();
    const res = await fetch("https://api.adviceslip.com/advice/1");
    const data = await res.json();
    const advice = data.slip.advice;
    const endTime = new Date().getTime();
    const latency = endTime - startTime;
    console.log(`CLIENT_LATENCY: ${latency}ms`);
  }

  const serverGet = async () => {
    const startTime = new Date().getTime();
    const advice = await serverGetAdvice();
    const endTime = new Date().getTime();
    const latency = endTime - startTime;
    console.log(`SERVER_LATENCY: ${latency}ms`);
  }

  const calcClientTime = async() => {
    const startTime = new Date().getTime();
    const res = await fetch("https://api.adviceslip.com/advice/1");
    const endTime = new Date().getTime();
    const latency = endTime - startTime;
    console.log(`FETCH_TIME(CLIENT): ${latency}ms`);
  }

  const calucServerTime = async() => {
    const latency = await calcFetchServer();
    console.log(`FETCH_TIME(SERVER): ${latency}ms`);
  }

  return (
    <VCenter>
      <h1>Hello world</h1>
      <span>Here is the test field of Next.js</span>
      <span>Let's learn basic features of Next.js</span>
      <Card title="Links">
        {/* <Link href="/isr">ISR</Link>
        <Link href="/ssg">SSG</Link>
        <Link href="/ssr">SSR</Link> */}
      </Card>
      <Card title="FETCH">
        <button type="button" onClick={handleClick}>
          FETCH DOG IMAGE!!
        </button>
        <div style={{ padding: "5px" }}>{imageBox}</div>
      </Card>
      <Card title="TEST ServerActions">
        <p>ClientGet</p>
        <button type="button" onClick={clientGet}>
          ClientGet
        </button>
        <p>ServerGet</p>
        <button type="button" onClick={serverGet}>
          ServerGet
        </button>
      </Card>
      <Card title="only fetch time">
        <p>ClientTime</p>
        <button type="button" onClick={calcClientTime}>
          ServerTime
        </button>
        <p>ServerTime</p>
        <button type="button" onClick={calucServerTime}>
          ServerTime
        </button>
      </Card>
    </VCenter>
  );
}

export default Home;
