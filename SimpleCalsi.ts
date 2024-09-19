class Calculator {
    add(a: number, b: number): number {
      return a + b;
    }
  
    subtract(a: number, b: number): number {
      return a - b;
    }
  
    multiply(a: number, b: number): number {
      return a * b;
    }
  
    divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
  }
  
  const calc = new Calculator();
  console.log(calc.add(10, 5));       // Output: 15
  console.log(calc.subtract(10, 5));  // Output: 5
  console.log(calc.multiply(10, 5));  // Output: 50
  console.log(calc.divide(10, 5));    // Output: 2
  