/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function load_secList() {
    let list = $id("sec-list"), sects = document.getElementsByClassName("main-section");
    var i = 0;
    for (i = 0; i < sects; i++) {

    }

}
function change_color() {

}
function set_title() {
    let title = document.getElementById("title");//$id("title");
    let name = document.title;
    title.innerHTML = name;
}
$(document).ready((evt) => {
    // title
    set_title();
    //Section List

    // color
    let colors = document.getElementsByClassName("change-color");
    for (var i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
});

