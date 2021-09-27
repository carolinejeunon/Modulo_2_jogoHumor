var contador = 0;

var lista = [
    {foto: "midia/ClaraMariaReflexiva.png", humor: "Reflexiva tentando entender Dark", altera: 'Reflexiva'},
    {foto: "midia/ClaraMariaZueira.png", humor: "Zoeira porém simpática", altera: 'Zoeira'},
    {foto: "midia/ClaraMariaRadical.png", humor: "Radical", altera: 'Radical'},
    {foto: "midia/ClaraMariaBrava.png", humor: "Braba", altera: 'Brava'}
];

function mudarImagem(){
    if(contador == lista.length){
        contador=0;
    }
    document.getElementById('imagem1').src=lista[contador].foto;
    document.getElementById('humor').innerHTML= lista[contador].humor;
    document.getElementById('imagem1').alt= lista[contador].altera;
    contador++;

}