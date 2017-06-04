/**
 * Created by Neli on 4.6.2017 г..
 */
function escapeHtml(input) {
    let result = '<ul>\n';
    for(let match of input){
        let newElemtn = match.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        result += `  <li>${newElemtn}</li>\n`;
    }

    result += '</ul>';

    return result;
}