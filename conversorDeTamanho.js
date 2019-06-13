window.onload = boot;

const MM = 1,
    CM = 2,
    DM = 3,
    M = 4, 
    DAM = 5,
    HM = 6,
    KM = 7;

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
        oConversorTempo,oConversorTamanho,oConversorASCII,oReverseText,oReverseWord
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
    oSubmeter.onclick = conversorDeTamanho;


} //boot

function paginaPrincipal(){
    document.location.href = "principal.html";
    return false;
} //paginaPrincipal

function paginaDoConversorBinario(){
    document.location.href = "conversorDeBinario.html";
    return false;
} //paginaDoConversorBinario

function paginaDoConversorDePeso(){
    document.location.href = "conversorDePeso.html";
    return false;
} //paginaDoConversorDePeso

function paginaDoConversorDeTempo(){
    document.location.href = "conversorDeTempo.html";
    return false;
} //paginaDoConversorDeTempo

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


function conversorDeTamanho(){

    var inputPeso = parseFloat(oTextInput.value);
    var pesoMM,pesoFinal;

    switch ( parseInt(oDe.value) ){
        case MM:
                pesoMM=inputPeso;
            break;
        case CM:
                pesoMM=inputPeso*10;
            break;
        case DM:
                 pesoMM=inputPeso*100;  
            break;
        case M:
                 pesoMM=inputPeso*1000;  
            break;
        case DAM:
                pesoMM=inputPeso*10000;  
            break;
        case HM:
                pesoMM=inputPeso*100000;  
            break;
        case KM:
                pesoMM=inputPeso*1000000;  
            break;

    }

    switch ( parseInt(oPara.value) ){
        case MM:
                pesoFinal=pesoMM;
            break;
        case CM:
                pesoFinal=pesoMM/10;
            break;
        case DM:
                pesoFinal=pesoMM/100;  
            break;
        case M:
                pesoFinal=pesoMM/1000;  
            break;
        case DAM:
                pesoFinal=pesoMM/10000;  
            break;
        case HM:
                pesoFinal=pesoMM/100000;  
            break;
        case KM:
                pesoFinal=pesoMM/1000000;  
            break;

    }

    oTextResposta.innerHTML=pesoFinal;
}
