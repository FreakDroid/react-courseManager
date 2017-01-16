/**
 * Created by Wilfredo on 08/01/2017.
 */
import crypto from 'crypto';

export default {
  timestamp() {
    console.log('timestamp');
    return parseInt(Date.now() / 1000, 10);
  },
  createHash(ts, privkey, pubkey) {
    const preHash = ts + privkey + pubkey
      , hash    = crypto.createHash('md5').update(preHash).digest('hex');

    return hash;
  }
};

