/**
 * Created by nkondova on 13.7.2017 г..
 */

function tableBuilder(selector) {
    let table = $('<table>');


    function createTable(colNames){
        let row = $('<tr>');

        for (let col of colNames) {
            row.append($('<th>').text(col));
        }

        row.append($('<th>').text('Action'));
        table.append(row);

        let selectorElement = $(selector);
        selectorElement.empty();
        selectorElement.append(table);
    }

    function fillData(data) {
        for (let row of data) {
            let tr = $('<tr>');

            for (let col of row) {
                tr.append($('<td>').text(col));
            }

            tr.append($('<td>')
                .append($('<button>')
                    .text('Delete')
                    .click((event) => $(event.target).parent().parent().remove())));

            table.append(tr);
        }
    }

    return{
        createTable,
        fillData
    }
}
