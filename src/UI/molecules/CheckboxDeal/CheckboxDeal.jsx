import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';


import Checkbox from '../Checkbox';
import Price from '../Price';


import {
  Block,
  CheckBoxWrapper,
  Deal,
  Title,
  PriceWrapper,
} from './CheckboxDeal.styles';


@inject('t')
@observer
class CheckboxDeal extends Component {
  render() {
    const { t, checked, onChange, item } = this.props;
    return (
      <Block
        active={checked}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (onChange) onChange(item._id);
        }}
      >
        <CheckBoxWrapper>
          <Checkbox
            checked={checked}
            onChange={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
          />
        </CheckBoxWrapper>
        <Title>
          {`${t('billing.audit.deal')}`}
          <Deal>{`«${item.title}»`}</Deal>
        </Title>
        <If condition={item.price}>
          <PriceWrapper>
            {/* <Price
              value={item.price}
              format="fullPrice"
            /> */}
          </PriceWrapper>
        </If>
      </Block>
    );
  }
}

export default CheckboxDeal;
