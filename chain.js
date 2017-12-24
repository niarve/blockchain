import Block from './block';

export default class Chain {
  // Section 1 Genesis block creation
  constructor() {
    const block = new Block(0, '01/01/2017', 'Genesis', '0');
    this.chain = [block];
  }

  // section 2 adding new blocks
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    this.chain.push(newBlock);
  }

  // section 3 validating the chain
  // TODO: make recursive
  isChainValid() {
    for (let i = 1; i < this.chain.length; i += 1) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}
