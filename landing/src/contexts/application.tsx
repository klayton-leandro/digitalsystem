import React, { useState, useContext } from "react";
import { HeadersProps } from "components";

type ApplicationContextProps = {
  isLoginIn: boolean;
  links: HeadersProps["links"] | [];
  setLoginStatus: (status: boolean) => void;
  setLinks: (links: HeadersProps["links"]) => void;
};

const ApplicationContext = React.createContext<ApplicationContextProps>({
  isLoginIn: false,
  links: [],
  setLoginStatus: () => {},
  setLinks: () => {}
});

export const ApplicationProvider: React.FC<React.PropsWithChildren<[]>> = ({
  children,
}) => {
  const [isLoginIn, setLoginStatus] = useState(false);
  const [links, setLinks] = useState<HeadersProps["links"]>([
    {
      label: "home",
      path: "/home"
    }
  ]);

  return (
    <ApplicationContext.Provider
      value={{
        isLoginIn,
        links,
        setLoginStatus,
        setLinks
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useRoot = () => useContext(ApplicationContext);
