class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    get(index) {
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    delete(index) {
      const item = this.data[index];
      this.shiftIndex(index);
  
      return item;
    }
    unshift(item){
        this.length ++;
        for(let i=this.length-1;i>0;i--){
            this.data[i]=this.data[i-1]
        }
        this.data[0]=item;
        return this.data[0];        
    }
    shift(){
        const itemShifted=this.data[0]
        this.shiftIndex(0)//reutilizo el código hecho por el profe
        return itemShifted;
    }
    shiftIndex(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
    getInstance(){
      return this;
    }
  }
  
  const myArray = new MyArray();
  
  myArray.push("Pedro");
  myArray.push("Ana");
  myArray.push("Oscar");
  myArray.unshift("Carmen");
  myArray.unshift("Carlos");
  //console.log(myArray.data);
  myArray.shift();
  //console.log(myArray.data);
  //console.log(myArray.get(0));

  const myArray2 = myArray.getInstance();
  myArray2.push("Manuel");
  console.log(myArray2,myArray);