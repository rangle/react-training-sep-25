function circleArea(r) {
  if (typeof r === 'number') {
    return Math.PI * r * r;
  }

  return 0;
}

// describing what we are testing
//
// what should it do
//
// assert if it was successfull
describe('circleArea', () => {
  it('should calculate the area of a circle', () => {
    const result = circleArea(2);
    expect(result).toBe(12.566370614359172);
  });

  it('should only work for numbers', () => {
    const result = circleArea('2');
    expect(result).toBe(0);
  });
});
