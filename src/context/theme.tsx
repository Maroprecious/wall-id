import React, { useState, createContext, useContext, useMemo } from "react";


type themeContextProps = {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext<themeContextProps>({
  isDarkTheme: false,
  setIsDarkTheme: () => null,
});

export const ThemeContextProvider = ({ children }: any) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const value = useMemo(
    () => ({ isDarkTheme, setIsDarkTheme }),
    [isDarkTheme, setIsDarkTheme]
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
