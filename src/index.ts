import { CalculatorInit, FunctionalCalculator } from './S';

const initedCalculator = new CalculatorInit(['addition', 'substraction']);
const functionalizedCalculator = new FunctionalCalculator(initedCalculator);

// initedCalulator was extended with functionalizedCalculator, so we split logic in parts
console.log(functionalizedCalculator.add(2, 2));
