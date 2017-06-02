/**
 * Created by nkondova on 2.6.2017 г..
 */
function templateFormat(input) {
    return stringsToXml(input);

    function stringsToXml(strings) {
        let xmlOutput = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
        for (let i = 0; i < strings.length; i += 2) {
            let question = strings[i];
            let answer = strings[i + 1];

            xmlOutput += `\t<question>\n\t\t${question}\n\t</question>\n`;
            xmlOutput += `\t<answer>\n\t\t${answer}\n\t</answer>\n`;
        }

        xmlOutput += '</quiz>';

        return xmlOutput;
    }
}
