// Liskov Substitution Principle

interface IFilter {
  name: string;
}

/**
 * @class Filter
 * @classdesc common abstraction
 */
export abstract class Filter implements IFilter {
  abstract name: string;
  abstract type: string;
}

interface IRangeFilter extends IFilter {};

/**
 * @class RangeFilter
 * @classdesc more specific abstraction
 */
export abstract class RangeFilter extends Filter {
  abstract getRange(): string | number;
}

interface IRangeTextFilter extends IRangeFilter {
  end: string;
  start: string;
}

/**
 * @class RangeFilter
 * @classdesc more specific abstraction, own getRange()
 */
export class RangeTextFilter extends RangeFilter {
  type: string = 'RangeTextFilter';
  start: string;
  name: string;
  end: string;

  constructor(props: IRangeTextFilter) {
    super();

    const { end, name, start } = props;

    this.start = start;
    this.end = end;
    this.name = name;
  }

  getRange() {
    return `Range: ${this.start} - ${this.end}`;
  }
}

interface IRangeNumberFilter extends IRangeFilter {
  start: number;
  end: number;
}

/**
 * @class RangeNumberFilter
 * @classdesc more specific abstraction, own getRange()
 */
export class RangeNumberFilter extends RangeFilter {
  type: string = 'RangeNumberFilter';
  start: number;
  name: string;
  end: number;

  constructor(props: IRangeNumberFilter) {
    super();

    const { end, name, start } = props;

    this.start = start;
    this.end = end;
    this.name = name;
  }

  getRange() {
    return this.start + this.end;
  }
}

function getRangesInfo(rangeFilters: RangeFilter[]) {
  return rangeFilters
    .reduce<(string | number)[]>((rangesInfo, rangeFilter) => ([...rangesInfo, rangeFilter.getRange()]), []);
}

// console.log(getRangesInfo([
//   new RangeTextFilter({ name: 'filter 1', start: 'A', end: 'F' }),
//   new RangeNumberFilter({ name: 'filter 2', start: 1, end: 5 }),
// ]))
