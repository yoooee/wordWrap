describe('Wrapper', () => {
  it('should wrap', () => {
    expect("word\nword").toEqual(wrap("word word", 4));
  });

  const wrap = (s: string, width: number): string => {
    return s.replace(" ", "\n");
  }
});
