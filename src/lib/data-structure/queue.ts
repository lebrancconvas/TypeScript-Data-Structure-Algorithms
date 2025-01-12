export class Queue<T> {
  data: T[];
  pointer: number;

  constructor() {
    this.data = [];
    this.pointer = -1;
  }

  isEmpty() {
    return this.pointer === -1;
  }

  enqueue(value: T) {
    this.pointer++;
    this.data[this.pointer] = value;
  }

  dequeue(): T | null {
    if(this.isEmpty()) return null;


    const dequeuedValue = this.data[0];
    this.data.splice(0, 1);
    this.pointer--;
    return dequeuedValue;
  }

  front(): T | null {
    return this.isEmpty() ? null : this.data[0];
  }
};
