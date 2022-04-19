export interface Backpack {
  id: number;
  name: string;
  brand: string;
  capacity: number;
  material: string;
  gender?: string;
  description: string;
  image: string;
  reviews?: Review[];
}
export interface Review {
  id: number;
  user: string;
  text: string;
  rating: number;
}
