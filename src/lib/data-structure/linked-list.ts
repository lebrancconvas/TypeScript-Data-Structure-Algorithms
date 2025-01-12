export class LinkList<T> {
  value: T;
  next: LinkList<T> | null;

  constructor(value: T, next: LinkList<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  insert(value: T): LinkList<T> {
    const newNode = new LinkList(value);
    newNode.next = this.next;
    this.next = newNode;
    return newNode;
  }
};

export class DoublyLinkList<T> extends LinkList<T> {
  prev: LinkList<T> | null;

  constructor(value: T, next: LinkList<T> | null = null, prev: LinkList<T> | null = null) {
    super(value, next);
    this.prev = prev;
  }
};
