// Put a message at the top of the Summon Search Results (true = on, false = off)
var showAlert = true;

angular.module('summonApp.directives').directive("resultsFeed",
function() {
    return {
        link:  function (scope, iElement) {
            if (showAlert)
                iElement
                    .find('ul.list-unstyled')
                    .prepend('<div id="uwlfeedback" style="color: #a94442;background-color: #f2dede;border-color: #ebccd1;padding: 15px;margin-bottom: 20px;border: 1px solid transparent;border-radius: 4px;">Need help referencing? Log in to <a href="https://shibboleth2sp.pm.semcs.net/Shibboleth.sso/Login?entityID=https%3A%2F%2Fidp.uwl.ac.uk%2Fidp%2Fshibboleth&target=https%3A%2F%2Fshibboleth2sp.pm.semcs.net%2Fshib%3Fdest%3Dhttp%253A%252F%252Fwww.citethemrightonline.com%252FShibValidate">Cite Them Right</a></div>');
                
        }
    }
});