
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


export const GalleryPhotos = [
  {
      "src": "/static/media/0.e9adbd6cc55794e20ce2.jpg",
      "width": 1024,
      "height": 1457
  },
  {
      "src": "/static/media/1.ab442ac610797b4620cc.jpg",
      "width": 1024,
      "height": 1457
  },
  {
      "src": "/static/media/10.31fa5505deb6dd8543ac.jpg",
      "width": 1024,
      "height": 1306
  },
  {
      "src": "/static/media/100.b119a9f5010da5395721.jpg",
      "width": 1024,
      "height": 1423
  },
  {
      "src": "/static/media/101.79fb7dc65a4593f3e071.jpg",
      "width": 1024,
      "height": 1423
  },
  {
      "src": "/static/media/102.5536d00e4af86872182e.jpg",
      "width": 1024,
      "height": 1423
  },
  {
      "src": "/static/media/103.594327e61931257f7bbf.jpg",
      "width": 1024,
      "height": 1423
  },
  {
      "src": "/static/media/104.43df1876aa0b67c532e5.jpg",
      "width": 1024,
      "height": 1423
  },
  {
      "src": "/static/media/107.f93cf66ab2869da4065b.jpg",
      "width": 1024,
      "height": 1425
  },
  {
      "src": "/static/media/105.724583342d95918db3da.jpg",
      "width": 1024,
      "height": 1425
  },
  {
      "src": "/static/media/106.863b54fe2bdfd70f084b.jpg",
      "width": 1024,
      "height": 1425
  },
  {
      "src": "/static/media/108.dee4a293e2097ba66ef2.jpg",
      "width": 1024,
      "height": 1425
  },
  {
      "src": "/static/media/11.cdafe5e661b390a02fd8.jpg",
      "width": 1024,
      "height": 1457
  },
  {
      "src": "/static/media/14.96faccd140b14c31a86f.jpg",
      "width": 1024,
      "height": 1441
  },
  {
      "src": "/static/media/12.f3b9eff984dd6ef4e454.jpg",
      "width": 1024,
      "height": 1457
  },
  {
      "src": "/static/media/13.d564d90d026f50547440.jpg",
      "width": 1024,
      "height": 1452
  },
  {
      "src": "/static/media/15.9b0cc144f65c5794220e.jpg",
      "width": 1024,
      "height": 1441
  },
  {
      "src": "/static/media/16.0b2c6b71142b80bdb726.jpg",
      "width": 1024,
      "height": 1441
  },
  {
      "src": "/static/media/18.a2db1c067cf7daeb8a58.jpg",
      "width": 1024,
      "height": 1441
  },
  {
      "src": "/static/media/17.20473c7636959496fb38.jpg",
      "width": 1024,
      "height": 1441
  },
  {
      "src": "/static/media/19.c38c3e5ac159a775398f.jpg",
      "width": 1024,
      "height": 1491
  },
  {
      "src": "/static/media/2.e948b1870fd09900c792.jpg",
      "width": 1024,
      "height": 1457
  },
  {
      "src": "/static/media/20.7e821f08396ae1602837.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/21.b34af997a19c3dd9ae2e.jpg",
      "width": 1024,
      "height": 1491
  },
  {
      "src": "/static/media/23.9dfac07d020aa0103f41.jpg",
      "width": 1024,
      "height": 1442
  },
  {
      "src": "/static/media/22.ac0dbf7cb30b1e285f40.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/25.1d20f8b4d20e13e3963d.jpg",
      "width": 1024,
      "height": 1442
  },
  {
      "src": "/static/media/24.92b524c8abf593a1735e.jpg",
      "width": 1024,
      "height": 1442
  },
  {
      "src": "/static/media/27.613ce41ba3d9a794ff0a.jpg",
      "width": 1024,
      "height": 1442
  },
  {
      "src": "/static/media/26.ceb62018b12c1dc5cbe9.jpg",
      "width": 1024,
      "height": 1442
  },
  {
      "src": "/static/media/29.7c31449ed858c373e8cc.jpg",
      "width": 1024,
      "height": 683
  },
  {
      "src": "/static/media/28.230738640c0d09d02890.jpg",
      "width": 1024,
      "height": 727
  },
  {
      "src": "/static/media/3.90e7c49ffe40a96d764d.jpg",
      "width": 1024,
      "height": 1457
  },
  {
      "src": "/static/media/30.b385361de0d07aa6d12a.jpg",
      "width": 1024,
      "height": 734
  },
  {
      "src": "/static/media/31.55c5b3938e1877733522.jpg",
      "width": 1024,
      "height": 734
  },
  {
      "src": "/static/media/32.7dacdbbd85cd5bc73dbd.jpg",
      "width": 1024,
      "height": 734
  },
  {
      "src": "/static/media/33.57e16fbf0c2825e4805e.jpg",
      "width": 1024,
      "height": 734
  },
  {
      "src": "/static/media/34.23d8e9143d6175adb7c1.jpg",
      "width": 1024,
      "height": 1417
  },
  {
      "src": "/static/media/36.551ff38f0f0a376b2896.jpg",
      "width": 1024,
      "height": 1378
  },
  {
      "src": "/static/media/35.74680e179e0acd293459.jpg",
      "width": 1024,
      "height": 1444
  },
  {
      "src": "/static/media/37.70f2a8e366d29ad60ba9.jpg",
      "width": 1024,
      "height": 1378
  },
  {
      "src": "/static/media/38.63ad828b421e17a1f936.jpg",
      "width": 1024,
      "height": 1444
  },
  {
      "src": "/static/media/39.56952dd725f5dbe5620b.jpg",
      "width": 1024,
      "height": 1378
  },
  {
      "src": "/static/media/4.be53c911466ce006b972.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/40.489956b52a76c6507ece.jpg",
      "width": 1024,
      "height": 1378
  },
  {
      "src": "/static/media/41.69b5e32b62089461bb47.jpg",
      "width": 1024,
      "height": 1464
  },
  {
      "src": "/static/media/42.52f47c73374e2d991b93.jpg",
      "width": 1024,
      "height": 1464
  },
  {
      "src": "/static/media/43.10365fd12aabbb9d739e.jpg",
      "width": 1024,
      "height": 1464
  },
  {
      "src": "/static/media/44.ad46233faa08d1e60da1.jpg",
      "width": 1024,
      "height": 1451
  },
  {
      "src": "/static/media/45.c7bc15cc2157d7f8e023.jpg",
      "width": 1024,
      "height": 1456
  },
  {
      "src": "/static/media/46.dc5aea4d2fea93f14c8d.jpg",
      "width": 1024,
      "height": 1451
  },
  {
      "src": "/static/media/47.469a0d700b6d619c0207.jpg",
      "width": 1024,
      "height": 1451
  },
  {
      "src": "/static/media/48.2a8dcffb3813243b7399.jpg",
      "width": 1024,
      "height": 1451
  },
  {
      "src": "/static/media/5.7f95fc60b0db04d3feac.jpg",
      "width": 1024,
      "height": 1457
  },
  {
      "src": "/static/media/50.40075c184a4583a091e9.jpg",
      "width": 1024,
      "height": 1363
  },
  {
      "src": "/static/media/49.478d4f22ca26c4d4f025.jpg",
      "width": 1024,
      "height": 1451
  },
  {
      "src": "/static/media/51.85a53743557edbae97a8.jpg",
      "width": 1024,
      "height": 1378
  },
  {
      "src": "/static/media/52.cfcd64bf9483c6f8ac6b.jpg",
      "width": 1024,
      "height": 1378
  },
  {
      "src": "/static/media/53.6421f72908bd793e3044.jpg",
      "width": 1024,
      "height": 1363
  },
  {
      "src": "/static/media/56.72ea09cd89d95559d236.jpg",
      "width": 1024,
      "height": 1497
  },
  {
      "src": "/static/media/55.352fa7fa2317055e3033.jpg",
      "width": 1024,
      "height": 1459
  },
  {
      "src": "/static/media/54.dff31c2016c529858e60.jpg",
      "width": 1024,
      "height": 1497
  },
  {
      "src": "/static/media/57.9b220d32504abf9bd4df.jpg",
      "width": 1024,
      "height": 1459
  },
  {
      "src": "/static/media/58.b854b1c56cb638e51128.jpg",
      "width": 1024,
      "height": 1497
  },
  {
      "src": "/static/media/59.001a49bbcccf73fa201f.jpg",
      "width": 1024,
      "height": 1497
  },
  {
      "src": "/static/media/6.bc9676ca8071a0e87882.jpg",
      "width": 1024,
      "height": 1457
  },
  {
      "src": "/static/media/60.5caa1ae4058ca4c866c8.jpg",
      "width": 1024,
      "height": 1497
  },
  {
      "src": "/static/media/61.6dfed2e2131de219eb0a.jpg",
      "width": 1024,
      "height": 1497
  },
  {
      "src": "/static/media/62.4840d936991a39949833.jpg",
      "width": 1024,
      "height": 1546
  },
  {
      "src": "/static/media/63.253f68aca37f6f29ce51.jpg",
      "width": 1024,
      "height": 1546
  },
  {
      "src": "/static/media/66.31dfc94ac87780c6f14d.jpg",
      "width": 1024,
      "height": 1546
  },
  {
      "src": "/static/media/64.70700a432ac3c94edac9.jpg",
      "width": 1024,
      "height": 1546
  },
  {
      "src": "/static/media/65.9c6688522da9abc8c35c.jpg",
      "width": 1024,
      "height": 1546
  },
  {
      "src": "/static/media/67.86b888c21c4ee2f9d170.jpg",
      "width": 1024,
      "height": 1447
  },
  {
      "src": "/static/media/68.ed07545ca5e5e4a505c3.jpg",
      "width": 1024,
      "height": 1475
  },
  {
      "src": "/static/media/69.64c5d0a88e51fece93a7.jpg",
      "width": 1024,
      "height": 1480
  },
  {
      "src": "/static/media/7.5e2538845596041764cb.jpg",
      "width": 1024,
      "height": 1457
  },
  {
      "src": "/static/media/70.105c5171da6e0f1b6769.jpg",
      "width": 1024,
      "height": 1480
  },
  {
      "src": "/static/media/71.565e1b3dac16e7d72b2f.jpg",
      "width": 1024,
      "height": 1480
  },
  {
      "src": "/static/media/72.664f6b7b652b8cb85f1c.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/74.14b01c9810d45e0f8cc1.jpg",
      "width": 1024,
      "height": 1446
  },
  {
      "src": "/static/media/73.0844e0e4144f41dc492e.jpg",
      "width": 1024,
      "height": 1480
  },
  {
      "src": "/static/media/75.e05ded22fec6fedd23c7.jpg",
      "width": 1024,
      "height": 1446
  },
  {
      "src": "/static/media/76.08e6619e80ff985bf0bb.jpg",
      "width": 1024,
      "height": 1446
  },
  {
      "src": "/static/media/77.d3990be0859e63a6bc37.jpg",
      "width": 1024,
      "height": 1488
  },
  {
      "src": "/static/media/78.aafae3873b659d217d9f.jpg",
      "width": 1024,
      "height": 1517
  },
  {
      "src": "/static/media/79.22fecf677687a2c53de6.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/8.1d4bf281e3c728a0f6f7.jpg",
      "width": 1024,
      "height": 1457
  },
  {
      "src": "/static/media/80.ed99762ebe2095f8969d.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/81.a64b9676a92cae97a5da.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/82.90cedfba783b6c83e569.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/83.4ca92d7d81aa535d814d.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/84.04616e109f1a46d7a251.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/85.fa74e27ea5c5ae0f1c8d.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/86.9acfbcfa0b199aa9ce4e.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/87.c629df5846146100bc6f.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/88.1f217937051c873a6c11.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/89.f78bda38fedfe3a0c092.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/9.4efab785e47ddc45eb37.jpg",
      "width": 1024,
      "height": 1457
  },
  {
      "src": "/static/media/90.e8ba30b6385ae0feb587.jpg",
      "width": 1024,
      "height": 1423
  },
  {
      "src": "/static/media/91.c837ecee8e532e90ec4b.jpg",
      "width": 1024,
      "height": 1423
  },
  {
      "src": "/static/media/92.0b563b86e94e9d804224.jpg",
      "width": 1024,
      "height": 1536
  },
  {
      "src": "/static/media/93.7d3cb8ef7687546fefe9.jpg",
      "width": 1024,
      "height": 1423
  },
  {
      "src": "/static/media/94.2ea70ad9d7185190f429.jpg",
      "width": 1024,
      "height": 1423
  },
  {
      "src": "/static/media/95.8ce655e562df51a71270.jpg",
      "width": 1024,
      "height": 1423
  },
  {
      "src": "/static/media/96.0d1624558192345e68d8.jpg",
      "width": 1024,
      "height": 1423
  },
  {
      "src": "/static/media/97.0a1661987cf15c7785f2.jpg",
      "width": 1024,
      "height": 1454
  },
  {
      "src": "/static/media/98.bb4a8f7dec9680fc8a96.jpg",
      "width": 1024,
      "height": 1423
  },
  {
      "src": "/static/media/99.01fef57cdf3afb391b17.jpg",
      "width": 1024,
      "height": 1423
  }
];