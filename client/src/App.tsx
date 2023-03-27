import { StyledEngineProvider } from "@mui/material";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";
import { CONTEXT } from "./libs/constants";

function App() {
  const { t } = useTranslation();
  const contextValue = useMemo(
    () => ({
      translation: t,
    }),
    [t],
  );
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <CONTEXT.Provider value={contextValue}>
          <Header />
          <AppRouter />
        </CONTEXT.Provider>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
