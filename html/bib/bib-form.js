/**
    * @description      : 
    * @author           : eVmPr
    * @group            : 
    * @created          : 12/01/2024 - 16:09:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/01/2024
    * - Author          : eVmPr
    * - Modification    : 
**/

function get_bible() {

}
/**
 * 
 * @returns {undefined}
 */
const search = () => {
    let selection = document.getElementById("ver");
    let version = selection.value;
    
    
};
/**
 * 
 * @returns {undefined}
 */
const clear = () => {
    $id("bk_ver").value = null;
};
const getBk = () => {
    let sel = $id("ver");
    let version = sel.value;
    if (version === "none") {
        //        alert("ple")
    } else {
        $id("book").removeAttribute("disabled");
    }
};
const changever = () => {
    let sel = $id("ver");
    let version = sel.value;
    if (version === "none") {
        //        alert("ple")
    } else {
        $id("book").removeAttribute("disabled");
    }
};
$(document).ready((evt) => {
    $id("search-btn").setAttribute("onclick", "search();");
    $id("clear-btn").setAttribute("onclick", "clear();");
    $id("ver").setAttribute("onchange", "getBk();");
    $("#ver").change(function(e){
        // console.log(e);
        if ($("selection#ver").val === "none"){
            $id("book").setAttribute("disabled","");
            $id("_version").setAttribute("value","none");
        }else{
            let val = $("#ver").value;
            $id("_version").setAttribute("value",val);
            $id("book").removeAttribute("disabled");
        }
    });

});