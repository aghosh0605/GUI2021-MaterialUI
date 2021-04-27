import React from "react";
import AppBarBasic from "./../Organisms/AppBarBasic";
import Body from "./../Organisms/Body";
import CommandBar from "./../Organisms/CommandBar";
import Footer from "./../Organisms/Footer";

export default function Dashboard() {
  return (
    <div>
      <AppBarBasic />
      <CommandBar />
      <Body />
      <Footer />
    </div>
  );
}
