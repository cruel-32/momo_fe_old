import CategoryStore from './category';
import MeetingStore from './meeting';
import AccountStore from './account';

class RootStore {
  constructor() {
    this.category = new CategoryStore(this);
    this.meeting = new MeetingStore(this);
    this.account = new AccountStore(this);
  }
}

export default RootStore;
