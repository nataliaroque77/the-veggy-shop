import React from 'react';
import { Container } from './styles';
import  PaymentMethods from '../PaymentMethods'

function Footer() {
  return (
    <Container>
      <PaymentMethods />
      <p>© 2012-2020 The Veggie Shop. All rights reserved.</p>
    </Container>
  );
}

export default Footer;
