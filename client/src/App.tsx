import { StyledEngineProvider } from "@mui/material";
import { useState, useMemo } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";
import { CONTEXT } from "./libs/constants";
import { LOCALES, messages } from "./locales/locales";

function App() {
  const [currentLocale, setCurrentLocale] = useState(LOCALES.ENGLISH);
  const contextValue = useMemo(
    () => ({
      locale: currentLocale,
      setLocale: setCurrentLocale,
    }),
    [currentLocale, setCurrentLocale],
  );
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <CONTEXT.Provider value={contextValue}>
          <IntlProvider
            messages={messages[currentLocale]}
            locale={currentLocale}
            defaultLocale={LOCALES.ENGLISH}
          >
            <Header />
            <AppRouter />
          </IntlProvider>
        </CONTEXT.Provider>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
