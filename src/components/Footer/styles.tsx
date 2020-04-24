import styled from 'styled-components';
import { media, color } from 'theme/';

export const Container = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 54px;
  padding: 15px 20px;
  background-color: ${color.palette.wildSandAlt};
  font-size: 1.4rem;

  @media ${media.tablet} {
    flex-direction: row;
    height: 54px;
  }
`;
