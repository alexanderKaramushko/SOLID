// Single Responsibility Principle

type Operations = 'addition' | 'substraction';

/**
 * @class CalculatorInit
 * @classdesc represents calculator main class
 */
export class CalculatorInit {
  public readonly operations: Operations[];

  constructor(operations: Operations[] = []) {
    this.operations = operations;
  }

  getOperations(): Operations[] {
    return this.operations;
  }
}

/**
 * @class FunctionalCalculator
 * @classdesc represents calculator helper class, splits logic and follows S-principle
 */
export class FunctionalCalculator {
  private readonly initedCalculator: CalculatorInit;

  constructor(initedCalculator: CalculatorInit) {
    this.initedCalculator = initedCalculator;
  }

  add(a: number, b: number): number {
    if (this.initedCalculator.getOperations().includes('addition')) {
      return a + b;
    }
    throw new Error('Class doesn\'t support addition operation!');
  }

  substract(a: number, b: number): number {
    if (this.initedCalculator.getOperations().includes('substraction')) {
      return a + b;
    }
    throw new Error('Class doesn\'t support substraction operation!');
  }
}
