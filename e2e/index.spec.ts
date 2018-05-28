import { browser, $, $$ } from 'protractor';

describe('homepage', () => {
  it('shows header', async () => {
    browser.get('/');

    const h1 = await $('h1');
    expect(h1.getText()).toEqual('Welcome');
  });
  //it('shows the welcome message', () => {
  //browser.get('/');
  //let h1 = $('h1');
  //h1.getText().then((text) => {
  //console.log('.....', text);
  //})
  //console.log('welcome message', $('h1').getText());
  //})
});
