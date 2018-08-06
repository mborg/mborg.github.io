// Put a message at the top of the Summon Search Results (true = on, false = off)
var showAlert = true;

angular.module('summonApp.directives').directive("resultsFeed",
function() {
    return {
        link:  function (scope, iElement) {
            if (showAlert)
                iElement
                    .find('ul.list-unstyled')
                    .prepend('<div id="hvhlmessage" style="color: #a94442;background-color: #f2dede;border-color: #ebccd1;padding: 15px;margin-bottom: 20px;border: 1px solid transparent;border-radius: 4px;">You can enter text here.<a href="https://google.co.uk"> And this can be a link.</a></div>');
                
        }
    }
});

angular.module('summonApp.directives')
.service("facetStateSaverService", ["storeService", function (storeService) {
    this.collapsed = storeService.bucket("collapsedFacets");
}])
.directive("facetField",
["facetsService", "facetStateSaverService", function(facetService, facetState) {
    return {
        link:  function (scope) {
            var facet = scope.facet;
            var shouldBeCollapsed = facetState.collapsed.get(facet.label);
 
            scope.$watch("facet.collapsed", function (nval, oval) {
                if (nval == oval) return;
                facetState.collapsed.set(facet.label, nval);
            });
 
            if (shouldBeCollapsed != null) {
                if (shouldBeCollapsed != facet.collapsed)
                    facetService.toggleCollapsed(facet);
            } else {
                // library wishes to expand Library facet by default
                if (facet.label == "Library" && facet.collapsed)
                    facetService.toggleCollapsed(facet);
            }
 
        }
    }
}]);
