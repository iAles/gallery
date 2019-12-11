const image1 = "https://picsum.photos/300/150?random=1";
const image2 = "https://picsum.photos/300/150?random=2";
const image3 = "https://picsum.photos/300/150?random=3";

const images = [image1, image2, image3];

for (const image of images) {
    console.log("To jest obrazek" + image);
    console.log('PK');
}

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    console.log ("To jest obrazek" + image);
    console.log ('PK');
}

