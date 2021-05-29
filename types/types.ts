export interface Course {
  id: string | number;
  courseDuration: string;
  courseTitle: string;
  courseDescription: string;
  thumbnailUrl: string;
  price: number | string;
  aboutTheCourse: string;
  categiroy: string[];
}

// Typography variants types
export type VariantTypes =
  | "display1"
  | "display2"
  | "display3"
  | "heading1"
  | "heading2"
  | "paragraphLarge"
  | "paragraphMedium"
  | "paragraphSmall"
  | "buttonLargeText"
  | "buttonMediumText"
  | "buttonSmallText";
