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
    expect(ll.getAt(1)).toEqual({ data: 'B', next: { data: 'C', next: null } });
    ll.insertAt(2, 'M');
    expect(ll.size).toBe(4);
    expect(ll.getAt(2)).toEqual({ data: 'M', next: { data: 'C', next: null } });
    ll.deleteFromFirst();
    expect(ll.size).toBe(3);
    ll.deleteFromFirst();
    expect(ll.size).toBe(2);
    ll.push('C');
    ll.push('D');
    ll.removeAt(1);
    expect(ll.size).toBe(3);
    expect(ll.print()).toEqual('M ---> C ---> D');
  });
});


