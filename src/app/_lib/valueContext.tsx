export class ValueContext<T> {
      value: T
  
      public constructor(value: T) {
          this.value = value
      }
  
      public set(value: T) {
          this.value = value
      }
  
      public get() {
          return this.value
      }
  }