import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import { Provider } from "react-redux";
import Routes from "./Routes";
import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";

import { store } from "./mainStore";
import MUIThemeProvider from "./theme/MUIThemeProvider";
import { createTheme } from "@mui/material";

// const theee = createTheme({
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           borderRadius: '40px'
//         }
//       }

//     }
//   },
// });

export default function App() {
  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <Provider store={store}>
            <QueryProvider>
              <MUIThemeProvider>
                <NavigationMenu
                  navigationLinks={[
                    {
                      label: "Page name",
                      destination: "/pagename",
                    },
                  ]}
                />
                <Routes />
              </MUIThemeProvider>
            </QueryProvider>
          </Provider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
