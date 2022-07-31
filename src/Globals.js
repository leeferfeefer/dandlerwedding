const GalleryImages = require("./images/Gallery/index.js");

export const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const capitalizeFirstLetters = (str) => {
  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(" ");
};

export const GalleryPhotos = [
  {
      "src": GalleryImages.image0,
      "width": 1024,
      "height": 1457
  },
  {
      "src": GalleryImages.image1,
      "width": 1024,
      "height": 1457
  },
  {
      "src": GalleryImages.image10,
      "width": 1024,
      "height": 1306
  },
  {
      "src": GalleryImages.image100,
      "width": 1024,
      "height": 1423
  },
  {
      "src": GalleryImages.image101,
      "width": 1024,
      "height": 1423
  },
  {
      "src": GalleryImages.image102,
      "width": 1024,
      "height": 1423
  },
  {
      "src": GalleryImages.image103,
      "width": 1024,
      "height": 1423
  },
  {
      "src": GalleryImages.image104,
      "width": 1024,
      "height": 1423
  },
  {
      "src": GalleryImages.image107,
      "width": 1024,
      "height": 1425
  },
  {
      "src": GalleryImages.image105,
      "width": 1024,
      "height": 1425
  },
  {
      "src": GalleryImages.image106,
      "width": 1024,
      "height": 1425
  },
  {
      "src": GalleryImages.image108,
      "width": 1024,
      "height": 1425
  },
  {
      "src": GalleryImages.image11,
      "width": 1024,
      "height": 1457
  },
  {
      "src": GalleryImages.image14,
      "width": 1024,
      "height": 1441
  },
  {
      "src": GalleryImages.image12,
      "width": 1024,
      "height": 1457
  },
  {
      "src": GalleryImages.image13,
      "width": 1024,
      "height": 1452
  },
  {
      "src": GalleryImages.image15,
      "width": 1024,
      "height": 1441
  },
  {
      "src": GalleryImages.image16,
      "width": 1024,
      "height": 1441
  },
  {
      "src": GalleryImages.image18,
      "width": 1024,
      "height": 1441
  },
  {
      "src": GalleryImages.image17,
      "width": 1024,
      "height": 1441
  },
  {
      "src": GalleryImages.image19,
      "width": 1024,
      "height": 1491
  },
  {
      "src": GalleryImages.image2,
      "width": 1024,
      "height": 1457
  },
  {
      "src": GalleryImages.image20,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image21,
      "width": 1024,
      "height": 1491
  },
  {
      "src": GalleryImages.image23,
      "width": 1024,
      "height": 1442
  },
  {
      "src": GalleryImages.image22,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image25,
      "width": 1024,
      "height": 1442
  },
  {
      "src": GalleryImages.image24,
      "width": 1024,
      "height": 1442
  },
  {
      "src": GalleryImages.image27,
      "width": 1024,
      "height": 1442
  },
  {
      "src": GalleryImages.image26,
      "width": 1024,
      "height": 1442
  },
  {
      "src": GalleryImages.image29,
      "width": 1024,
      "height": 683
  },
  {
      "src": GalleryImages.image28,
      "width": 1024,
      "height": 727
  },
  {
      "src": GalleryImages.image3,
      "width": 1024,
      "height": 1457
  },
  {
      "src": GalleryImages.image30,
      "width": 1024,
      "height": 734
  },
  {
      "src": GalleryImages.image31,
      "width": 1024,
      "height": 734
  },
  {
      "src": GalleryImages.image32,
      "width": 1024,
      "height": 734
  },
  {
      "src": GalleryImages.image33,
      "width": 1024,
      "height": 734
  },
  {
      "src": GalleryImages.image34,
      "width": 1024,
      "height": 1417
  },
  {
      "src": GalleryImages.image36,
      "width": 1024,
      "height": 1378
  },
  {
      "src": GalleryImages.image35,
      "width": 1024,
      "height": 1444
  },
  {
      "src": GalleryImages.image37,
      "width": 1024,
      "height": 1378
  },
  {
      "src": GalleryImages.image38,
      "width": 1024,
      "height": 1444
  },
  {
      "src": GalleryImages.image39,
      "width": 1024,
      "height": 1378
  },
  {
      "src": GalleryImages.image4,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image40,
      "width": 1024,
      "height": 1378
  },
  {
      "src": GalleryImages.image41,
      "width": 1024,
      "height": 1464
  },
  {
      "src": GalleryImages.image42,
      "width": 1024,
      "height": 1464
  },
  {
      "src": GalleryImages.image43,
      "width": 1024,
      "height": 1464
  },
  {
      "src": GalleryImages.image44,
      "width": 1024,
      "height": 1451
  },
  {
      "src": GalleryImages.image45,
      "width": 1024,
      "height": 1456
  },
  {
      "src": GalleryImages.image46,
      "width": 1024,
      "height": 1451
  },
  {
      "src": GalleryImages.image47,
      "width": 1024,
      "height": 1451
  },
  {
      "src": GalleryImages.image48,
      "width": 1024,
      "height": 1451
  },
  {
      "src": GalleryImages.image5,
      "width": 1024,
      "height": 1457
  },
  {
      "src": GalleryImages.image50,
      "width": 1024,
      "height": 1363
  },
  {
      "src": GalleryImages.image49,
      "width": 1024,
      "height": 1451
  },
  {
      "src": GalleryImages.image51,
      "width": 1024,
      "height": 1378
  },
  {
      "src": GalleryImages.image52,
      "width": 1024,
      "height": 1378
  },
  {
      "src": GalleryImages.image53,
      "width": 1024,
      "height": 1363
  },
  {
      "src": GalleryImages.image56,
      "width": 1024,
      "height": 1497
  },
  {
      "src": GalleryImages.image55,
      "width": 1024,
      "height": 1459
  },
  {
      "src": GalleryImages.image54,
      "width": 1024,
      "height": 1497
  },
  {
      "src": GalleryImages.image57,
      "width": 1024,
      "height": 1459
  },
  {
      "src": GalleryImages.image58,
      "width": 1024,
      "height": 1497
  },
  {
      "src": GalleryImages.image59,
      "width": 1024,
      "height": 1497
  },
  {
      "src": GalleryImages.image6,
      "width": 1024,
      "height": 1457
  },
  {
      "src": GalleryImages.image60,
      "width": 1024,
      "height": 1497
  },
  {
      "src": GalleryImages.image61,
      "width": 1024,
      "height": 1497
  },
  {
      "src": GalleryImages.image62,
      "width": 1024,
      "height": 1546
  },
  {
      "src": GalleryImages.image63,
      "width": 1024,
      "height": 1546
  },
  {
      "src": GalleryImages.image66,
      "width": 1024,
      "height": 1546
  },
  {
      "src": GalleryImages.image64,
      "width": 1024,
      "height": 1546
  },
  {
      "src": GalleryImages.image65,
      "width": 1024,
      "height": 1546
  },
  {
      "src": GalleryImages.image67,
      "width": 1024,
      "height": 1447
  },
  {
      "src": GalleryImages.image68,
      "width": 1024,
      "height": 1475
  },
  {
      "src": GalleryImages.image69,
      "width": 1024,
      "height": 1480
  },
  {
      "src": GalleryImages.image7,
      "width": 1024,
      "height": 1457
  },
  {
      "src": GalleryImages.image70,
      "width": 1024,
      "height": 1480
  },
  {
      "src": GalleryImages.image71,
      "width": 1024,
      "height": 1480
  },
  {
      "src": GalleryImages.image72,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image74,
      "width": 1024,
      "height": 1446
  },
  {
      "src": GalleryImages.image73,
      "width": 1024,
      "height": 1480
  },
  {
      "src": GalleryImages.image75,
      "width": 1024,
      "height": 1446
  },
  {
      "src": GalleryImages.image76,
      "width": 1024,
      "height": 1446
  },
  {
      "src": GalleryImages.image77,
      "width": 1024,
      "height": 1488
  },
  {
      "src": GalleryImages.image78,
      "width": 1024,
      "height": 1517
  },
  {
      "src": GalleryImages.image79,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image8,
      "width": 1024,
      "height": 1457
  },
  {
      "src": GalleryImages.image80,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image81,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image82,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image83,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image84,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image85,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image86,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image87,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image88,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image89,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image9,
      "width": 1024,
      "height": 1457
  },
  {
      "src": GalleryImages.image90,
      "width": 1024,
      "height": 1423
  },
  {
      "src": GalleryImages.image91,
      "width": 1024,
      "height": 1423
  },
  {
      "src": GalleryImages.image92,
      "width": 1024,
      "height": 1536
  },
  {
      "src": GalleryImages.image93,
      "width": 1024,
      "height": 1423
  },
  {
      "src": GalleryImages.image94,
      "width": 1024,
      "height": 1423
  },
  {
      "src": GalleryImages.image95,
      "width": 1024,
      "height": 1423
  },
  {
      "src": GalleryImages.image96,
      "width": 1024,
      "height": 1423
  },
  {
      "src": GalleryImages.image97,
      "width": 1024,
      "height": 1454
  },
  {
      "src": GalleryImages.image98,
      "width": 1024,
      "height": 1423
  },
  {
      "src": GalleryImages.image99,
      "width": 1024,
      "height": 1423
  }
];