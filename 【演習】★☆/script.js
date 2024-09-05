//問1
for(var i = 0; i < 5; i++){
    document.write("★");
}

document.write("<br><br>");

//問2
for(var i = 0; i < 2; i++){
    for(var a = 0; a < 3; a++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br>");

//問3
for(var i = 0; i < 2; i++){
    for(var a = 0; a < 5; a++){
        document.write("☆");
    }
    document.write("<br>");
}

document.write("<br>");

//問4
for(var i = 0; i < 4; i++){
    for(var a = 0; a < 5; a++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br>");

//問5
for(var i = 0; i < 4; i++){
    for(var a = 0; a < 3; a++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br>");

//問6
for(var i = 0; i < 3; i++){
    for(var a = 0; a < 3; a++){
    　　if(a % 2 != 1){
        　  document.write("★");
        } else {
        　  document.write("☆");
        }
    }
    document.write("<br>");
}

document.write("<br>");

//問7
for(var i = 0; i < 4; i++){
    for(var a = 0; a < 5; a++){
        if(a % 2 == 0){
            document.write("★");
        }　else {
            document.write("☆");
        }
    }
    document.write("<br>");
}

document.write("<br>");

//問8
for(var i = 0; i < 5; i++){
    for(var a = 0; a <= i; a++){
        document.write("★");
    }
    document.write("<br>");
}