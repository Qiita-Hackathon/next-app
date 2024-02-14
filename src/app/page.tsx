import Image from "next/image";
import styles from "./page.module.css";
import VStack from "@/components/VStack";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <VStack>
        <span>aaa</span>
        <span>bbb</span>
      </VStack>
    </>
  );
}
