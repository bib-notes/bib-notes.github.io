
function get_bible() {

}
const search = () => {
    let selection = document.getElementById("bk_ver");
//    let book = selection.value;
//   alert("Selected "+book);
};
const clear = () => {
    $id("bk_ver").value = null;
};
const getBk = () => {
    let sel = $id("bk_ver");
    let version = sel.value;
    if (version==="null"){
//        alert("ple")
    }else{
        
    }
};
$(document).ready((evt) => {
    $id("search-btn").setAttribute("onclick", "search();");
    $id("clear-btn").setAttribute("onclick", "clear();");
    $id("bk_ver").setAttribute("onchange", "getBk();");
});