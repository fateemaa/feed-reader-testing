/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against application.
 */

/*  placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* first test- it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* 
         * A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('urls are defined', function(){
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.constructor).toBe(String);
                expect(feed.url.length).not.toBe(0);
            }
         });
        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined'), function(){
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.constructor).toBe(String);
                expect(feed.name.length).not.toBe(0);
            }
         }
    });


    /* A new test suite named "The menu" */
describe('The menu', function() {

    /* A test that ensures the menu element is
    * hidden by default. 
    */
    it('menu element is hidden', function(){
        expect($('body').hasClass('menu-hidden')).toEqual(true);
    });
    /* A test that ensures the menu changes
    * visibility when the menu icon is clicked.
    */
    it('toggles visibility when clicked', function(){
        let menuIcon=$('.menu-icon-link');
        //show menu
        menuIcon.click();
        expect($('body').hasClass('menu-hidden')).toBe(false);
        //hide menu
        menuIcon.click();
        expect($('body').hasClass('menu-hidden')).toBe(true);
    });
});
/* A new test suite named "Initial Entries" */
describe('Initial Entries', function(){
    /* A test that ensures when the loadFeed
    * function is called and completes its work, there is at least
    * a single .entry element within the .feed container.
    */
    beforeEach(function(done){
        loadFeed(0,done);
    });
    it('has entries in feed container', function(){
        expect($('.feed .entry').length).toBeGreaterThan(0);
    });

});

/* A new test suite named "New Feed Selection" */
describe('New Feed Selection', function(){
    /* A test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
     */
     let firstFeed, secondFeed;
     beforeEach(function(done){
        loadFeed(3,function(){
            firstFeed=document.querySelector('div.feed').innerHTML;
            loadFeed(2,function(){
                secondFeed=document.querySelector('div.feed').innerHTML;
                done();
            });
        });
     });

     it('is different from second',function(){
        expect(firstFeed).not.toBe(secondFeed);
     });

});
        
}());
