


var answer = "coconut"



//.....................................................

var container = document.getElementsByClassName("ansDashes")[0];

var dashHtml='';
for (i in answer){
    dashHtml +="<input type='text'  class='letter' maxlength='1'></input>"
}
container.innerHTML = dashHtml;
// move curser through each letter

container.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
     
    // backspace
     else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

var getAnswer= ()=>{
    var lettersDiv = container.childNodes;
    var answer = '';
    for(i in lettersDiv){
        if(lettersDiv[i].value){
            answer += lettersDiv[i].value;
        }        
    }
    console.log(answer);
    return answer;
}

checkAnswer = ()=>{
    if(answer === getAnswer()){
        alert('correct answer');
    }else{
        alert('wrong"answer');
    }
}