import { customAxios } from '@/lib/axios';
import { Product, StrapiResponse } from '@/types';
import { products } from '@/data/products';
// export const getProductById = async (id: string) => {
//   const { data } = await customAxios.get<StrapiResponse<Product>>(
//     `/products/${id}?populate=*`
//   );
//   return data;
// };

export const getProductById = async (id: string) => {
  // Assuming ids are unique, this will find the product with the provided id
  const foundProduct = products?.data?.find((prod: any) => prod.id.toString() === id);
  if (!foundProduct) {
    throw new Error(`No product found with id ${id}`);
  }
  return foundProduct;
};