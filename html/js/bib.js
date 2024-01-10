/**
    * @description      : 
    * @author           : x
    * @group            : 
    * @created          : 09/01/2024 - 18:28:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/01/2024
    * - Author          : x
    * - Modification    : 
**/
/**
 * @file bib.js
 */

const bks = {
    main: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"],
    apoc: [],
}
const books = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians",
"1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];

// "book " + id + " does not exist."
// const get_books =
const load_data = function (_type = "", data = []) {

}
const bib_mod = {
get_books :  function (_type = "") {
    if (_type === "main") {
        return bks.main;
    }
},
get_book: function (id){
    var bk = null;
    if (id===""){
        console.error("book " + id + " does not exist.");
    }else{

    }
},
/**
 * 
 * @param {string} _num chapter number
 */
get_chap : function(_num){

}

}

function add_books(){
    let sel = document.getElementById("book");
    var opt = null,val="",code, bk;
    for (var i=0; i < books.length; i++){
        // console.log(i);
        bk = books[i];
        code = books[i].substring(0,3);
        for (var j=0;j<code.length;j++){
            let char = code.charAt(j);
            if (char === ' '){
                //remove space
                code = books[i].charAt(0)+books[i].substring(2,5);
            }
        }
        opt = document.createElement("option");
        val = code.toUpperCase();
        opt.id = val;//  code.toUpperCase;
        opt.value =  val;//code.toUpperCase;
        opt.innerText = bk;// books[i];
        // opt.parentElement = document.getElementById("book");
        sel.appendChild(opt);
       
        // sel.innerHTML+= '<option id="' +code.toLocaleUpperCase + '" value+' + '>'+ '</option>';
    }
}