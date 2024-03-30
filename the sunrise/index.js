const text = `it\'s pretty cold out here.\nthe days just kept getting longer and longer until day itself grew meaningless. what does \'day\' even mean in eternal sunshine?\nso we sit here in the night. or is it day? waiting.\ni dread for roxy's future.\n. . . . . . . . .\nwhere was i? oh. yes. i met a traveller, once, from an antique land. and he said he has heard singing.\nsinging from the ocean. each to each, mermaids singing. riding seaward on the waves.\nwell, <i>my</i> mind doesn't feel spotless, at any rate.`
const p = document.getElementsByClassName('tw')[0]

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

let sofar = ''

async function display() {
    for (char of text) {
        await delay(170)
        if (char == ' ') {char = '&nbsp'}
        if (char == '\n') {char = '<br>'; await delay (2000)}
        sofar += char
        p.innerHTML = sofar
    }
}

display()