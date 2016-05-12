describe('DuckDuckGo search', function() {
    
    var exceptedTitle = 'WebdriverIO (Software) at DuckDuckGo';
    
    it('searches for WebdriverIO', function() {
        browser.url('https://duckduckgo.com/');
        browser.setValue('#search_form_input_homepage', 'WebdriverIO');
        browser.click('#search_button_homepage');
    });
    
    it('The title shoud be ' + exceptedTitle, function() {
        var actualTitle = browser.getTitle();
        expect(actualTitle).toBe(exceptedTitle);
    });
    
    xit('Shoud fail', function() {
        var title = browser.getTitle();
        expect(title).toBe('Wrong title');
    });
    
});