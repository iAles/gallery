const loader = {};

loader.show = function () {
    //Stworzenie HTMLImageElement
    const img = document.createElement('img');

    //Dodanie klasy css do DOM
    img.classList.add('loader');

    //Ustawienie atrybutu src
    img.src = 'images/loader.svg';

    //Pobranie referencji do kontenera w którym loader się wyświetli
    const $main = document.querySelector('main');

    // Dodanie loadera do powyższego kontenera
    $main.append(img);
};
loader.hide = function () {
    //Pobrać referencje do loadrea
    const $loader = document.querySelector('.loader');
    if ($loader) {
        $loader.remove();
    }

    //usunąć go z DOM  

};

console.log(loader);