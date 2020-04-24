import styled from 'styled-components';
import { color } from 'theme/';
import { ButtonProps } from './types'

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 115px 20px;
  margin: 0 auto;

  h2 {
    margin-bottom: 1.5rem;
  }

  p {
    margin: 0 0 10px;
    line-height: 1.465;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const ClearedButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;
  margin: 0;
  outline-offset: 1px;
  padding: 0;
`;

export const Button = styled.button.attrs((props: ButtonProps) => ({
  disabled: props.loading,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${color.textAlt} none repeat scroll 0 0;
  border: 2px solid ${color.palette.mine};
  color: ${color.palette.mineShaft};
  font-family: non-seasonal sans, sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 40px;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  text-align: center;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${color.textAlt};
    border-color: ${color.backgroundAlt};
    background: ${color.backgroundAlt};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${color.palette.wildSand};
    color: ${color.disabled} !important;
  }
`;

export const ButtonClose = styled(ClearedButton)`
  position: relative;
  float: right;
  width: 28px;
  height: 28px;
  text-decoration: none;
  transition: 0.5s ease-in-out;

  &:before {
    content: '';
    display: block;
    height: 26px;
    width: 1px;
    background: ${color.backgroundAlt};
    position: absolute;
    left: 13px;
    top: 0;
    transform: rotate(45deg);
  }

  &:after {
    position: absolute;
    top: 0;
    left: 13px;
    display: block;
    width: 1px;
    height: 26px;
    content: '';
    background: ${color.backgroundAlt};
    transform: rotate(-45deg);
  }

  &:hover,
  &:focus {
    filter: alpha(opacity=50);
    opacity: 0.5;
  }
`;

export const AccesiblityText = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
