export class Stack<T> {
  data: T[];
  pointer: number;

  constructor() {
    this.data = [];
    this.pointer = -1;
  }

  isEmpty(): boolean {
    return this.pointer === -1;
  }

  push(value: T): void {
    this.pointer++;
    this.data[this.pointer] = value;
  }

  pop(): T | null {
    if(this.isEmpty()) {
      return null;
    }

    const poppedValue = this.data[this.pointer];
    this.data.splice(this.pointer, 1);
    this.pointer--;
    return poppedValue;
  }

  peek(): T | null {
    return this.isEmpty() ? null : this.data[this.pointer];
  }

};
