window.onload = boot;

const MG = 1,
    CG = 2,
    DG = 3,
    G = 4, 
    DAG = 5,
    HG = 6,
    KG = 7;

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
        ,oAreaConversor,oConversorPeso,oSubmeter,
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
    oSubmeter.onclick = conversorDePeso;


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


function conversorDePeso(){

    var inputPeso = parseFloat(oTextInput.value);
    var pesoMG,pesoFinal;

    switch ( parseInt(oDe.value) ){
        case MG:
                pesoMG=inputPeso;
            break;
        case CG:
                pesoMG=inputPeso*10;
            break;
        case DG:
                 pesoMG=inputPeso*100;  
            break;
        case G:
                 pesoMG=inputPeso*1000;  
            break;
        case DAG:
                pesoMG=inputPeso*10000;  
            break;
        case HG:
                pesoMG=inputPeso*100000;  
            break;
        case KG:
                pesoMG=inputPeso*1000000;  
            break;

    }

    switch ( parseInt(oPara.value) ){
        case MG:
                pesoFinal=pesoMG;
            break;
        case CG:
                pesoFinal=pesoMG/10;
            break;
        case DG:
                pesoFinal=pesoMG/100;  
            break;
        case G:
                pesoFinal=pesoMG/1000;  
            break;
        case DAG:
                pesoFinal=pesoMG/10000;  
            break;
        case HG:
                pesoFinal=pesoMG/100000;  
            break;
        case KG:
                pesoFinal=pesoMG/1000000;  
            break;

    }

    oTextResposta.innerHTML=pesoFinal;
}
