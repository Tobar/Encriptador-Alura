let a = ai;
let e = enter;
let i = imes;
let o = ober;
let u = ufat;


$("#boton_cifrar").click(function () {
    let text = $("#text").val();
    let encripted = text.replace(/a/g, a).replace(/e/g, e).replace(/i/g, i).replace(/o/g, o).replace(/u/g, u);
    $("#text").val(encripted);
});

$("#boton_descifrar").click(function () {
    let text = $("#text").val();
    let decripted = text.replace(/ai/g, a).replace(/enter/g, e).replace(/imes/g, i).replace(/ober/g, o).replace(/ufat/g, u);
    $("#text").val(decripted);
});

$("#btn-clear").click(function () {
    $("#text").val("");
});

function convert() {
    let text = $.trim($("#text").val());
    let divided = text.split(" ");
     let encript = [];
    for (let i = 0; i < divided.length; i++) {
        let word = divided[i];
        let encripted = word.replace(/a/g, a).replace(/e/g, e).replace(/i/g, i).replace(/o/g, o).replace(/u/g, u);
        encript.push(encripted);
    }

    if (!encript.length) {
        $("#text").val("");
        return;
    }else{
       
        for(let i=0; i<encript.length; i++){
            $("#text").val(encript[i]);

            if (divided[i] != "a" || divided[i] != "e" || divided[i] != "i" || divided[i] != "o" || divided[i] != "u") {
                $("#text").val(divided[i]);
            }
            else if(divided[i] == "a"){
                encript.push("ai")
            }
            else if(divided[i] == "e"){
                encript.push("enter")
            } 
            else if(divided[i] == "i"){
                encript.push("imes")
            }
            else if(divided[i] == "o"){
                encript.push("ober")
            }
            else if(divided[i] == "u"){
                encript.push("ufat")
            }
            else if(divided[i] == " "){
                encript.push(" ")
            }
        }
        console.log(encript);

        var result = encript.join(" ");
        $("#text").val(result);
    }
}
//Copy text
function copytext() {
    var copyText = document.getElementById("text");

    $("#text").select();    
    document.execCommand("copy");
    console.log("Copied the text: " + copyText.value);
    $("#text").val("");
}

//desencriptar

$("#btn-desencriptar").click(function () {
    decodificar();
});

function decodificar() {
    let text = $.trim($("#text").val());
    let divided = text.split(" ");
    let decript = [];
    for (let i = 0; i < divided.length; i++) {
        let word = divided[i];
        let decripted = word.replace(/ai/g, a).replace(/enter/g, e).replace(/imes/g, i).replace(/ober/g, o).replace(/ufat/g, u);
        decript.push(decripted);
    }

    if (!decript.length) {
        $("#text").val("");
        return;
    }else{
        var result = decript.join(" ");
        $("#text").val(result); 
    }   
}