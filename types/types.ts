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
