let comboEntry = document.getElementById("combo_entry");
let translatedCombo = document.getElementById("translated_combo");

comboEntry.oninput = translateCombo;

function translateCombo() {
    let result = comboEntry.value;

    result = result.replace(/ADC/gm, "airdash cancel ");
    result = result.replace(/adc/gm, "airdash cancel ");
    result = result.replace(/JC/gm, "jump cancel");
    result = result.replace(/jc/gm, "jump cancel");
    result = result.replace(/HJC/gm, "high jump cancel");
    result = result.replace(/hjc/gm, "high jump cancel");
    result = result.replace(/DC/gm, "dash cancel");
    result = result.replace(/dc/gm, "dash cancel");
    result = result.replace(/k/gm, "dash cancel");

    result = result.replace(/1(?=[a-zA-Z][a-zA-Z])/gm, "󰁂");
    result = result.replace(/2(?=[a-zA-Z][a-zA-Z])/gm, "󰁅");
    result = result.replace(/3(?=[a-zA-Z][a-zA-Z])/gm, "󰁃");
    result = result.replace(/4(?=[a-zA-Z][a-zA-Z])/gm, "󰁍");
    result = result.replace(/5(?=[a-zA-Z][a-zA-Z])/gm, "󰁅");
    result = result.replace(/6(?=[a-zA-Z][a-zA-Z])/gm, "󰁍");
    result = result.replace(/7(?=[a-zA-Z][a-zA-Z])/gm, "󰁛");
    result = result.replace(/8(?=[a-zA-Z][a-zA-Z])/gm, "󰁝");
    result = result.replace(/9(?=[a-zA-Z][a-zA-Z])/gm, "󰁜");

    result = result.replace(/A/gm, "󰯬");
    result = result.replace(/B/gm, "󰯯");
    result = result.replace(/C/gm, "󰯲");
    result = result.replace(/D/gm, "󰯵");

    result = result.replace(/P/gm, "󰰙");
    result = result.replace(/K/gm, "󰰊");
    result = result.replace(/S/gm, "󰰢");
    result = result.replace(/H/gm, "󰰁");
    result = result.replace(/D/gm, "󰯵");
    
    translatedCombo.textContent = result;
}

translateCombo();
