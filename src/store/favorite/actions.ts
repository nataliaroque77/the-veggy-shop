import { ProductProps } from 'pages/Products/types';

export interface AddFavoriteProduct {
  type: string;
  item: ProductProps;
}

export function flagFavorite(item: ProductProps): AddFavoriteProduct {
  return {
    type: '@favorites/ADDED',
    item,
  };
}
