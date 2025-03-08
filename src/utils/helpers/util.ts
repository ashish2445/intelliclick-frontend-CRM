// import { Role, StorageKey, Theme } from '@utils/enums';

import { TimeRangeType } from "../constants/timeRanges";

// export const getToken = () => {
//   const role = localStorage.getItem(StorageKey.ROLE) || Role.STUDENT;
//   const token = localStorage.getItem(`${role}${StorageKey.TOKEN}`);
//   return token;
// };

export function formatToLocalTime(isoDate: string): string {
  // Ensure `isoDate` is provided and valid
  if (!isoDate) {
    return "Invalid Date";
  }

  const date = new Date(isoDate); // Parse ISO date string

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid Date NaN";
  }

  // Extract components of the date
  const day = date.getDate(); // Day of the month (1-31)
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase(); // Abbreviated month (e.g., APR)
  const year = date.getFullYear(); // Full year (e.g., 2024)

  // Extract time components
  const hours = date.getHours(); // Hours (0-23)
  const minutes = date.getMinutes(); // Minutes (0-59)

  // Format time in 12-hour format with AM/PM
  const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")}${
    hours >= 12 ? "PM" : "AM"
  }`;

  // Return the custom format: "4 APR, 2024 4:45PM"
  return `${day} ${month}, ${year} ${formattedTime}`;
}

// export const getAllKeys = <T extends Record<string, any>>(data: T[]): (keyof T)[] => {
//   const keysSet = new Set<string>();
//   data.forEach((item) => {
//     Object.keys(item).forEach((key) => keysSet.add(key));
//   });
//   return Array.from(keysSet) as (keyof T)[];
// };

export const getAllKeys = <T extends Record<string, any>>(data: T[]): string[] => {
  return Array.from(new Set(data.flatMap((row) => Object.keys(row))));
};

// export const getDateRange = (range: "today" | "yesterday" | "lastWeek" | "lastMonth") => {
//   const today = new Date();
//   let startDate = new Date();
//   let endDate = new Date();

//   switch (range) {
//     case "today":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 23, 59, 59, 999));
//       break;

//     case "yesterday":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1, 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1, 23, 59, 59, 999));
//       break;

//     case "lastWeek":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - today.getUTCDay() - 6, 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - today.getUTCDay(), 23, 59, 59, 999));
//       break;

//     case "lastMonth":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() - 1, 1, 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 0, 23, 59, 59, 999));
//       break;

//     default:
//       throw new Error("Invalid range provided");
//   }

//   return {
//     startDate: startDate.toISOString(), // ISO 8601 format
//     endDate: endDate.toISOString(),
//   };
// };

// export const getDateRange = (range: TimeRangeType) => {
//   const today = new Date();
//   let startDate: Date;
//   let endDate: Date;

//   switch (range) {
//     case "today":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 23, 59, 59, 999));
//       break;

//     case "yesterday":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1, 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1, 23, 59, 59, 999));
//       break;

//     case "lastWeek":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - today.getUTCDay() - 6, 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - today.getUTCDay(), 23, 59, 59, 999));
//       break;

//     case "lastMonth":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() - 1, 1, 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 0, 23, 59, 59, 999));
//       break;

//     default:
//       throw new Error("Invalid range provided");
//   }

//   return { startDate, endDate }; // Returns Date objects, not strings
// };

// export const getDateRange = (range: TimeRangeType) => {
//   const today = new Date();
//   let startDate: Date;
//   let endDate: Date;

//   switch (range) {
//     case "All":
//       // Set startDate to a very early date and endDate to the far future
//       startDate = new Date(1970, 0, 1, 0, 0, 0, 0); // Unix epoch start
//       endDate = new Date(2099, 11, 31, 23, 59, 59, 999); // Arbitrary far future date
//       break;

//     case "Today":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 23, 59, 59, 999));
//       break;

//     case "Yesterday":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1, 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1, 23, 59, 59, 999));
//       break;

//     case "This Week":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - today.getUTCDay(), 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() + (6 - today.getUTCDay()), 23, 59, 59, 999));
//       break;

//     case "Last Week":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - today.getUTCDay() - 7, 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - today.getUTCDay() - 1, 23, 59, 59, 999));
//       break;

//     case "This Month":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1, 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() + 1, 0, 23, 59, 59, 999));
//       break;

//     case "Last Month":
//       startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() - 1, 1, 0, 0, 0, 0));
//       endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 0, 23, 59, 59, 999));
//       break;

//     default:
//       throw new Error(`Invalid range provided: ${range}`);
//   }

//   return { startDate, endDate };
// };

export const getDateRange = (range: TimeRangeType) => {
  const today = new Date();
  let startDate: Date;
  let endDate: Date;

  switch (range) {
    case "All":
      startDate = new Date(1970, 0, 1, 0, 0, 0, 0); // Unix epoch start
      endDate = new Date(2099, 11, 31, 23, 59, 59, 999); // Arbitrary far future date
      break;

    case "Today":
      startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 0, 0, 0, 0));
      endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 23, 59, 59, 999));
      break;

    case "Yesterday":
      startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1, 0, 0, 0, 0));
      endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1, 23, 59, 59, 999));
      break;

    case "This Week":
      startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - today.getUTCDay(), 0, 0, 0, 0));
      endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() + (6 - today.getUTCDay()), 23, 59, 59, 999));
      break;

    case "Last Week":
      startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - today.getUTCDay() - 7, 0, 0, 0, 0));
      endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - today.getUTCDay() - 1, 23, 59, 59, 999));
      break;

    case "This Month":
      startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1, 0, 0, 0, 0));
      endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() + 1, 0, 23, 59, 59, 999));
      break;

    case "Last Month":
      startDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth() - 1, 1, 0, 0, 0, 0));
      endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 0, 23, 59, 59, 999));
      break;

    default:
      throw new Error(`Invalid range provided: ${range}`);
  }

  return { startDate, endDate }; // Returns Date objects
};

export const formatCamelCase = (text: string): string => {
  return text
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .trim() // Remove leading/trailing spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};









