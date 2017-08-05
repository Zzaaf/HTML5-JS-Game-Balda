// описание добавления слова в форму
function addWord_1() {
    document.getElementById("textArea_1").innerHTML += document.getElementById("inputId_1").value + "\n";
}
function addWord_2() {
    document.getElementById("textArea_2").innerHTML += document.getElementById("inputId_2").value + "\n";
}

// счётчик символов в <textarea>, для подсчёта очков
var myText1 = document.getElementById("textArea_1");
var wordCount1 = document.getElementById("wordCount_1");
myText1.addEventListener("keydown",function(){
    var characters = myText1.value.split('');
    wordCount1.innerText = characters.length;
});

var myText2 = document.getElementById("textArea_2");
var wordCount2 = document.getElementById("wordCount_2");
myText2.addEventListener("keydown",function(){
    var characters = myText2.value.split('');
    wordCount2.innerText = characters.length;
});

// функция Drag and Drop + клонирование
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var cloned = document.getElementById(data).cloneNode();
    ev.target.appendChild(cloned);
}
