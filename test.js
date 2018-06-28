function RenderTest() {
  element = document.getElementById('testDiv');
  let imagesArray = [];
  imagesArray[0] = "https://dota2.ru/img/uploads/18/06/1050555.jpg"
  imagesArray[1] = "https://dota2.ru/img/uploads/18/06/1050555.jpg"
  imagesArray[2] = "https://dota2.ru/img/uploads/18/06/1050555.jpg"
  imagesArray[3] = "https://dota2.ru/img/uploads/18/06/1050555.jpg"
  imagesArray[4] = "https://dota2.ru/img/uploads/18/06/1050555.jpg"

  let visual = new ImageRenderer(arrayWithImages);
  visual.add("https://dota2.ru/img/uploads/18/06/1050555.jpg");
  visual.remove("https://dota2.ru/img/uploads/18/06/1050555.jpg");
  visual.remove("https://dota2.ru/img/uploads/18/06/1050555.jpg");
  visual.render(element);
}

GetElement();
