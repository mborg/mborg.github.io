// We can insert a message at the top of the Summon Search Results (true = on, false = off)
var showAlert = true;

angular.module('summonApp.directives').directive("resultsFeed",
function() {
    return {
        link:  function (scope, iElement) {
            if (showAlert)
                iElement
                    .find('ul.list-unstyled')
                    .prepend('<div id="custommessage" style="color: #a94442;background-color: #f2dede;border-color: #ebccd1;padding: 15px;margin-bottom: 20px;border: 1px solid transparent;border-radius: 4px;">Hey. This can be whatever we want. And we can include a <a href="https://fse.summon.serialssolutions.com">link.</a></div>');
                
        }
    }
});
