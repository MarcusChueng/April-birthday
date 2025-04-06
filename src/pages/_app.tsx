import "@/styles/globals.css";
import { isMobile } from "@/utils/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

export default function App({ Component, pageProps }: AppProps) {
  const [source, setSource] = useState("pc");

  useEffect(() => {
    if (isMobile()) {
      setSource("mobile");
    } else {
      setSource("pc");
    }
  }, []);


  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
  );

  return (
    <DndContext sensors={sensors}>
      <Head>
        <title>给璇璇姐的生日礼物！</title>
      </Head>
      <Component {...pageProps} />
    </DndContext>
  );
}
