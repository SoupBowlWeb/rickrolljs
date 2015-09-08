$.fn.extend({

    rickroll: function(config) {
        var keyword = (config === undefined) || (config.keyword === undefined) ?
            'rick' :
            config.keyword.toLowerCase();
        var currentIndex = 0;

        $('body').keypress(function(e)
        {
            currentIndex = (String.fromCharCode(e.keyCode).toLowerCase() === keyword[currentIndex]) ?
                currentIndex + 1 :
                0;

            if(currentIndex >= keyword.length) {
                window.location = 'http://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1';
            }
        });
    },
})