import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as CardActions from 'store/cart/actions';
import * as FavoriteActions from 'store/favorite/actions';
import { formatPrice } from 'util/format';
import { Container } from 'theme/elements';
import {
  IconBookmark,
  IconShoppingCart,
  IconChevronRight,
  IconChevronLeft,
} from 'theme/icons/index';
import { FaSpinner } from 'react-icons/all';
import {
  ProductsList,
  ProductDetails,
  Quantity,
  AddToCartButton,
  Pagination,
  PaginationControllers,
  Loading,
} from './styles';
import { StateProps, ProductProps } from './types';
import api from 'services/api';
import AppKey from 'services/AppKey';

export default function Index() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const quantity = useSelector((state:StateProps) =>
    // accumulator, current-value
    state.cart.reduce((sumQuantity: any, item:ProductProps) => {
      sumQuantity[item.id] = item.amount;
      return sumQuantity;
    }, {})
  );

  const favorite = useSelector((state:StateProps) => JSON.stringify(state.favorite));
  const dispatch = useDispatch();
  const refs: any = useRef([React.useRef<HTMLDivElement>(null), React.useRef<HTMLDivElement>(null)]);

  useEffect(() => {
    async function load() {
        const param = {
          params: {
            ...{ limit: 8, offset },
            ...AppKey.getApiParams(),
          },
        };
        const result = await api.get('/products', param);

       // FormatPrice
       const data: any = result.data.results.map( (item: any) => ({
        ...item,
        priceFormat: formatPrice(item.price),
       }));

      setProducts(data);
      setLoading(false);
      if (refs.current && refs.current[0] && refs.current[0].current) {
        window.scrollTo(0, refs.current.offsetTop);
        refs.current[0].current.focus();
      }
    }

    load();
  }, [offset]);

  const handleAddProduct = (item: ProductProps) => {
    dispatch(CardActions.addToCart(item));
  };

  const handleFavoriteProduct = (item: ProductProps) => {
    dispatch(FavoriteActions.flagFavorite(item));
  };

  const handlePagination = useCallback(
    action => {
      setLoading(true);

      const pageNow = action === 'back' ? page - 1 : page + 1;
      const offsetNow = action === 'back' ? offset - 8 : offset + 8;

      setPage(pageNow);
      setOffset(offsetNow);
    },
    [page, offset]
  );

  return (
    <Container>
      {!loading || (
        <Loading>
          <FaSpinner size={50} />
        </Loading>
      )}
      <ProductsList>
        {products.map((item: ProductProps, index: number) => (
          <section key={item.id} ref={refs.current[index]}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>

            <ProductDetails cor={(favorite.indexOf(item.id))}>
              <ul>
                <li>
                  {item.priceFormat} - {item.color} / {favorite.indexOf(item.id)}
                </li>
                <li>
                 <div>
                   <IconBookmark onClick={() => handleFavoriteProduct(item)} />
                 </div>
                </li>
              </ul>
            </ProductDetails>
            <AddToCartButton onClick={() => handleAddProduct(item)}>
              <span>
                <IconShoppingCart />
                <Quantity>{quantity[item.id] || 0}</Quantity>
              </span>
              Add to cart
            </AddToCartButton>
          </section>
        ))}
      </ProductsList>

      <Pagination>
        <PaginationControllers type="button" disabled={page < 2} onClick={() => handlePagination('back')}>
          <IconChevronLeft />
        </PaginationControllers>
        <span>{page} / 4</span>
        <PaginationControllers type="button" disabled={page === 4} onClick={() => handlePagination('next')}>
          <IconChevronRight />
        </PaginationControllers>
      </Pagination>
    </Container>
  );
}
