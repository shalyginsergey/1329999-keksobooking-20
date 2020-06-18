'use strict';

var getPicturesIds = function (quantity) {
  var picturesIdsArray = [];
  for (var i = 1; i < quantity; i++) {
    var createPicturesId = '0' + i;
    picturesIdsArray.push(createPicturesId);
  }
  return picturesIdsArray;
};


var titles = ['Милая, уютная квартирка в центре Токио', 'Просторная комнатка рядом с КФС', 'Вместительный дом напротив залива', 'Шикарный бунгало с красивым видом из окна'];
var locationX = [300, 350, 400, 450, 500, 520, 540, 600];
var locationY = [130, 200, 280, 370, 440, 490, 560, 630];
var cost = [1800, 2000, 11000, 15000, 23500, 34000, 45000, 51000];
var types = ['palace', 'flat', 'house', 'bungalo'];
var quantityRooms = [1, 2, 3, 4, 5];
var quantityGuests = [2, 4, 5, 6, 8];
var check = ['12:00', '13:00', '14:00'];
var descriptions = ['Просторные комнаты с высоким потолком', 'В квартире есть все удобства. Wi-fi, TV, internet', 'Прекрасное местоположение. 3 мминуты ходьбы от главных достопримечательносей города', 'Удобная логистика. Возможно беспатное бронирование'];
var photoAdresses = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var staticFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var quantityObject = 7;
var picturesId = getPicturesIds(quantityObject);

var createAdArray = function (quantity) {
  var adArray = [];
  for (var i = 0; i <= quantity; i++) {
    var newObject = createAdObject();
    adArray.push(newObject);
  }
  return adArray;
};


var createAdObject = function () {
  return {
    author: {
      avatar: 'img/avatars/user' + picturesId[Math.floor(Math.random() * picturesId.length)] + '.png',
    },
    offer: {
      title: titles[Math.floor(Math.random() * titles.length)],
      address: (locationX[Math.floor(Math.random() * locationX.length)] + ', ' + locationY[Math.floor(Math.random() * locationY.length)]),
      price: cost[Math.floor(Math.random() * cost.length)],
      type: types[Math.floor(Math.random() * types.length)],
      rooms: quantityRooms[Math.floor(Math.random() * quantityRooms.length)],
      guests: quantityGuests[Math.floor(Math.random() * quantityGuests.length)],
      checkin: check[Math.floor(Math.random() * check.length)],
      checkout: check[Math.floor(Math.random() * check.length)],
      features: staticFeatures.slice(0, Math.floor(Math.random() * staticFeatures.length)),
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      photos: photoAdresses.slice(0, Math.floor(Math.random() * photoAdresses.length)),
    },
    location: {
      x: locationX[Math.floor(Math.random() * locationX.length)],
      y: locationY[Math.floor(Math.random() * locationY.length)]
    }
  };
};


createAdArray(quantityObject);

var pageMap = document.querySelector('.map');
pageMap.classList.remove('map--faded');

var pinsListElement = document.querySelector('.map__pins');
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');


var renderPin = function () {
  var pinElement = pinTemplate.cloneNode(true);
  pinElement.style = 'left: ' + locationX[Math.floor(Math.random() * locationX.length)] + 'px; ' + 'top: ' + locationY[Math.floor(Math.random() * locationY.length)] + 'px;';
  pinTemplate.querySelector('img').src = 'img/avatars/user' + picturesId[Math.floor(Math.random() * picturesId.length)] + '.png';
  pinTemplate.querySelector('img').alt = titles[Math.floor(Math.random() * titles.length)];

  return pinElement;
};


var fragment = document.createDocumentFragment();
for (var i = 0; i <= quantityObject; i++) {
  fragment.appendChild(renderPin());
}
pinsListElement.appendChild(fragment);
