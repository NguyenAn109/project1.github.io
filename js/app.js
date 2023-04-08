
    let imgMain = document.querySelector('.img-main');
    let listImg = document.querySelectorAll('.list-img img');
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');
    let currentIndex = 0;

function updateImgByIndex(index) {

    currentIndex = index
    imgMain.src = listImg[index].getAttribute('src')
}

listImg.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImgByIndex(index)
    })
})

prevBtn.addEventListener('click', e => {
    if (currentIndex == 0) {
        currentIndex = listImg.length - 1
    } else {
        currentIndex--
    }
    updateImgByIndex(currentIndex)
})

nextBtn.addEventListener('click', e => {
    if (currentIndex == listImg.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    updateImgByIndex(currentIndex)
})


    let imgMain1 = document.querySelector('.img-main1');
    let listImg1 = document.querySelectorAll('.list-img1 img');
    let prevBtn1 = document.querySelector('.prev1');
    let nextBtn1 = document.querySelector('.next1');
    let currentIndex1 = 0;

function updateImgByIndex1(index) {

    currentIndex1 = index
    imgMain1.src = listImg1[index].getAttribute('src')

}

listImg1.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImgByIndex1(index)
    })
})

prevBtn1.addEventListener('click', e => {
    if (currentIndex1 == 0) {
        currentIndex1 = listImg1.length - 1
    } else {
        currentIndex1--
    }
    updateImgByIndex1(currentIndex1)
})

nextBtn1.addEventListener('click', e => {
    if (currentIndex1 == listImg1.length - 1) {
        currentIndex1 = 0
    } else {
        currentIndex1++
    }
    updateImgByIndex1(currentIndex1)
})

let imgMain2 = document.querySelector('.img-main2');
let listImg2 = document.querySelectorAll('.list-img2 img');
let prevBtn2 = document.querySelector('.prev2');
let nextBtn2 = document.querySelector('.next2');
let currentIndex2 = 0;

function updateImgByIndex2(index) {

currentIndex2 = index
imgMain2.src = listImg2[index].getAttribute('src')

}

listImg2.forEach((imgElement, index) => {
imgElement.addEventListener('click', e => {
    updateImgByIndex2(index)
})
})

prevBtn2.addEventListener('click', e => {
if (currentIndex2 == 0) {
    currentIndex2 = listImg2.length - 1
} else {
    currentIndex2--
}
updateImgByIndex2(currentIndex2)
})

nextBtn2.addEventListener('click', e => {
if (currentIndex2 == listImg2.length - 1) {
    currentIndex2 = 0
} else {
    currentIndex2++
}
updateImgByIndex2(currentIndex2)
})

let imgMain3 = document.querySelector('.img-main3');
let listImg3 = document.querySelectorAll('.list-img3 img');
let prevBtn3 = document.querySelector('.prev3');
let nextBtn3 = document.querySelector('.next3');
let currentIndex3 = 0;

function updateImgByIndex3(index) {

currentIndex3 = index
imgMain3.src = listImg3[index].getAttribute('src')

}

listImg3.forEach((imgElement, index) => {
imgElement.addEventListener('click', e => {
    updateImgByIndex3(index)
})
})

prevBtn3.addEventListener('click', e => {
if (currentIndex3 == 0) {
    currentIndex3 = listImg3.length - 1
} else {
    currentIndex3--
}
updateImgByIndex3(currentIndex3)
})

nextBtn3.addEventListener('click', e => {
if (currentIndex3 == listImg3.length - 1) {
    currentIndex3 = 0
} else {
    currentIndex3++
}
updateImgByIndex3(currentIndex3)
})

let imgMain4 = document.querySelector('.img-main4');
let listImg4 = document.querySelectorAll('.list-img4 img');
let prevBtn4 = document.querySelector('.prev4');
let nextBtn4 = document.querySelector('.next4');
let currentIndex4 = 0;

function updateImgByIndex4(index) {

currentIndex4 = index
imgMain3.src = listImg4[index].getAttribute('src')

}

listImg4.forEach((imgElement, index) => {
imgElement.addEventListener('click', e => {
    updateImgByIndex4(index)
})
})

prevBtn4.addEventListener('click', e => {
if (currentIndex4 == 0) {
    currentIndex4 = listImg4.length - 1
} else {
    currentIndex4--
}
updateImgByIndex4(currentIndex4)
})

nextBtn3.addEventListener('click', e => {
if (currentIndex4 == listImg4.length - 1) {
    currentIndex4 = 0
} else {
    currentIndex4++
}
updateImgByIndex4(currentIndex4)
})

let imgMain5 = document.querySelector('.img-main5');
let listImg5 = document.querySelectorAll('.list-img5 img');
let prevBtn5 = document.querySelector('.prev5');
let nextBtn5 = document.querySelector('.next5');
let currentIndex5 = 0;

function updateImgByIndex5(index) {

currentIndex5 = index
imgMain5.src = listImg5[index].getAttribute('src')

}

listImg5.forEach((imgElement, index) => {
imgElement.addEventListener('click', e => {
    updateImgByIndex5(index)
})
})

prevBtn5.addEventListener('click', e => {
if (currentIndex5 == 0) {
    currentIndex5 = listImg5.length - 1
} else {
    currentIndex5--
}
updateImgByIndex5(currentIndex5)
})

nextBtn5.addEventListener('click', e => {
if (currentIndex5 == listImg6.length - 1) {
    currentIndex5 = 0
} else {
    currentIndex5++
}
updateImgByIndex5(currentIndex5)
})


let imgMain6 = document.querySelector('.img-main6');
let listImg6 = document.querySelectorAll('.list-img6 img');
let prevBtn6 = document.querySelector('.prev6');
let nextBtn6 = document.querySelector('.next6');
let currentIndex6 = 0;

function updateImgByIndex6(index) {

currentIndex6 = index
imgMain6.src = listImg6[index].getAttribute('src')

}

listImg6.forEach((imgElement, index) => {
imgElement.addEventListener('click', e => {
    updateImgByIndex6(index)
})
})

prevBtn6.addEventListener('click', e => {
if (currentIndex6 == 0) {
    currentIndex6 = listImg6.length - 1
} else {
    currentIndex6--
}
updateImgByIndex6(currentIndex6)
})

nextBtn6.addEventListener('click', e => {
if (currentIndex6 == listImg6.length - 1) {
    currentIndex6 = 0
} else {
    currentIndex6++
}
updateImgByIndex6(currentIndex6)
})

