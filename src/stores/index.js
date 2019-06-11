import CounterStore from './counter';
import MarketStore from './market';
import CategoryStore from './category';
import MeetingStore from './meeting';
import AccountStore from './account';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
    this.category = new CategoryStore(this);
    this.meeting = new MeetingStore(this);
    this.account = new AccountStore(this);
  }
}

export default RootStore;
