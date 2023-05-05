let submitBtn = document.querySelector('.submit-btn')
let ratingItems = Array.from(document.querySelectorAll('.rating-list-item'))
let contentRating = document.querySelector('.content-rating')
let contentTy = document.querySelector('.content-ty')

ratingItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (document.querySelector('.rating-list-item-active') == undefined) {
            item.classList.add('rating-list-item-active')
        } else if (document.querySelector('.rating-list-item-active') != undefined && item.classList.contains('rating-list-item-active') != true) {
            document.querySelector('.rating-list-item-active').classList.remove('rating-list-item-active')
            item.classList.add('rating-list-item-active')
        } else {
            item.classList.remove('rating-list-item-active')
        }
    })
})

submitBtn.addEventListener('click', (ev) => {
    let button = ev.target
    let selectedValue
    
    if (document.querySelector('.rating-list-item-active') == undefined) {
        button.classList.add('error-anim')
        setTimeout(() => {
            button.classList.remove('error-anim')
        }, 500)
    } else {
        selectedValue = document.querySelector('.rating-list-item-active').dataset.rating
        document.querySelector('.selected-rating-num').innerText = selectedValue
        contentRating.classList.add('exit-anim')
        setTimeout(() => {
            contentRating.remove()
            contentTy.classList.add('entrance-anim')
        }, 500)
    }
})