ymaps.ready(init);

function init() {
    const map = new ymaps.Map("map", {
        center: [48.708048, 44.513303],
        zoom: 4,
    });

    const cities = [
        { name: "Москва", coords: [55.755826, 37.6173] },
        { name: "Волгоград", coords: [48.708048, 44.513303] },
        { name: "Красодар", coords: [45.03547, 38.975313] },
        { name: "Саратов", coords: [51.533557, 46.034257] },
        { name: "Воронеж", coords: [51.67204, 39.1843] },
        { name: "Ереван", coords: [48.708048, 44.513303] },
        { name: "Новосибирск", coords: [55.008353, 82.935733] },
    ];

    cities.forEach((city) => {
        const placemark = new ymaps.Placemark(
            city.coords,
            {
                balloonContent: `<strong>${city.name}</strong>`,
            },
            {
                preset: "islands#dotIcon",
                iconColor: "#ff0000",
            }

            /** Проблема с iconImageHref
            {
                iconLayout: "default#image",
                iconImageHref: "../assets/icons/Mark.png",
                iconImageSize: [36, 40],
                iconImageOffset: [-15, -42],
            }
             */
        );

        map.geoObjects.add(placemark);
    });
}
