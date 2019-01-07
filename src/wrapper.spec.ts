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
    assertWraps('x x', 1, 'x\nx');
    assertWraps('x xx', 3, 'x\nxx');
    assertWraps('four score and seven years ago our fathers brought forth upon this continent', 7, 'four\nscore\nand\nseven\nyears\nago our\nfathers\nbrought\nforth\nupon\nthis\ncontine\nnt');
  });

  const wrap = (s: string, width: number): string => {
    if (s === null)
      return '';
    if (s.length <= width)
      return s;
    else {
      let breakPoint: number = s.lastIndexOf(' ', width);
      if (breakPoint == -1)
        breakPoint = width;
      return s.substring(0, breakPoint) + '\n' + wrap(s.substring(breakPoint).trim(), width);
}

  }
});
