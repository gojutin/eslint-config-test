// 'useState' is defined but never used.eslint@typescript-eslint/no-unused-vars
import something from "./file";
import React, { useState } from "react";

function App() {
  // Unexpected let, use const instead.eslintfunctional/no-let
  let x = 3;

  console.log(something);

  return (
    <div>
      <header>
        <h1>Test App for Eslint Config</h1>
      </header>
    </div>
  );
}

export default App;
