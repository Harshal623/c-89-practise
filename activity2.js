function getscore(){
    score = localStorage.getItem("abc")
    document.getElementById("score").innerHTML = "score:"+score
}
function back(){
    window.location = "activity_1.html"
}