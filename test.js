function Test() {
  element = document.getElementById('testDiv');
  let imagesArray = [];
  imagesArray[0] = "https://dota2.ru/img/uploads/18/06/1050555.jpg"
  imagesArray[1] = "https://dota2.ru/img/uploads/18/06/1050555.jpg"
  imagesArray[2] = "https://dota2.ru/img/uploads/18/06/1050555.jpg"
  imagesArray[3] = "https://dota2.ru/img/uploads/18/06/1050555.jpg"
  imagesArray[4] = "https://dota2.ru/img/uploads/18/06/1050555.jpg"
  console.log("Length of the array before sending it to imageRenderer: " + imagesArray.length);
  let imageRenderer = new ImageRenderer(imagesArray);

  imageRenderer.add("https://dota2.ru/img/uploads/18/06/1050555.jpg");
  console.log("One element was added to the array. The current number of elements in the array: " + imagesArray.length);
  imageRenderer.remove("https://dota2.ru/img/uploads/18/06/1050555.jpg");
  imageRenderer.remove("https://dota2.ru/img/uploads/18/06/1050555.jpg");
  console.log("Two elements of the array were removed. The current number of elements in the array: " + imagesArray.length);
  imageRenderer.render(element);
  console.log("All images are displayed on the page. Number of images on the page: " + imagesArray.length);
}

Test();
