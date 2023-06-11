import { customAxios } from '@/lib/axios';
import { Product, StrapiResponse } from '@/types';
import { products } from '@/data/products';

export const getProductsByCategory = async (category: string) => {
  // This assumes that the `category` argument matches the product's brand title
  const foundProducts = products?.data.filter((prod: any) => prod.attributes.brand.data.attributes.title === category);
  if (!foundProducts) {
    throw new Error(`No products found for category ${category}`);
  }
  return foundProducts;
};

// export const getProductsByCategory = async (category: string) => {
//   const { data } = await customAxios.get<StrapiResponse<Product[]>>(
//     `/products?populate=*&filters[category][title][$eq]=${category}`
//   );
//   return data;
// };
