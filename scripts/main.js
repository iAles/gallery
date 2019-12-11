const image1 = "https://picsum.photos/id/40/300/150";
const image2 = "https://picsum.photos/id/50/300/150";
const image3 = "https://picsum.photos/id/60/300/150";

const images = [image1, image2, image3];

// for (const image of images) {
//     console.log("To jest obrazek" + image);
//     console.log('PK');
// }

// for (let i = 0; i < images.length; i++) {
//     const image = images[i];
//     console.log("To jest obrazek" + image);
//     console.log('PK');
// }

// const isEmpty = (images.length === 0);
// const isEmpty2 = (images.length == 0);

// function displayImages(params) {
//     console.log('Liczba obrazków ' + images.length);
//     console.log('Pierwszy element listy ' + images[0]);
//     console.log('Drugi element listy ' + images[1]);
// }
// displayImages();

// function displayLastElment() {
//     console.log('Ostatni element listy ' + images[images.length - 1]);
//     console.log('/  ' + 23442423 / 235);
//     console.log('*  ' + 23442423 * 235);
//     console.log('+  ' + 23442423 + 235);
//     console.log('-  ' + 23442423 - 235);
//     console.log('** ' + 23442423 **5);

// }
// displayLastElment();

function renderPhoto(url) {
    const img = document.createElement('img');
    img.src = url;
    const main = document.querySelector('main');
    main.append(img);
}

// renderPhoto('https://picsum.photos/id/10/300/150');
// renderPhoto('https://picsum.photos/id/10/300/150');
// renderPhoto('https://picsum.photos/id/10/300/150');

function displayPhotos(photos) {
    console.log(photos);
    for (const photo of photos) {
        renderPhoto (photo);
    }
}

displayPhotos(images);