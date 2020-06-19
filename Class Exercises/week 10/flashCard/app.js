// Word list arrays

// English Lists
var greetings_En = ["Hello","How are you?","What\'s up?","Nice to meet you."];
var bodyParts_En = ["head","chest","back","arm","leg"];
var colors_En = ["red","orange","yellow","green","blue","indigo"];

// Swahili Lists
var greetings_Sw = ["Hibari","Hibari gani?","Kuna Nini?","Ni yema kukutana na wewe."];
var bodyParts_Sw = ["kichwa","kifua","mgongo","mkono","mguu"];
var colors_Sw = ["nyekunu","chungwa","manjano","kijani","bluu","bluu ya kati"];

// variable to display current word 
var word = document.getElementById("wrd");

// variable to store the current word
var crrWrd;
// variables to store word lists
var crrLst;
var trgLst;

// variable to store index of word in a list
var ndx;

// variable to store flipped state of a word
var flipped = false;

function init(){
    // set crrLst
    crrLst = greetings_En;
    // set trgLst
    trgLst = greetings_En;
    // set crrWrd
    crrWrd = crrLst[0];
    // set display
    word.innerHTML = crrWrd;
    // set ndx
    ndx = crrLst.indexOf(crrWrd);
    // reset category list to default
    document.getElementById("category").selectedIndex = 0;
    // reset target list values to default
    document.getElementById("target1").selectedIndex = 0;
    document.getElementById("target2").selectedIndex = 0;
}

// Change category control
function chgList(trg){
    switch(trg.value){
        case "greetings":
            crrLst = greetings_En;
            trgLst = greetings_Sw;
            break;
        case "bodyParts":
            crrLst = bodyParts_En;
            trgLst = bodyParts_Sw;
            break;
        case "colors":
            crrLst = colors_En;
            trgLst = colors_Sw;
            break;
    }
    word.innerHTML = crrLst[ndx];
}

function prvWrd() {
    if(ndx > 0){
        ndx--;
    }else{
        ndx = (crrLst.length-1);
    }
    word.innerHTML = crrLst[ndx];
}

function flipWrd() {
    if(flipped){
        word.innerHTML = crrLst[ndx];
        flipped = false;
    }else{
        word.innerHTML = trgLst[ndx];
        flipped = true;
    }
}

function nxtWrd() {
    if(ndx < (crrLst.length-1)){
        ndx++;
    }else{
        ndx = 0;
    }
    word.innerHTML = crrLst[ndx];
}

// this will change the current list based on which option is chosen from
// the drop down list.

function setList(trg){
    switch(trg.id){
        case "target1":
            if(trg.value == "English"){
                crrLst = greetings_En;
            }else{
                crrLst = greetings_Sw;
            }
            break;
        case "target2":
            if(trg.value == "English"){
                trgLst = greetings_En;
            }else{
                trgLst = greetings_Sw;
            }
            break;
    }
}

// This will swap the lists so that the current list becomes the target list and 
// vice versa.

function swapTargets(){
    var trg1 = document.getElementById("target1").value;
    var trg2 = document.getElementById("target2").value;
    var tmpTrg = trg1;
    document.getElementById("target1").value = trg2;
    document.getElementById("target2").value = tmpTrg;

    var tmpLst = crrLst;
    crrLst = trgLst;
    trgLst = tmpLst;

    crrWrd = crrLst[ndx];

    word.innerHTML = crrWrd;

}

document.onload = init();