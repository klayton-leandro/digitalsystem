import { useRoot } from "contexts";
import { useEffect } from "react";

export default function useLoginIn() {  

  const { isLoginIn,  setLoginStatus } = useRoot()

  useEffect(() => {
    // Aqui você pode adicionar lógica para verificar se o usuário está logado
    // Por exemplo, verificar um token de autenticação no localStorage

    const checkLoginStatus = () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        setLoginStatus(true);
      } else {
        setLoginStatus(false);
      }
    };

    checkLoginStatus();

    // Adicionando um listener para o storage caso o token mude em outra aba do navegador
    window.addEventListener("storage", checkLoginStatus);

    // Cleanup do listener
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  return {
    isLoginIn,
    setLoginStatus,
  };
}
