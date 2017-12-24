import SHA256 from 'crypto-js/sha256';

export default class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const {
      data,
      index,
      previousHash,
      timestamp,
    } = this;

    return SHA256(index + previousHash + timestamp + JSON.stringify(data)).toString();
  }
}
