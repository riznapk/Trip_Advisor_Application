import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import store from "./redux/store";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#105719",
      },
      secondary: {
        main: "#105719",
        dark: "#ED6B5B",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
