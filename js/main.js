'use strict';

var picturesId = ['01', '02', '03', '04', '05', '06', '07', '08'];
var titles = ['Милая, уютная квартирка в центре Токио', 'Просторная комнатка рядом с КФС', 'Вместительный дом напротив залива', 'Шикарный бунгало с красивым видом из окна'];
var locationX = [300, 350, 400, 450, 500, 520, 540, 600];
var locationY = [130, 200, 250, 350, 400, 456, 500, 630];
var cost = [1800, 2000, 2200, 3000, 3500, 4000, 5000, 10000];
var types = ['palace', 'flat', 'house', 'bungalo'];
var quantityRooms = [1, 2, 3, 4, 5];
var quantityGuests = [2, 4, 5, 6, 8];
var checkIn = ['12:00', '13:00', '14:00'];
var checkOut = ['12:00', '13:00', '14:00'];
var descriptions = ['Просторные комнаты с высоким потолком', 'В квартире есть все удобства. Wi-fi, TV, internet', 'Прекрасное местоположение. 3 мминуты ходьбы от главных достопримечательносей города', 'Удобная логистика. Возможно беспатное бронирование'];
var photoAdresses = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var staticFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];


var createAdArray = function () {
  var adArray = [];
  for (var i = 0; i <= 7; i++) {
    var newObject = createAdObject();
    adArray.push(newObject);
  }
  return adArray;
};


var createAdObject = function () {
  var ad = {
    author: {
      avatar: createImageUrlAvatar(),
    },
    offer: {
      title: createTitles(),
      address: (getRandomX() + ', ' + getRandomY()),
      price: createPrice(),
      type: createType(),
      rooms: createRooms(),
      guests: createGuests(),
      checkin: createCheckIn(),
      checkout: createCheckOut(),
      features: getFeatures(),
      description: createDescription(),
      photos: createPhotos(),
    },
    location: {
      x: getRandomX(),
      y: getRandomY()
    }
  };
  return ad;
};

var createImageUrlAvatar = function () {
  var randomIdIndex = Math.floor(Math.random() * picturesId.length);
  return 'img/avatars/user' + picturesId[randomIdIndex] + '.png';
};

var createTitles = function () {
  var randomTitlesIndex = Math.floor(Math.random() * titles.length);
  return titles[randomTitlesIndex];
};

var createPrice = function () {
  var randomPriceIndex = Math.floor(Math.random() * cost.length);
  return cost[randomPriceIndex];
};

var createType = function () {
  var randomTypeIndex = Math.floor(Math.random() * types.length);
  return types[randomTypeIndex];
};

var createRooms = function () {
  var randomRoomsIndex = Math.floor(Math.random() * quantityRooms.length);
  return quantityRooms[randomRoomsIndex];
};

var createGuests = function () {
  var randomGuestsIndex = Math.floor(Math.random() * quantityGuests.length);
  return quantityGuests[randomGuestsIndex];
};


var createCheckIn = function () {
  var randomCheckInIndex = Math.floor(Math.random() * checkIn.length);
  return checkIn[randomCheckInIndex];
};

var createCheckOut = function () {
  var randomCheckOutIndex = Math.floor(Math.random() * checkOut.length);
  return checkIn[randomCheckOutIndex];
};

var createDescription = function () {
  var randomDescriptionIndex = Math.floor(Math.random() * descriptions.length);
  return descriptions[randomDescriptionIndex];
};

var createPhotos = function () {
  var randomPhotoIndex = Math.floor(Math.random() * photoAdresses.length);
  var randomPhotoAdresses = photoAdresses.slice(0, randomPhotoIndex);
  return randomPhotoAdresses;
};


var getRandomX = function () {
  var randomXIndex = Math.floor(Math.random() * locationX.length);
  return locationX[randomXIndex];
};


var getRandomY = function () {
  var randomYIndex = Math.floor(Math.random() * locationY.length);
  return locationY[randomYIndex];
};

var getFeatures = function () {
  var randomFeatursIndex = Math.floor(Math.random() * staticFeatures.length);
  var randomFeatures = staticFeatures.slice(0, randomFeatursIndex);
  return randomFeatures;
};

createAdArray();

var pageMap = document.querySelectorAll('.map');
pageMap.classList.remove('map--faded');

