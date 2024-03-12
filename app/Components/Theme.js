"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const Theme = ({ children }) => {
    const [state, setState] = useState(false);
    useEffect(() => {
        setState(true);
    }, []);
    if (!state) return null;

  return <ThemeProvider attribute="class">{children} </ThemeProvider>;
};

export default Theme;
