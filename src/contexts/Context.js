import React, { createContext } from "react";

export const WindowSizeContext = createContext([window.innerWidth, window.innerHeight]);

// console.log("WindowSizeContext :")
// console.log(WindowSizeContext)