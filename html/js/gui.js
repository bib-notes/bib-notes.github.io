/**
 * @file gui
 * @fileoverview contains gui functions
 *
 * 
 */

/**
 * 
 *
 * @param {string} iframe
 */
const clear_frame = function (iframe = "") {
    $id(iframe).innerHTML = "";
}
const add = function (iframe = "", content) {

}

const gui = {
    clear_iframe: function (id = "") {
        if (id === "") {
            console.error("Missing Iframe id.");
        } else {
            $id(id).innerHTML = "";
        }
    },
    add: function (){
        
    }

};