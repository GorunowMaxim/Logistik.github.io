function mapFirst() {
  var mapFirst = new ymaps.Map("map-1", {
    center: [59.183516, 46.251924],
    zoom: 4,
  });

  let placemarkMoscow = new ymaps.Placemark(
    [55.755696, 37.617306],
    {},
    {
      preset: "islands#icon",
      iconColor: "#0095b6",
    }
  );
  let placemarkSpb = new ymaps.Placemark(
    [59.938784, 30.314997],
    {},
    {
      preset: "islands#icon",
      iconColor: "#0095b6",
    }
  );
  let placemarkEkb = new ymaps.Placemark(
    [56.838011, 60.597474],
    {},
    {
      preset: "islands#icon",
      iconColor: "#0095b6",
    }
  );
  let placemarkUfa = new ymaps.Placemark(
    [54.735152, 55.958736],
    {},
    {
      preset: "islands#icon",
      iconColor: "#0095b6",
    }
  );

  mapFirst.controls.remove("geolocationControl"); // удаляем геолокацию
  mapFirst.controls.remove("searchControl"); // удаляем поиск
  mapFirst.controls.remove("trafficControl"); // удаляем контроль трафика
  mapFirst.controls.remove("typeSelector"); // удаляем тип
  mapFirst.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  mapFirst.controls.remove("zoomControl"); // удаляем контрол зуммирования
  mapFirst.controls.remove("rulerControl"); // удаляем контрол правил

  mapFirst.geoObjects.add(placemarkMoscow);
  mapFirst.geoObjects.add(placemarkSpb);
  mapFirst.geoObjects.add(placemarkEkb);
  mapFirst.geoObjects.add(placemarkUfa);
}

function mapSecond() {
  var mapSecond = new ymaps.Map("map-2", {
    center: [53.902284, 27.561831],
    zoom: 9,
  });

  let placemarkSecond = new ymaps.Placemark(
    [53.902284, 27.561831],
    {},
    {
      preset: "islands#icon",
      iconColor: "#0095b6",
    }
  );

  mapSecond.controls.remove("geolocationControl"); // удаляем геолокацию
  mapSecond.controls.remove("searchControl"); // удаляем поиск
  mapSecond.controls.remove("trafficControl"); // удаляем контроль трафика
  mapSecond.controls.remove("typeSelector"); // удаляем тип
  mapSecond.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  mapSecond.controls.remove("zoomControl"); // удаляем контрол зуммирования
  mapSecond.controls.remove("rulerControl"); // удаляем контрол правил

  mapSecond.geoObjects.add(placemarkSecond);
}

function init() {
    var map = new ymaps.Map("map", {
      center: [49.800403, 73.08797],
      zoom: 12,
    });
  
    let placemark = new ymaps.Placemark(
      [49.800403, 73.08797],
      {},
      {
        preset: "islands#icon",
        iconColor: "#0095b6",
      }
    );
  
    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
  
    map.geoObjects.add(placemark);
  }

ymaps.ready(init);
ymaps.ready(mapFirst);
ymaps.ready(mapSecond);
