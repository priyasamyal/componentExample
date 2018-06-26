import {Injectable} from '@angular/core';
import {Network} from '@ionic-native/network';

@Injectable()
export class NetworkcheckProvider {
  constructor(private network: Network) {}
  networkCheck() {
    console.log('NETWORK TYPE:' + this.network.type);
    if (this.network.type == 'NONE' || this.network.type == 'none') {
      return false;
    } else {
      return true;
    }
  }
}
