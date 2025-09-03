import React from "react";
import { BuilderComponent, builder } from "@builder.io/react";

// Connect your Builder.io account
builder.init("177ff67c0ebd4a44bbeeb92482f9379c"); // replace with your actual Builder.io Public API Key

export default function App() {
  return (
    <div>
      <BuilderComponent model="page" />
    </div>
  );
}
