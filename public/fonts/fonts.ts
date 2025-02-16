import localFont from "next/font/local";

export const workSans = localFont({
  src: [
    {
      path: "WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "WorkSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "WorkSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});
