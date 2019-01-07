describe('Wrapper', () => {
  it('should wrap', () => {
    expect("word\nword").toEqual(wrap("word word", 4));
    expect("a dog").toEqual(wrap("a dog", 5));
  });

  const wrap = (s: string, width: number): string => {
    return (s.length > width) ? s.replace(" ", "\n") : s;
  }
});
