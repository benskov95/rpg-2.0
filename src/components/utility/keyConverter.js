const shiftKeyConverter = 
{
    "!": "1",
    "\"": "2",
    "#": "3",
    "¤": "4",
    "%": "5",
    "&": "6",
    "/": "7",
    "(": "8",
    ")": "9",
    "=": "0"
}

const keybindConverter = (keybind) => {
    let parts = keybind.split("+");

    if (parts.length === 1) {
        return keybind;
    } else {
        switch(parts[0]) {
            case "shift":
                return "S" + parts[1];
            case "alt":
                return "A" + parts[1];
        }
    }
}

export {shiftKeyConverter, keybindConverter}
