var form = document.getElementById('form');
var comment = document.getElementById("comment-log");
var get = document.getElementById("get-log");
// var save = document.getElementById("save");
var cencel = document.getElementById("cencel");

// inputText() : save 박스에 onclick할 함수

form.addEventListener('submit', function(e){

    e.preventDefault();
    var msg = get.value;

    if(msg){
        comment.textContent = msg;
    }else{

    }
})