
function odliczanie()
{
    var dzisiaj = new Date();
    rok = dzisiaj.getFullYear();
    var dzien   = dzisiaj.getDate();
    if (dzien < 10) dzien = "0"+dzien;
    var miesiac = dzisiaj.getMonth()+1;
    if (miesiac < 10) miesiac = "0"+miesiac;
    var godzina = dzisiaj.getHours();
    if (godzina < 10) godzina = "0"+godzina;
    var minuta = dzisiaj.getMinutes();
    if (minuta < 10) minuta = "0"+minuta;
    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10) sekunda = "0"+sekunda;
    document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+" || Godzina: "+godzina+":"+minuta+":"+sekunda;

    setTimeout("odliczanie()",1000);
}
