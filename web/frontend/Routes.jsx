import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import SettingApp from "./pages";

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<SettingApp />} />
    </ReactRouterRoutes>
  );
}
