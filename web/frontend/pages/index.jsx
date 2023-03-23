// import { Paper, Typography } from "@mui/material";
// import React from "react";

// export default function HomePage() {
//   return (
//     <div className="h-screen">
//       <Paper>
//         <Typography variant="h3"> Hello world here </Typography>
//       </Paper>
//     </div>
//   );
// }

import React from "react";
import SettingsContent from "../components/SettingApp/Content";
import Navbar from "../shared/Components/Navbar";

function SettingApp() {
  return (
    <div className="">
      <Navbar />
      <div className="px-4 sm:px-8 md:px-14">
        <SettingsContent />
      </div>
    </div>
  );
}

export default SettingApp;
