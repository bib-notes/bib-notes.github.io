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
/**
 * toggles audio
 * @param {string} audio
 * @returns {undefined}
 */
const toggle_audio=(audio)=>{
    let x = "audio#"+audio;
      let audio_list = document.getElementsByTagName("audio");
   for (var i=0; i< audio_list.length;i++){
       let a = audio_list[i];
       if (a.id === audio){
           //check if audio is playing.
       }else{
           // if audio is playing, turn it off.
       }
   }
};
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