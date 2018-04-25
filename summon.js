<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-116920622-1', 'auto');
ga('send', 'pageview');
</script>
<!-- End Google Analytics -->


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
