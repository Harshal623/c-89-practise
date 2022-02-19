var score = 0
function update(){
    score += 1
    document.getElementById("score").innerHTML = "score:"+score
}
function save(){
    localStorage.setItem("abc", score)
}
function next(){
    window.location = "activity_2.html"
}