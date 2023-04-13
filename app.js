/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("snav").style.width = "100%";
    document.getElementById("openbtn").style.visibility = "hidden";
    document.getElementById("closebtn").style.visibility = "visible";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("snav").style.width = "0";
    document.getElementById("openbtn").style.visibility = "visible";
    document.getElementById("closebtn").style.visibility = "hidden";

}




jQuery(window).on('scroll', function () {
    if (jQuery(window).scrollTop() > 50) {
        jQuery('#header_frame').css('background-color', 'white');
        jQuery('.headrCtr').css('background-color', 'white');
        
        jQuery('.header_left').css('background-color', 'white');
        jQuery('.header_left a').css('color', 'black');
        jQuery('#logo').css('filter', ' invert(0%)');

    } else {
        jQuery('#header_frame').css('background-color', '#323232');
        jQuery('.headrCtr').css('background-color', '#323232');
        jQuery('.header_left').css('background-color', '#323232');
        jQuery('.header_left a').css('color', 'white');
        jQuery('#logo').css('filter', ' invert(100%)');
    }
});
