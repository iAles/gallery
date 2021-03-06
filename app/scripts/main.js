// for (const image of images) {
//     //     console.log("To jest obrazek" + image);
//     //     console.log('PK');
// }

// for (let i = 0; i < images.length; i++) {
//     // const image = images[i];
//     // console.log("To jest obrazek" + image);
//     // console.log('PK');
// }

// const isEmpty = (images.length === 0);
// const isEmpty2 = (images.length == 0);

// function displayImages(params) {
//     //     console.log('Liczba obrazków ' + images.length);
//     //     console.log('Pierwszy element listy ' + images[0]);
//     //     console.log('Drugi element listy ' + images[1]);
// }

// displayImages();

// function displayLastElment() {
//     //     console.log('Ostatni element listy ' + images[images.length - 1]);
//     //     console.log('/  ' + 23442423 / 235);
//     //     console.log('*  ' + 23442423 * 235);
//     //     console.log('+  ' + 23442423 + 235);
//     //     console.log('-  ' + 23442423 - 235);
//     //     console.log('** ' + 23442423 **5);

// }
// displayLastElment();

function renderPhoto(photo) {
    const $card = document.createElement('div');
    $card.classList.add('card', 'col-3', 'mx-4');

    const $img = document.createElement('img');
    $img.src = photo.imageUrl;

    const $body = document.createElement('div');
    $body.classList.add('card-body');

    const $title = document.createElement('h5');
    $title.classList.add('card-title');
    $title.textContent = photo.description;

    // Group HTML Elements
    $card.append($img);
    $card.append($body);
    $body.append($title);

    // Render
    const $main = document.querySelector('main');
    $main.append($card);
}

/**
 * @typedef {Object} Photo
 * @property {string} url
 * @property {string} title
 * @property {string} author
 *
 * @typedef {Array<Photo>} Photos
 */

/**
 * @param {Photos} photos
 */

function displayPhotos(photos) {
    photos.forEach(function (photo) {
        console.group(photo.id);
        console.info(photo.author.name);
        console.groupEnd();
        renderPhoto(photo);
    })
}

// Uruchomienie funkcji
// displayImages();
// displayLastElement();

// renderPhoto('https://picsum.photos/id/10/300/150');
// renderPhoto('https://picsum.photos/id/20/300/150');
// renderPhoto('https://picsum.photos/id/30/300/150');

function shouldDisplayPhotos() {
    const answer = prompt('Czy chcesz wyświetlić zdjęcia?');
    return (answer.toLowerCase() === 'tak');
}

function isEmpty(images) {
    return images.length === 0;
}


function main() {
    loader.show();

    fetchPhotosFromLocal()
        .then(function (images){
            return images.map(function(image){
                image.imageUrl = image.url;
                image.description = image.title;
                return image;
            });
        })
        .then(function (images) {
            if (!isEmpty(images)) {
                console.log('zdjęcia istnieją');
                displayPhotos(images);
            } else {
                console.log('zdjęcia nie istnieją');
                displayMessage('Nie ma zdjęć');
            }
        })
        .catch(function () {
            displayErrorMessage('Problem z pobraniem zdjęć');
        })
        .finally(function () {
            setTimeout(function () {
                console.info('chowamy loaderka');
                loader.hide();
            }, 1000);

            //setTimeout(function () {
            //     console.info('chowamy loaderka');
            // }, 1500); // 1.5s
            // loader.hide();
        })


}
main();



// setTimeout(function () {
//     console.info('chowamy loaderka');
// }, 1500); // 1.5s

// const authors = images.map(function (image) {
//     return image.author;
// });
// console.log(authors);


// const masterPrice = images.reduce(function (memory, image) {
//     console.warn(memory);
//     memory = memory + image.price;
//     return memory;
// }, 0);

// const groupByPrice = images.reduce(function (memory, image) {
//     memory[image.price] = image;
//     return memory;
// }, {})



// if (images.length === 0) {
//     displayMessage("brak zdjęć")
// } else {
//     displayPhotos(images);
// }; 

