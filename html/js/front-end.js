/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function load_secList() {
    let list = $id("sec-list"), sects = document.getElementsByClassName("main-section");
    var i = 0;
    var btn = null;
    var sect = null, link = "";//for name
    var text = "";
//    console.log(sects);
    for (i = 0; i < sects.length; i++) {
        btn = document.createElement("button");
        sect = sects[i];
//        console.log(sect);
        link = sect.id;
        text = "_" + link;
        // btn.class = "sec-btn";
        btn.setAttribute("class", "sec-btn");
        btn.setAttribute("data-link", link);

        if (sect.getAttribute("data-toggle") === "on") {
            btn.setAttribute("data-active","");
        } 
        btn.innerHTML = text;
        btn.setAttribute("onclick", "changeSection('" + link + "');");
        list.appendChild(btn);
//        console.log(i);
    }

}
function set_theme(color) {
    if (color === "blue" || color === "green" || color === "red") {
        $id("screen").setAttribute("data-color", color);
    }
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
    load_secList();
    // color
    let colors = document.getElementsByClassName("change-color");
    for (var i = 0; i < colors.length; i++) {
        // console.log(colors[i]);
        let color_btn = colors[i];
        let val = color_btn.getAttribute("value");
        color_btn.setAttribute("onclick","set_theme('"+val+"');");
    }
});

