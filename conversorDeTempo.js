window.onload = boot;

const MiliSegundos = 1,
    Segundos = 2,
    Minutos = 3,
    Horas = 4, 
    Dias = 5,
    Anos = 6,
    Decadas = 7,
    Seculos = 8,
    Semanas = 9,
    Meses = 10;

var ID_INICIO = "idInicio",
    ID_AREA_MENU = "idAreaMenu",
    ID_CONVERSOR_BINARIO = "idConversorBinario",
    ID_CONVERSOR_TEMPO = "idConversorTempo",
    ID_CONVERSOR_TAMANHO = "idConversorTamanho",
    ID_CONVERSOR_ASCII = "idConversorASCII",
    ID_REVERSE_TEXT = "idReverseText",
    ID_REVERSE_WORD = "idReverseWord",
    ID_CONVERSOR_PESO = "idConversorPeso",

    ID_AREA_CONVERSOR = "idAreaConversor",
    ID_SUBMETER= "idSubmeter",
    
    ID_DE = "idDe",
    ID_TEXT_INPUT = "idTextInput",
    ID_PARA = "idPara",
    ID_TEXT_RESPOSTA = "idTextResposta";


var oInicio,
    oAreaMenu,
    oConversorBinario,
    oConversorTempo,
    oConversorPeso,
    oConversorTamanho,
    oConversorASCII,
    oReverseText,
    oReverseWord,
    oAreaConversor,
    oSubmeter,
    oDe,
    oTextInput,
    oPara,
    oTextResposta;



function boot(){

    oInicio = $(ID_INICIO);
    oAreaMenu = $(ID_AREA_MENU);
    oConversorBinario = $(ID_CONVERSOR_BINARIO);
    oConversorTempo = $(ID_CONVERSOR_TEMPO);
    oConversorPeso = $(ID_CONVERSOR_PESO);
    oConversorTamanho = $(ID_CONVERSOR_TAMANHO);
    oConversorASCII = $(ID_CONVERSOR_ASCII);
    oReverseText = $(ID_REVERSE_TEXT);
    oReverseWord = $(ID_REVERSE_WORD);
    oAreaConversor = $(ID_AREA_CONVERSOR);
    oSubmeter = $(ID_SUBMETER);
    oDe = $(ID_DE);
    oTextInput = $(ID_TEXT_INPUT);
    oPara = $(ID_PARA);
    oTextResposta = $(ID_TEXT_RESPOSTA);

    var aRelevantes = [ oInicio,oAreaMenu,oConversorBinario,
        oConversorTempo,oConversorPeso,oConversorTamanho,oConversorASCII,oReverseText,oReverseWord
        ,oAreaConversor,oSubmeter,
        ,oDe,oTextInput,oPara,oTextResposta
    ];

    var bProblema = !allOK (aRelevantes);

    if (bProblema){
        alert ("Problema(s) com objecto(s)");
        return;
    }

    oInicio.onclick = paginaPrincipal;
    oConversorBinario.onclick = paginaDoConversorBinario;
    oConversorTempo.onclick = paginaDoConversorDeTempo;
    oConversorPeso.onclick = paginaDoConversorDePeso;
    oConversorTamanho.onclick = paginaDoConversorDeTamanho;
    oConversorASCII.onclick = paginaDoConversorDeASCII;
    oReverseText.onclick = paginaDoReverseText;
    oReverseWord.onclick = paginaDoReverseWord;
    oSubmeter.onclick = conversorDeTempo;


} //boot

function paginaPrincipal(){
    document.location.href = "principal.html";
    return false;
} //paginaPrincipal

function paginaDoConversorBinario(){
    document.location.href = "conversorDeBinario.html";
    return false;
} //paginaDoConversorBinario


function paginaDoConversorDeTempo(){
    document.location.href = "conversorDeTempo.html";
    return false;
} //paginaDoConversorDeTempo


function paginaDoConversorDePeso(){
    document.location.href = "conversorDePeso.html";
    return false;
} //paginaDoConversorDePeso

function paginaDoConversorDeTamanho(){
    document.location.href = "conversorDeTamanho.html";
    return false;
} //paginaDoConversorDeTamanho

function paginaDoConversorDeASCII(){
    document.location.href = "conversorDeASCII.html";
    return false;
} //paginaDoConversorDeASCII


function paginaDoReverseText(){
    console.log("foi");
    document.location.href = "ReverseText.html";
    return false;
} //paginaDoReverseText

function paginaDoReverseWord(){
    document.location.href = "ReverseWord.html";
    return false;
} //paginaDoReverseWord


function conversorDeTempo(){

    var inputTempo = parseFloat(oTextInput.value);
    var tempoMS,tempoFinal;

    switch ( parseInt(oDe.value) ){
        case MiliSegundos:
                tempoMS=inputTempo;
            break;
        case Segundos:
                tempoMS=inputTempo*1000;
            break;
        case Minutos:
                 tempoMS=inputTempo*1000*60;  
            break;
        case Horas:
                 tempoMS=inputTempo*1000*60*60;  
            break;
        case Dias:
                tempoMS=inputTempo*1000*60*60*24;  
            break;
        case Semanas:
                tempoMS=inputTempo*1000*60*60*24*7;  
            break;
        case Meses:
                tempoMS=inputTempo*1000*60*60*24*7*30;  
            break;
        case Anos:
                tempoMS=inputTempo*1000*60*60*24*7*30*365;  
            break;
        case Decadas:
                tempoMS=inputTempo*1000*60*60*24*7*30*365*10;  
            break;
        case Seculos:
                tempoMS=inputTempo*1000*60*60*24*7*30*365*10*100;  
            break;

    }

    switch ( parseInt(oPara.value) ){
        case MiliSegundos:
                tempoFinal=tempoMS;
            break;
        case Segundos:
                tempoFinal=tempoMS/1000;
            break;
        case Minutos:
                tempoFinal=tempoMS/1000/60;  
            break;
        case Horas:
                tempoFinal=tempoMS/1000/60/60;  
            break;
        case Dias:
                tempoFinal=tempoMS/1000/60/60/24;  
            break;
        case Semanas:
                tempoFinal=tempoMS/1000/60/60/24/7;  
            break;
        case Meses:
                tempoFinal=tempoMS/1000/60/60/24/7/30;  
            break;
        case Anos:
                tempoFinal=tempoMS/1000/60/60/24/7/30/365;  
            break;
        case Decadas:
                tempoFinal=tempoMS/1000/60/60/24/7/30/365/10;  
            break;
        case Seculos:
                tempoFinal=tempoMS/1000/60/60/24/7/30/365/10/100;  
            break;

    }

    oTextResposta.innerHTML=tempoFinal;
}
