import React, { useState, useContext } from 'react';
import { HeadersProps } from 'components';

type ApplicationContextProps = {
  isLoginIn: boolean;
  links: HeadersProps['links'];
  setLoginStatus: (status: boolean) => void;
  setLinks: (links: HeadersProps['links']) => void;
};

const ApplicationContext = React.createContext<ApplicationContextProps>({
  isLoginIn: false,
  links: [{ label: '', path: '' }],
  setLoginStatus: () => {},
  setLinks: () => {}
});

export const ApplicationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoginIn, setLoginStatus] = useState(false);
  const [links, setLinks] = useState<HeadersProps["links"]>([
    { label: 'Home', path: '/home' },
    { label: 'Contato', path: '/contato' },
    { label: 'Servicos', path: '/servicos' },
    { label: 'Manutencao', path: '/manutencao' }
  ]);

  return (
    <ApplicationContext.Provider value={{ isLoginIn, links, setLoginStatus, setLinks }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useRoot = () => useContext(ApplicationContext);
