/**
    * @description      : 
    * @author           : x
    * @group            : 
    * @created          : 09/01/2024 - 18:32:43
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/01/2024
    * - Author          : x
    * - Modification    : 
**/


const element_tags = {
    btn: "BUTTON",
    sect: "SECTION"
}
$(document).ready((evt) => {
    $("#content section").each(function (num, element) {

    });
    $id("nav-list").setAttribute("data-toggle", "off");
    $(".sec-btn").each(function (num, e) {
        if (e instanceof Element) {
            let x = e.getAttribute("data-link");
            console.log(x);
            if (e.tagName.toUpperCase == element_tags.btn) {
                console.log(e.getAttribute("data-link"));
            }
            e.setAttribute("onclick", "changeSection('" + x + "');");
        }

    });
    $id("nav-toggle").setAttribute("onclick", "toggle_display('nav-list');");

    // $("#nav-toggle").click(toggle_display("nav-box"));

});