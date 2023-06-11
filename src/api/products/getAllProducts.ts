// import { customAxios } from '@/lib/axios';
// import { Product, StrapiResponse } from '@/types';
import { products } from '@/data/products';

export const getAllProducts = async () => {
  return products;
};

// export const getAllProducts = async () => {
//   const { data } = await customAxios.get<StrapiResponse<Product[]>>(
//     '/products'
//   );
//   return data;
// };
