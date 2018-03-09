function libInitPage( ) {

        // OK, WE CAN'T ADD THE EXTRA LINKS IMMEDIATELY (15/OCT/2014)
        setTimeout(function() {

			$('.languageSwitcher').css('display','none');	
                        $('.list-inline').prepend('<li class="ng-scope" ng-repeat="link in links.links" bindonce=""><a class="customColorsSiteLink ng-scope" target="_blank" tabindex="0" ng-if="link.href" ng-href="https://library.herts.ac.uk/Shibboleth.sso/Login?target=https://library.herts.ac.uk/cgi-bin/koha/opac-ill.pl" href="https://library.herts.ac.uk/Shibboleth.sso/Login?target=https://library.herts.ac.uk/cgi-bin/koha/opac-ill.pl"><span class="ng-binding ng-scope" ng-bind-html="link.label" ng-if="!link.image">Request items not held at UH</span></a></li>');
                        $('.list-inline').prepend('<li class="ng-scope" ng-repeat="link in links.links" bindonce=""><a class="customColorsSiteLink ng-scope" target="_blank" tabindex="0" ng-if="link.href" ng-href="https://library.herts.ac.uk/Shibboleth.sso/Login?target=https://library.herts.ac.uk/cgi-bin/koha/opac-user.pl" href="https://library.herts.ac.uk/Shibboleth.sso/Login?target=https://library.herts.ac.uk/cgi-bin/koha/opac-user.pl"><span class="ng-binding ng-scope" ng-bind-html="link.label" ng-if="!link.image">Library Account</span></a></li>');
                        $('.list-inline').prepend('<li class="ng-scope" ng-repeat="link in links.links" bindonce=""><a class="customColorsSiteLink ng-scope" target="_blank" tabindex="0" ng-if="link.href" ng-href="http://www.librarysearch.herts.ac.uk" href="http://www.librarysearch.herts.ac.uk"><span class="ng-binding ng-scope" ng-bind-html="link.label" ng-if="!link.image">Studynet Online Library</span></a></li>');
                        $('.list-inline').prepend('<li class="ng-scope" ng-repeat="link in links.links" bindonce=""><a class="customColorsSiteLink ng-scope" target="_blank" tabindex="0" ng-if="link.href" ng-href="http://libraryadmin.herts.ac.uk/newbooks/" href="http://libraryadmin.herts.ac.uk/newbooks/"><span class="ng-binding ng-scope" ng-bind-html="link.label" ng-if="!link.image">New Books</span></a></li>');
			$('.siteLinks .list-unstyled:eq(1)').prepend('<li ng-repeat="link in links.links" bindonce="" class="ng-scope"><a target="_blank" tabindex="0" ng-if="link.href" ng-href="https://library.herts.ac.uk/Shibboleth.sso/Login?target=https://library.herts.ac.uk/cgi-bin/koha/opac-ill.pl" class="customColorsSiteLink ng-scope" href="https://library.herts.ac.uk/Shibboleth.sso/Login?target=https://library.herts.ac.uk/cgi-bin/koha/opac-ill.pl"><span ng-bind-html="link.label" ng-if="!link.image" class="ng-binding ng-scope">Request items not held at UH</span></a></li>');
			$('.siteLinks .list-unstyled:eq(1)').prepend('<li ng-repeat="link in links.links" bindonce="" class="ng-scope"><a target="_blank" tabindex="0" ng-if="link.href" ng-href="https://library.herts.ac.uk/Shibboleth.sso/Login?target=https://library.herts.ac.uk/cgi-bin/koha/opac-user.pl" class="customColorsSiteLink ng-scope" href="https://library.herts.ac.uk/Shibboleth.sso/Login?target=https://library.herts.ac.uk/cgi-bin/koha/opac-user.pl"><span ng-bind-html="link.label" ng-if="!link.image" class="ng-binding ng-scope">Library Account</span></a></li>');
			$('.siteLinks .list-unstyled:eq(1)').prepend('<li ng-repeat="link in links.links" bindonce="" class="ng-scope"><a target="_blank" tabindex="0" ng-if="link.href" ng-href="http://www.librarysearch.herts.ac.uk" class="customColorsSiteLink ng-scope" href="http://www.librarysearch.herts.ac.uk"><span ng-bind-html="link.label" ng-if="!link.image" class="ng-binding ng-scope">Studynet Online Library</span></a></li>');
			$('.siteLinks .list-unstyled:eq(1)').prepend('<li ng-repeat="link in links.links" bindonce="" class="ng-scope"><a target="_blank" tabindex="0" ng-if="link.href" ng-href="http://libraryadmin.herts.ac.uk/newbooks/" class="customColorsSiteLink ng-scope" href="http://libraryadmin.herts.ac.uk/newbooks/"><span ng-bind-html="link.label" ng-if="!link.image" class="ng-binding ng-scope">New Books</span></a></li>');
        }, 1000);
}



// Put a message at the top of the Summon Search Results (true = on, false = off)
var showAlert = true;

angular.module('summonApp.directives').directive("resultsFeed",
function() {
    return {
        link:  function (scope, iElement) {
            if (showAlert)
                iElement
                    .find('ul.list-unstyled')
                    .prepend('<div id="uwlfeedback" style="color: #a94442;background-color: #f2dede;border-color: #ebccd1;padding: 15px;margin-bottom: 20px;border: 1px solid transparent;border-radius: 4px;">Need help referencing? Log in to <a href="https://shibboleth2sp.pm.semcs.net/Shibboleth.sso/Login?entityID=https%3A%2F%2Fidp.uwl.ac.uk%2Fidp%2Fshibboleth&target=https%3A%2F%2Fshibboleth2sp.pm.semcs.net%2Fshib%3Fdest%3Dhttp%253A%252F%252Fwww.citethemrightonline.com%252FShibValidate">Cite Right</a></div>');
                
        }
    }
});
