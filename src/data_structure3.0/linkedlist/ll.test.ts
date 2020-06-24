import { INode, LinkedList } from './app';

describe('Linked List', () => {
  test('INode', () => {
    let node = new INode('A');

    expect(node).toBeDefined();
    expect(node.data).toEqual('A');
    expect(node.data).toBeDefined();
  });

  test('Linked List', () => {
    let ll = new LinkedList();
    ll.push('A');
    ll.push('B');
    ll.push('C');
    ll.push('D');
    expect(ll.push).toBeDefined();
    expect(ll.size).toBe(4);
    ll.pop();
    expect(ll.size).toBe(3);
  });
});

