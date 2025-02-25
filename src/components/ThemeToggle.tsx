// "use client";

// import { useState } from "react";
// import { Switch, styled } from "@mui/material";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import { useTheme } from 'next-themes'

// const ThemeSwitch = styled(Switch)(({ theme }) => ({
//   width: 60,
//   height: 34,
//   padding: 7,
//   "& .MuiSwitch-switchBase": {
//     padding: 5,
//     transform: "translateX(6px)",
//     "&.Mui-checked": {
//       transform: "translateX(22px)",
//       "& + .MuiSwitch-track": {
//         backgroundColor: "#f3e5f5", // Light purple background
//         opacity: 1,
//       },
//       "& .MuiSwitch-thumb": {
//         backgroundColor: "#000",
//       },
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     width: 24,
//     height: 24,
//     backgroundColor: "#fff",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   "& .MuiSwitch-track": {
//     borderRadius: 34 / 2,
//     backgroundColor: "#ddd",
//     opacity: 1,
//   },
// }));

// const ThemeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();

//   const handleToggle = () => {
//     setDarkMode((prev) => !prev);
//     document.body.setAttribute("data-theme", resolvedTheme ? "light" : "dark"); // Optional: Change theme
//   };

//   return (
//     <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//       {resolvedTheme ? <DarkModeIcon /> : <LightModeIcon />}
//       <span>{resolvedTheme ? "Dark mode" : "Light mode"}</span>
//       <ThemeSwitch
//         checked={resolvedTheme}
//         onChange={handleToggle}
//         icon={<LightModeIcon style={{ fontSize: 18, color: "#fff" }} />}
//         checkedIcon={<DarkModeIcon style={{ fontSize: 18, color: "#fff" }} />}
//       />
//     </div>
//   );
// };

// export default ThemeToggle;

// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import { Switch, styled } from "@mui/material";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

// const ThemeSwitch = styled(Switch)(({ theme }) => ({
//   width: 80,
//   height: 50,
//   padding: 7,
//   "& .MuiSwitch-switchBase": {
//     padding: 5,
//     transform: "translate(10px,10px)",
//     "&.Mui-checked": {
//       transform: "translate(40px,10px)",
//       "& + .MuiSwitch-track": {
//         backgroundColor: "#f3e5f5",
//         opacity: 1,
//       },
//       "& .MuiSwitch-thumb": {
//         backgroundColor: "#000",
//       },
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     width: 24,
//     height: 24,
//     backgroundColor: "#fff",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   "& .MuiSwitch-track": {
//     borderRadius: 34 / 2,
//     backgroundColor: "#FBE8FF",
//     opacity: 1,
//   },
// }));

// const ThemeToggle = () => {
//   const { theme,setTheme, resolvedTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null; // Prevents hydration mismatch

//   const handleToggle = () => {
//     setTheme(resolvedTheme === "light" ? "dark" : "light");
//   };

//   return (
//     <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="dark:invert">
//       {resolvedTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
//       <span>{resolvedTheme === "dark" ? "Dark mode" : "Light mode"}</span>
//       <ThemeSwitch
//         checked={resolvedTheme === "light"}
//         onChange={handleToggle}
//         icon={<LightModeIcon style={{ fontSize: 18, color: "#000" }} />}
//         checkedIcon={<DarkModeIcon style={{ fontSize: 18, color: "#000" }} />}
//       />
//     </div>
//   );
// };

// export default ThemeToggle;


"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch, styled } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface ThemeToggleProps {
  hovered: boolean;
}

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 50,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    padding: 5,
    transform: "translate(10px,10px)",
    "&.Mui-checked": {
      transform: "translate(40px,10px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "#f3e5f5",
        opacity: 1,
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: "#000",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 24,
    height: 24,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .MuiSwitch-track": {
    borderRadius: 34 / 2,
    backgroundColor: "#FBE8FF",
    opacity: 1,
  },
}));

const ThemeToggle: React.FC<ThemeToggleProps> = ({ hovered }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  const handleToggle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        opacity: hovered ? 1 : 0.7, // Example usage of hovered
        transition: "opacity 0.2s",
      }}
      className="dark:invert"
    >
      {/* {resolvedTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      <span>{resolvedTheme === "dark" ? "Dark mode" : "Light mode"}</span> */}
      {hovered && (
        <span>
          {resolvedTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          {resolvedTheme === "dark" ? "Dark mode" : "Light mode"}
        </span>
      )}
      <ThemeSwitch
        checked={resolvedTheme === "light"}
        onChange={handleToggle}
        icon={<LightModeIcon style={{ fontSize: 18, color: "#000" }} />}
        checkedIcon={<DarkModeIcon style={{ fontSize: 18, color: "#000" }} />}
      />
    </div>
  );
};

export default ThemeToggle;


