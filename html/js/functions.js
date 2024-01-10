const $id = function (id) {
    return document.getElementById(id);
}
/**
 * 
 * @param {*} selector 
 * @returns 
 */
const $sel = function (selector) {
    return document.querySelector(selector);
}
/**
 *  changes section
 * @param {string} id 
 */
function changeSection(id) {
    let sections = document.getElementsByTagName("section");
    var section = null;
    let btn = $('.sect-btn[data-link="' + id + '"]');
    let btns = document.getElementsByClassName('sec-btn');
    var i;
    for (i = 0; i < sections.length; i++) {
        if (sections[i].id == id) {
            sections[i].setAttribute("data-toggle", "on");
        } else {
            sections[i].setAttribute("data-toggle", "off");
        }
    }
    for (i = 0; i < btns.length; i++) {
        if (btns[i].getAttribute("data-link") == id) {
            btns[i].setAttribute("data-active", "");
        } else {
            btns[i].removeAttribute("data-active");
        }
    }
}
/**
 * @function toggle_display
 * @description toggles the display based on the 
 * @param {string} id element Id
 */
function toggle_display(id) {
    let elem = $id(id);
    let attr = elem.getAttribute("data-toggle");
    if (attr === "on") {
        elem.setAttribute("data-toggle", "off");
    } else {
        elem.setAttribute("data-toggle", "on");
    }
}
