/**
 * Created by nkondova on 29.6.2017 г..
 */
function create(sentences) {
    let contentDiv = document.getElementById('content');
    for(let sentence of sentences){
        let newDivEl = document.createElement('div');
        let newPEl = document.createElement('p');
        newPEl.textContent = sentence;
        newPEl.style.display = 'none';
        newDivEl.appendChild(newPEl);
        newDivEl.addEventListener('click', function () {
            newPEl.style.display = 'inline-block'
        });

        contentDiv.appendChild(newDivEl);
    }
}