import Block from "./block";

describe("Block", () => {
  let timestamp;
  let previousBlock;
  let data;
  let hash;

  beforeEach(() => {
    timestamp = new Date(2000, 0, 1);
    previousBlock = Block.genesis;
    data = "t3st-d4t4";
    hash = "h4s4";
  });

  it("create an instance with parameters", () => {
    const block = new Block(timestamp, previousBlock.hash, hash, data);

    expect(block.timestamp).toEqual(timestamp);
    expect(block.previousHash).toEqual(previousBlock.hash);
    expect(block.data).toEqual(data);
    expect(block.hash).toEqual(hash);
  });

  it("use static mine()", () => {
    const block = Block.mine(previousBlock, data);

    expect(block.hash.length).toEqual(64);
    expect(block.previousHash).toEqual(previousBlock.hash);
    expect(data).toEqual(data);
  });

  it("use static hash()", () => {
    hash = Block.hash(timestamp, previousBlock.hash, data);
    const hashOutput =
      "9a5e2d226eef0b03107bfa9b985bad38e2bf258df6482fcc5ad7b3e88af9aafe";

    expect(hash).toEqual(hashOutput);
  });

  it("use static toString", () => {
    const block = Block.mine(previousBlock, data);

    expect(typeof block.toString()).toEqual("string");
  });
});
