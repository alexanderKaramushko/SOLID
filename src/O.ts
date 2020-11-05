// Open-Close Principle

interface AbstractFilter {
  form: () => void;
}

interface ImplementedFilter {
  type: string;
  value: string;
}

type ExtendedFilter = ImplementedFilter & AbstractFilter;

/**
 * @class Filter
 * @classdesc filter abstract class
 */
export abstract class Filter {
  abstract form(): void;
}

/**
 * @class TextFilter
 * @classdesc extend abstract filter
 */
export class TextFilter extends Filter {
  public readonly type: string;
  public readonly value: string;

  constructor(value: string) {
    super();

    this.type = 'text';
    this.value = value;
  }

  form(): ImplementedFilter {
    return { type: this.type, value: this.value };
  }
}

/**
 * @class NumberFilter
 * @classdesc extend abstract filter
 */
export class NumberFilter extends Filter {
  public readonly type: string;
  public readonly value: string;

  constructor(value: string) {
    super();

    this.type = 'number';
    this.value = value;
  }

  form(): ImplementedFilter {
    return { type: this.type, value: this.value };
  }
}

/**
 * @class FilterOutput
 * @classdesc filter builder is open for scalibility and closed for modifications
 */
export class FilterOutput {
  public readonly filters: ExtendedFilter[];

  constructor(filters: ExtendedFilter[]) {
    this.filters = filters;
  }

  getOutput(): string {
    return this.filters
      .reduce<any>((output, filter) => {
        return [...output, filter.form()];
      }, []);
  }
}

// const output = new FilterOutput([
//   new TextFilter('name'),
//   new NumberFilter('15 000'),
// ]);

