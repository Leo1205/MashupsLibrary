tau.mashups
	.addDependency("libs/jquery/jquery")
	.addMashup(function(config) {

        function searchifyTags() {
            $('#main').unbind('DOMSubtreeModified',searchifyTags);
            $('li[rel="tag"]:not(".search-linked")').each(function() {
                $(this).addClass('search-linked').find('span:eq(0)').html('<a href="{0}/Search/Search.aspx?SearchString=tag%253a{1}">{1}</a>'.f(
                    appHostAndPath, $(this).find('span:eq(0)').html()));
            });
            $('#main').bind('DOMSubtreeModified',searchifyTags);
        }

        $('#main').bind('DOMSubtreeModified', searchifyTags);
        $(document).ready(searchifyTags);
    }
);

/* my new favorite proto function */
String.prototype.f = function() {
    var s = this, i = arguments.length;
    while (i--)
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    return s;
};

