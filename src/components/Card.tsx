import React, { PropsWithChildren } from "react";
import VStack from "./VStack";
import VCenter from "./VCenter";

export type CardProps = {
  title: string;
};

const Card = ({ title, children }: PropsWithChildren<CardProps>) => {
  return (
    <div style={{ width: "80%", border: "1px solid red" }}>
      <VCenter>
        <h3>{title}</h3>
        {children}
      </VCenter>
    </div>
  );
};

export default Card;
