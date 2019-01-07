describe('Wrapper', () => {
  const assertWraps = (s: string, width: number, expected: string) => {
    expect(expected).toEqual(wrap(s, width));
  }

  it('should wrap', () => {
    assertWraps(null, 1, '');
    assertWraps('', 1, '');
    assertWraps('x', 1, 'x');
    assertWraps('xx', 1, 'x\nx');
    assertWraps('xxx', 1, 'x\nx\nx');
  });

  const wrap = (s: string, width: number): string => {
    if (s === null)
      return '';
    if (s.length <= width)
      return s;
    else
      return s.substring(0, width) + '\n' + wrap(s.substring(width), width);
  }
});
