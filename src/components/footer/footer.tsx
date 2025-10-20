"use client";

import React from "react";
import { config } from "@/data/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col items-center justify-center border-t border-zinc-800 px-4 py-6 bg-black text-center">
      <p className="text-sm text-gray-400">
        © {year} <span className="text-white font-semibold">{config.author}</span>. All rights reserved.
      </p>
    </footer>
  );
}
