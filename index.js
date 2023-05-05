let submitBtn = document.querySelector('.submit-btn')
let ratingItems = Array.from(document.querySelectorAll('.rating-list-item'))
let contentRating = document.querySelector('.content-rating')
let contentTy = document.querySelector('.content-ty')

ratingItems.forEach((item) => {
    item.addEventListener('click', () => {
        let activeItem = document.querySelector('.rating-list-item-active')
        if (activeItem == undefined) {
            item.classList.add('rating-list-item-active')
        } else if (activeItem != undefined && item.classList.contains('rating-list-item-active') != true) {
            activeItem.classList.remove('rating-list-item-active')
            item.classList.add('rating-list-item-active')
        } else {
            item.classList.remove('rating-list-item-active')
        }
    })
})

submitBtn.addEventListener('click', (ev) => {
    let activeItem = document.querySelector('.rating-list-item-active')
    let button = ev.target
    let selectedValue
    
    if (activeItem == undefined) {
        button.classList.add('error-anim')
        setTimeout(() => {
            button.classList.remove('error-anim')
        }, 500)
    } else {
        selectedValue = activeItem.dataset.rating
        document.querySelector('.selected-rating-num').innerText = selectedValue
        contentRating.classList.add('exit-anim')
        setTimeout(() => {
            contentRating.remove()
            contentTy.classList.add('entrance-anim')
        }, 500)
    }
})