let myMap;
const init = () => {
    myMap = new ymaps.Map('map', {
        center: [55.749101, 37.602588],
        zoom: 14,
        controls: []
    });

    const coords = [
        [55.749081, 37.604367],
        [59.91142323563909, 30.50024587065841],
        [59.88693161784606, 30.319658102103713],
        [59.97033574821672, 30.315194906302924]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './../images/Icons/marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52],
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);