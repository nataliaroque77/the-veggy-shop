import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  CartItem,
  PrimaryNav,
  SecondaryNav,
  LocaleContainer,
  NavItem,
  Brand,
  UserNav,
  ShopAllProducts,
} from './styles';
import { IconBeetCarrots, IconBookmark } from 'theme/icons/index';
import { MdShoppingBasket } from 'react-icons/md';
import { StateProps } from '../../pages/Products/types';

interface NumberItemsProps {
  cartLength: number;
  starLength: number;
}

function Header({ cartLength, starLength } : NumberItemsProps) {
  return (
    <Container>
      <PrimaryNav>
        <LocaleContainer>
          <li>
            <a>
              <img src="images/country-ca.png" alt="Canada flag icon" width="17" height="9" />
              <span>Canada ($CAD)</span>
            </a>
          </li>
          <li>
            <a>FR</a>
          </li>
          <li>
            <a>Store Locator</a>
          </li>
        </LocaleContainer>
        <p>
          [Shopping Cart using <strong>React, Redux & Hooks</strong> - Natalia's work in progress]
        </p>
      </PrimaryNav>
      <SecondaryNav>
        <NavItem>
          <Brand to="/">
            The Veggie Shop <IconBeetCarrots />
          </Brand>
          <ShopAllProducts to="/products">all products ></ShopAllProducts>
        </NavItem>
        <NavItem>
          <UserNav>
            <li>
              <a>Hello, Sign in</a>
            </li>
          </UserNav>
          <CartItem to="/favorite">
            <span>{starLength}</span>
            <IconBookmark />
          </CartItem>
          <CartItem to="/cart">
            <span>{cartLength}</span>
            <MdShoppingBasket size={36} />
          </CartItem>
        </NavItem>
      </SecondaryNav>
    </Container>
  );
}

export default connect((state:StateProps) => ({
  cartLength: state.cart.length,
  starLength: state.favorite.length,
}))(Header);
