import React from "react";
import { Link } from "react-router-dom";

export type HeadersProps = {
  links: {
    label: string;
    path: string;
  }[];
};


export const Header = ({ links }: HeadersProps) => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
        </div>
      </div>
    </nav>
  );
};
