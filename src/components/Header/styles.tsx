import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, media } from 'theme';

export const Container = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${color.backgroundPrimary};
  z-index: 9;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const PrimaryNav = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 9px 20px 7px;
  font-size: 1.2rem;
  color: ${color.textAlt};
`;

export const LocaleContainer = styled.ul`
  display: none;
  list-style: none;
  letter-spacing: 0.1em;
  margin-left: -10px;

  li {
    float: left;
    border-right: 1px solid ${color.textAlt};
    letter-spacing: 0.5px;
    white-space: nowrap;
    cursor: pointer;
  }

  a {
    display: inline-block;
    padding: 4px 12px 3px;

    span {
      margin-left: 10px;
    }
  }

  @media ${media.tablet} {
    display: block;
  }
`;

export const SecondaryNav = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  padding: 0 20px;

  background-color: ${color.backgroundSecondary};
  z-index: 3;
  transition: margin 0.3s ease;
`;

export const Brand = styled(Link)`
  color: ${color.palette.lima};
  text-decoration: none;
  font-size: 1.5rem;
 
  @media ${media.tablet} {
     font-size: 1.8rem;
  }
`;

export const ShopAllProducts = styled(Link)`
  color: ${color.textAlt};
  text-decoration: none;
  margin-left: 10px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

export const UserNav = styled.ul`
  list-style: none;
  display: none;

  li {
    border-right: 1px solid ${color.textAlt};
    float: left;
    margin: 0;
    white-space: nowrap;
    cursor: pointer;
  }

  a {
    color: ${color.textAlt};
    padding: 4px 12px 3px;
  }

  @media ${media.tablet} {
    display: block;
  }
`;

export const CartItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${color.palette.lima};
  transition: opacity 0.2s;
  margin-left: 10px;

  &:hover {
    opacity: 0.7;
  }

  span {
    font-size: 1.2rem;
    text-align: right;
    margin-right: 10px;
  }
`;
