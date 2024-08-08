import React from "react";

export type HeadersProps = {
  links: [
    {
      label: string;
      path: string;
    }
  ];
};

export const Header = ({ links }: HeadersProps) => {
  return (
    <div className="header absolute inset-x0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {links.map(({ label, path }) => {
          return (
            <div className="hidden lg:flex lg:gap-x-12" key={label}>
              <a
                href={path}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {label}
              </a>
            </div>
          );
        })}
      </nav>
    </div>
  );
};
