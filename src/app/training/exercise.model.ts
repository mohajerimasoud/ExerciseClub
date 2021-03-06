export interface Exercise {
  id?: string;
  name: string;
  duration: number;
  calories: number;
  date?: Date;
  state?: 'completed' | 'cancelled' | null;
  uid?: string;
  description?:string;
  imageUrl?:string;
}
