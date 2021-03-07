import { filterNumbers } from './6-filter-numbers'

describe('6-filter-numbers', () => {
  it('should remove all numbers larger than the second argument', () => {
    const array = [1, 20, 25, 34, 99]
    const largetThan = 25
    expect(filterNumbers(array, largetThan)).toEqual([1, 20, 25])
  })
})
