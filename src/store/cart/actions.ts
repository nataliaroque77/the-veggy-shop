import { ProductProps } from 'pages/Products/types';

export interface AddProduct {
  type: string;
  item: ProductProps;
}

export interface RemoveProduct {
  type: string;
  id: string;
}

export interface UpdateProduct {
  type: string;
  id: string;
  amount: number;
}

export function addToCart(item: ProductProps):AddProduct {
  return {
    type: '@cart/ADD',
    item,
  };
}

export function removeFromCart(id:string):RemoveProduct {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmount(id: string, amount:number):UpdateProduct {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
