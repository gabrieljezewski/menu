window.onhashchange = function(e) {
    const oldURL = e.oldURL.split('#')[1]           //Pegando a url que está depois do # do índice 1, # é o elemento 0 e o próximo é o 1
    const newURL = e.newURL.split('#')[1]
    const oldLink = document.querySelector(`.menu a[href='#${oldURL}']`)
    const newLink = document.querySelector(`.menu a[href='#${newURL}']`)
    oldLink && oldLink.classList.remove('selected')
    newLink && newLink.classList.add('selected')
}