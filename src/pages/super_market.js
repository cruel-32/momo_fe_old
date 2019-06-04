import React from 'react';
import SuperMarketTemplate from 'components/SuperMarket/SuperMarketTemplate';
import ShopItemList from 'components/Shop/ShopItemList';
import BasketItemList from 'components/Basket/BasketItemList';
import TotalPrice from 'components/SuperMarket/TotalPrice';

const SuperMarket = ({match, location}) => {
    return (
        <SuperMarketTemplate
            match={match}
            location={location}
            items={<ShopItemList />}
            basket={<BasketItemList />}
            total={<TotalPrice />}
        />
    );
};

export default SuperMarket;
