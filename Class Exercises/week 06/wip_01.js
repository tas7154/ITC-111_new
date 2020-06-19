function changeDivLeft(lnk){
    var lnkClicked = lnk;
    document.getElementById('divLeft').innerHTML = "<a href='#' onclick='changeDivRight(\""+"link1"+"\")'>"+"Link 1a"+"</a>"+
                                                    "<br>"+
                                                    "<a href='#' onclick='changeDivRight(\""+"link2"+"\")'>"+"Link 1b"+"</a>";          
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

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    
}