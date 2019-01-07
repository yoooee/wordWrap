describe('Wrapper', () => {
  const assertWraps = (s: string, width: number, expected: string) => {
    expect(expected).toEqual(wrap(s, width));
  }

  it('should wrap', () => {
    assertWraps(null, 1, '');
    assertWraps('', 1, '');
    assertWraps('x', 1, 'x');
  });

  const wrap = (s: string, width: number): string => {
    if (s === null)
      return '';
    return s;
  }
});
