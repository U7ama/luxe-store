// import { customAxios } from '@/lib/axios';
// import { Category, StrapiResponse } from '@/types';
import { categories } from "@/data/products";

export const getCategories = async () => {
  return categories;
};
// export const getCategories = async () => {
//   const { data } = await customAxios.get<StrapiResponse<Category[]>>(
//     '/categories'
//   );
//   return data;
// };
