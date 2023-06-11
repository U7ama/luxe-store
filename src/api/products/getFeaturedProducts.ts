import { customAxios } from '@/lib/axios';
import { Product, StrapiResponse } from '@/types';
import { recommendedProducts } from '@/data/products';
// export const getFeaturedProducts = async () => {
//   const { data } = await customAxios.get<StrapiResponse<Product[]>>(
//     '/products?populate=*&filters[feature][$eq]=featured'
//   );
//   return data;
// };
export const getFeaturedProducts = async () => {
  return recommendedProducts;
};