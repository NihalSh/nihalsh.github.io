import React from 'react';
import CenterColumn from './CenterColumn';
import Header from './Header';

const Template = props => (
  <CenterColumn>
    <Header />
    {props.children}
  </CenterColumn>
);

export default Template;
