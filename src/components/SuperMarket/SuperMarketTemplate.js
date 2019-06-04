import React from 'react';
import { parse } from 'qs'
import './SuperMarketTemplate.scss';


class SuperMarketTemplate extends React.Component {
  render(){
    const { items, basket, total, match, location } = this.props;
    const queryObject = parse(location.search.substr(1))

    return (
      <div className="SuperMarketTemplate">
        <div className="items-wrapper">
          <h2>{match.params.id}의 상품</h2>
          <h3>{queryObject.items ? queryObject.items : 0}개부터 시작</h3>
          {items}
        </div>
        <div className="basket-wrapper">
          <h2>장바구니</h2>
          {basket}
          {total}
        </div>
      </div>
    );
  }
}



export default SuperMarketTemplate;
