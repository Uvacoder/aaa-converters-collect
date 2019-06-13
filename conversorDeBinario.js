window.onload = boot;



var  ID_INICIO = "idInicio",
    ID_AREA_MENU = "idAreaMenu",
    ID_CONVERSOR_BINARIO = "idConversorBinario",
    ID_CONVERSOR_TEMPO = "idConversorTempo",
    ID_CONVERSOR_TAMANHO = "idConversorTamanho",
    ID_CONVERSOR_ASCII = "idConversorASCII",
    ID_REVERSE_TEXT = "idReverseText",
    ID_REVERSE_WORD = "idReverseWord",
    ID_CONVERSOR_PESO = "idConversorPeso",

    ID_AREA_CONVERSOR = "idAreaConversor",
    ID_TEXT_PARA_SER_CONVERTIDO = "idTextParaSerConvertido",
    ID_SUBMETER= "idSubmeter",
    ID_TEXT_CONVERTIDO = "idTextConvertido";


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
    oTextParaSerConvertido,
    oSubmeter,
    oTextConvertido;



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
    oTextParaSerConvertido = $(ID_TEXT_PARA_SER_CONVERTIDO);
    oSubmeter = $(ID_SUBMETER);
    oTextConvertido = $(ID_TEXT_CONVERTIDO);

    var aRelevantes = [ oInicio,oAreaMenu,oConversorBinario,oConversorTempo,oConversorTamanho,oConversorASCII,oReverseText,oReverseWord
        ,oAreaConversor,oConversorPeso,oTextParaSerConvertido,oSubmeter,oTextConvertido
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
    oSubmeter.onclick = conversorDeBinario;


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
    document.location.href = "ReverseText.html";
    return false;
} //paginaDoReverseText

function paginaDoReverseWord(){
    document.location.href = "ReverseWord.html";
    return false;
} //paginaDoReverseWord



function conversorDeBinario(){

    var stringConvertida = "";
    var stringParaSerConvertida = oTextParaSerConvertido.value;
    
    for(let i=0 ; i < stringParaSerConvertida.length ; i++){
        stringConvertida +=stringParaSerConvertida.charCodeAt(i).toString(2) + " ";
        
    }
    oTextConvertido.innerHTML = stringConvertida;
    
    
}
