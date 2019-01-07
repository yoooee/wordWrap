describe('Wrapper', () => {
  it('should wrap', () => {
    expect('').toEqual(wrap(null, 1));
  });

  const wrap = (s: string, width: number): string => {
    return '';
  }
});
