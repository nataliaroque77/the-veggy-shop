import produce from 'immer';
import { ProductProps } from 'pages/Products/types'

export default function checkFavorite(state: ProductProps[] = [], action : any): any {
  switch (action.type) {
    case '@favorites/ADDED':
      return produce(state, draft => {
        const itemIndex = draft.findIndex(id => id === action.item.id);
        if (itemIndex >= 0) {
          draft.splice(itemIndex, 1);
        } else {
          draft.push(action.item.id);
        }
      });
    default:
      return state;
  }
}
