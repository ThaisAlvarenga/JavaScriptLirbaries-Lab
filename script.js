$(document).on('ready', function()
{
    $(function() {
        $(window).scroll(function () {

            //changes obj of lihe to a circle
            if ($(window).scrollTop() > 800) {
                $('.obj').addClass('circle');
            }
            
            //removes the class so it comes back to the original obj
            else {
                $('.obj').removeClass('circle');
            }
        });
    })
    

})
