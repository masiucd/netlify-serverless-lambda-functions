const L = require('./LL');

const TestList = L.LinkedList;
const TestNode = L.Node;

test('List is a Class', () => {
  expect(typeof TestList.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
  expect(typeof TestNode.prototype.constructor).toEqual('function');
});

describe('A Node is a correct Node', () => {
  test('has a property of data', () => {
    const node = new TestNode(1);
    expect(node.data).toEqual(1);
  });
});
