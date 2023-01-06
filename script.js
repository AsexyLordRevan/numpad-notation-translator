let comboEntry = document.getElementById("combo_entry");
let translatedCombo = document.getElementById("translated_combo");

comboEntry.oninput = translateCombo;

function translateCombo() {
    //Translate combo into bombo
    //TODO: add button icons for babies
    let result = comboEntry.value;

    result = result.replace(/ADC/gm, "airdash cancel ");
    result = result.replace(/AD/gm, "airdash ");

    result = result.replace(/j(?=[a-zA-Z][a-zA-Z]|\d{1,3})/gm, "jumping ");
    result = result.replace(/2(?=[a-zA-Z][a-zA-Z])/gm, "crouching ");
    result = result.replace(/5(?=[a-zA-Z][a-zA-Z])/gm, "standing ");
    result = result.replace(/236(?=[a-zA-Z][a-zA-Z])/gm, "quarter circle forward ");
    result = result.replace(/214(?=[a-zA-Z][a-zA-Z])/gm, "quarter circle back ");
    
    result = result.replace(/L/gm, "light ");
    result = result.replace(/M/gm, "medium ");
    result = result.replace(/H/gm, "hard ");

    result = result.replace(/PP/gm, "2 punches ");
    result = result.replace(/KK/gm, "2 kicks ");

    result = result.replace(/P(?!P)/gm, "punch ");
    result = result.replace(/K(?!K)/gm, "kick ");

    result = result.replace(/\((\d)\)/gm, "(hit $1 times) ");

    result = result.replace(/(?<![a-zA-Z])([a-zA-Z])(?=[a-zA-Z]*)/gm, 
    function(letter) {
        return letter.toUpperCase();
    });
    /*const inputArray = comboEntry.value.split(" ");
    for (let i = 0; i < inputArray.length; i++) {
        let translatedMove = inputArray[i];
        translatedMove.replace(/j/gm, "jumping ");
        translatedMove.replace(/2/gi, "crouching ");
        translatedMove.replace(/5/gi, "standing ");
        //TODO: keep newlines
        result += translatedMove + " ";
    }*/

    translatedCombo.textContent = result;
}

translateCombo();