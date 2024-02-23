// import React, { createContext, useContext, useState } from 'react';

// // Define the type for the context value
// interface ThemeContextType {
//   theme: string;
//   setTheme: (theme: string) => void;
// }

// // Create the context with an initial default value
// const ThemeContext = createContext<ThemeContextType>({
//   theme: 'light',
//   setTheme: () => {}
// });

// // Custom hook to use the theme context
// const useTheme = () => useContext(ThemeContext);

// // Component that provides the theme context
// const ThemeProvider({ children }) => {
//   const [theme, setTheme] = useState<string>('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
