/* Set the width of the side navigation to 250px */

var opended = false
function openNav() {
    document.getElementById("snav").style.width = "100%";
    document.getElementById("openbtn").style.visibility = "hidden";
    document.getElementById("closebtn").style.visibility = "visible";
    jQuery('.header_left').css('background-color', 'white');
    jQuery('.header_left a').css('color', 'black');
    jQuery('#header_frame').css('background-color', 'white');
    jQuery('.headrCtr').css('background-color', 'white');
    jQuery('#logo').css('filter', ' invert(0%)');
opended=true
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("snav").style.width = "0";
    document.getElementById("openbtn").style.visibility = "visible";
    document.getElementById("closebtn").style.visibility = "hidden";
    opended=false

}



//  color = "#323232";
color = "local";
jQuery(window).on('scroll', function () {
    if(!opended)
    {

        if (jQuery(window).scrollTop() > 50) {
            jQuery('#header_frame').css('background-color', 'white');
            jQuery('.headrCtr').css('background-color', 'white');
            
            jQuery('.header_left').css('background-color', 'white');
            jQuery('.header_left a').css('color', 'black');
            jQuery('#logo').css('filter', ' invert(0%)');
            
        } else {
            jQuery('#header_frame').css('background', color);
            jQuery('.headrCtr').css('background', color);
            jQuery('.header_left').css('background', color);
            jQuery('.header_left a').css('color', 'white');
            jQuery('#logo').css('filter', ' invert(100%)');
        }
    }
});


let seconds = 0;
let timer = setInterval(function () {
    seconds++;
    console.log(seconds);
    if (seconds == 8) {
        document.getElementById("myname").style.display = "none";
        document.getElementById("jobtitle").style.display = "inline-block";

    }
    else if (seconds == 16) {
        document.getElementById("jobtitle").style.display = "none";
        document.getElementById("myname").style.display = "inline-block";
        seconds = 0
    }
}, 1000); //

// timer ?