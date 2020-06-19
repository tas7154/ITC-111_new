function changeDivLeft(lnk){
    var lnkClicked = lnk;
    document.getElementById('divLeft').innerHTML = "<a href='#' onclick='changeDivRight("+"\"link1\""+")'>Link 1a</a>"+
                                                    "<br>"+
                                                    "<a href='#' onclick='changeDivRight("+"\"link2\""+")'>Link 1b</a>";          
}
function changeDivRight(txt){
    if(txt == 'link1') {
        document.getElementById('heading').innerHTML = "ClsEx_";
        document.getElementById('divRight').innerHTML = "Content from Link 1a";
    } else if (txt == 'link2') {
        document.getElementById('divRight').innerHTML = 'Content from Link 1b';
    } else {
        document.getElementById('heading').innerHTML = "HTML, CSS & JavaScript";
        document.getElementById('divRight').innerHTML = 'Content loaded when default link is clicked';
    }
}  


// switch(txt){
//     case 'clsEx':
//         document.getElementById('heading').innerHTML = "ClassEx_";
//         document.getElementById('divRight').innerHTML = "Content loaded when the Class Ex Link 1a is clicked";
//         break;
//     case 'assgn':
//         document.getElementById('heading').innerHTML = "Assignment_";
//         document.getElementById('divRight').innerHTML = 'Content loaded when the Assignments Link 1b is clicked';
//         break;
//     case 'resrc':
//         document.getElementById('heading').innerHTML = "Resources";
//         document.getElementById('divRight').innerHTML = 'Content loaded when the Resource link is clicked';
//         break;
//     case 'home':
//         document.getElementById('heading').innerHTML = "Intro to Programming <br>w/HTML, CSS & JavaScript";
//         document.getElementById('divRight').innerHTML = 'Content for the Home Link';
//         break;
//     default:
//         document.getElementById('heading').innerHTML = "HTML, CSS & JavaScript";
//         document.getElementById('divRight').innerHTML = 'Content loaded by default is clicked';
// }



// document.getElementById('divLeft').innerHTML = "<a href='#' onclick='changeDivRight("+"\""+lnk+"\""+")'>Link 1a</a>"+
//                                                     "<br>"+
//                                                     "<a href='#' onclick='changeDivRight("+"\""+lnk+"\""+")'>Link 1b</a>";   