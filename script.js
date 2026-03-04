console.log("Script started")

function changeStyle(){
    console.log("click");

    //get p element
    let p = document.getElementById("text");
    p.innerText = "The text has been changed";
    p.style.color = "red";
    p.style.fontSize = "100px";
    p.style.border = "9px dotted purple";
}

function resetStyle(){
    console.log("click");
    document.getElementById("text")
    p.innerText = "This is some sample text";
    p.style.color = "";
    p.style.fontSize = "";
    p.style.border = "";
}