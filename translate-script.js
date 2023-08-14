const inp2 = document.getElementById('result');
const btnSend = document.getElementById('send');
const inputTranslate = document.getElementById('user'); // Вход
const err = document.getElementById('errorMsg')
const outputTranslate = []; // Выход

btnSend.onclick = function () {
    err.innerHTML = ''
    const inputValue = inputTranslate.value;

    for (let i = 0; i < inputValue.length; i++) {
        const currentSymbol = inputValue[i].toLowerCase();
        const translatedSymbol = checkText(currentSymbol);
    }
    outputTranslate.length = 0
    inputTranslate.value = ''
};

function checkText(currentSymbol) {
    // Установим для каждой клавиши свой символ с иного языка
    switch (currentSymbol) {
        case 'q':
            outputTranslate.push('й')
            break;
        case 'w':
            outputTranslate.push('ц')
            break;
        case 'e':
            outputTranslate.push('у')
            break;
        case 'r':
            outputTranslate.push('к')
            break;
        case 't':
            outputTranslate.push('е')
            break;
        case 'y':
            outputTranslate.push('н')
            break;
        case 'u':
            outputTranslate.push('г')
            break;
        case 'i':
            outputTranslate.push('ш')
            break;
        case 'o':
            outputTranslate.push('щ')
            break;
        case 'p':
            outputTranslate.push('з')
            break;
        case 'a':
            outputTranslate.push('ф')
            break;
        case 's':
            outputTranslate.push('ы')
            break;
        case 'd':
            outputTranslate.push('в')
            break;
        case 'f':
            outputTranslate.push('а')
            break;
        case 'g':
            outputTranslate.push('п')
            break;
        case 'h':
            outputTranslate.push('р')
            break;
        case 'j':
            outputTranslate.push('о')
            break;
        case 'k':
            outputTranslate.push('л')
            break;
        case 'l':
            outputTranslate.push('д')
            break;
        case 'z':
            outputTranslate.push('я')
            break;
        case 'x':
            outputTranslate.push('ч')
            break;
        case 'c':
            outputTranslate.push('с')
            break;
        case 'v':
            outputTranslate.push('м')
            break;
        case 'b':
            outputTranslate.push('и')
            break;
        case 'n':
            outputTranslate.push('т')
            break;
        case 'm':
            outputTranslate.push('ь')
            break;
        case ` `:
            outputTranslate.push(' ')
            break;
        case `,`:
            outputTranslate.push('б')
            break;
        case `'`:
            outputTranslate.push('э')
            break;
        case `[`:
            outputTranslate.push('х')
            break;
        case `;`:
            outputTranslate.push('ж')
            break;
        case `]`:
            outputTranslate.push('ъ')
            break;
        case `.`:
            outputTranslate.push('ю')
            break;
        case `<`:
            outputTranslate.push('б')
            break;
        case `>`:
            outputTranslate.push('ю')
            break;
        case `:`:
            outputTranslate.push('ж')
            break;
        case `"`:
            outputTranslate.push('э')
            break;
        case `{`:
            outputTranslate.push('х')
            break;
        case `}`:
            outputTranslate.push('ъ')
            break;
        case '`':
            outputTranslate.push('ё')
            break;
        case '1':
            outputTranslate.push('1')
            break;
        case '2':
            outputTranslate.push('2')
            break;
        case '3':
            outputTranslate.push('3')
            break;
        case '4':
            outputTranslate.push('4')
            break;
        case '5':
            outputTranslate.push('5')
            break;
        case '6':
            outputTranslate.push('6')
            break;
        case '7':
            outputTranslate.push('7')
            break;
        case '8':
            outputTranslate.push('8')
            break;
        case '9':
            outputTranslate.push('9')
            break;
        case '0':
            outputTranslate.push('0')
            break;

        default:
            err.style.color = 'red'
            err.innerHTML = 'Please enter english keyboard characters!'
    }



    const mergerSymbol = [outputTranslate.join('')] // Исправим разделение каждого символа на обьекты (проведем слияние)
    inp2.textContent = mergerSymbol

}