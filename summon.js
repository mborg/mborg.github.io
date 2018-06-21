// Put a message at the top of the Summon Search Results (true = on, false = off)
var showAlert = true;

angular.module('summonApp.directives').directive("resultsFeed",
function() {
    return {
        link:  function (scope, iElement) {
            if (showAlert)
                iElement
                    .find('ul.list-unstyled')
                    .prepend('<div id="hvhlmessage" style="color: #a94442;background-color: #f2dede;border-color: #ebccd1;padding: 15px;margin-bottom: 20px;border: 1px solid transparent;border-radius: 4px;">You can enter text here.<a href="https://google.co.uk">And this can be a link.</a></div>');
                
        }
    }
});
