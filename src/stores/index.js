import CounterStore from './counter';
import MarketStore from './market';
import CategoryStore from './category';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
    this.category = new CategoryStore(this);
  }
}

export default RootStore;
