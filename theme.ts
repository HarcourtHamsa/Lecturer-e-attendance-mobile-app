import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SIZES = {
  base: 8,
  font: 14,
  radius: 6,
  padding: 24,
  margin: 20,

  // font sizes
  largeTitle: 30,
  h1: 28,
  h2: 22,
  h3: 19,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "Inter-Bold",
    fontSize: SIZES.largeTitle,
  },
  h1: {
    fontFamily: "Inter-Regular",
    fontSize: SIZES.h1,
    lineHeight: 30,
  },
  h2: {
    fontFamily: "Inter-Regular",
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    fontFamily: "Inter-Regular",
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontFamily: "Inter-Medium",
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  h5: {
    fontFamily: "Inter-Medium",
    fontSize: SIZES.h5,
    lineHeight: 22,
  },
  p: {
    fontFamily: "Inter-Regular",
    fontSize: 18,
  },
};
