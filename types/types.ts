export interface Course {
  id: string | number;
  courseDuration: string;
  courseTitle: string;
  courseDescription: string;
  thumbnailUrl: string;
  price: number | string;
  aboutTheCourse: string;
  categiroy?: string[];
}

// course details type
export interface CourseDetails {
  _class: string;
  id: number;
  title: string;
  url: string;
  is_paid: boolean;
  price: string;
  price_detail: PriceDetail;
  price_serve_tracking_id: string;
  visible_instructors?: VisibleInstructorsEntity[] | null;
  image_125_H: string;
  image_240x135: string;
  is_practice_test_course: boolean;
  image_480x270: string;
  published_title: string;
  tracking_id: string;
}
export interface PriceDetail {
  amount: number;
  currency: string;
  price_string: string;
  currency_symbol: string;
}
export interface VisibleInstructorsEntity {
  _class: string;
  title: string;
  name: string;
  display_name: string;
  job_title: string;
  image_50x50: string;
  image_100x100: string;
  initials: string;
  url: string;
}

// custom pagination types
export type CustomPropsType = {
  itemsPerPage: number;
  totalItems: number;
  goToNext: () => void;
  goToPrevious: () => void;
  currentPageNumber: number;
  goToClickedPageNumber: (pageNum: number) => void;
};

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

// fetched course type
export interface FetchedCoursesType {
  count: number;
  next: string;
  previous: string;
  results?: ResultsEntity[] | null;
  aggregations?: AggregationsEntity[] | null;
  search_tracking_id: string;
}
export interface ResultsEntity {
  _class: string;
  id: number;
  title: string;
  url: string;
  is_paid: boolean;
  price: string;
  price_detail: PriceDetail;
  price_serve_tracking_id: string;
  visible_instructors?: VisibleInstructorsEntity[] | null;
  image_125_H: string;
  image_240x135: string;
  is_practice_test_course: boolean;
  image_480x270: string;
  published_title: string;
  tracking_id: string;
  predictive_score?: null;
  relevancy_score?: null;
  input_features?: null;
  lecture_search_result?: null;
  curriculum_lectures?: null[] | null;
  order_in_results?: null;
  curriculum_items?: null[] | null;
  headline: string;
  instructor_name?: null;
}
export interface PriceDetail {
  currency: string;
  amount: number;
  price_string: string;
  currency_symbol: string;
}
export interface VisibleInstructorsEntity {
  url: string;
  display_name: string;
  title: string;
  initials: string;
  image_50x50: string;
  _class: string;
  image_100x100: string;
  job_title: string;
  name: string;
}
export interface AggregationsEntity {
  id: string;
  title: string;
  options?: OptionsEntity[] | null;
}
export interface OptionsEntity {
  key: string;
  count: number;
  title: string;
  value: string;
}
