"use strict";
class ImageRenderer {
  constructor(imageArray) {
    this._referenceArray = imageArray;
  }

  add(imageURL) {
    this._referenceArray.push(imageURL);
  }

  remove(imageURL) {
    let indexToDelete = this._referenceArray.indexOf(imageURL);

    if (indexToDelete !== -1) {
      this._referenceArray.splice(indexToDelete, 1);
    }
  }

  render(domObject) {
    let htmlString = "";
    let referenceTemplate = "<div><img src='{0}'></div>";

    for (let i = 0; i < this._referenceArray.length; i++) {
      if (this._referenceArray[i]) {
        let replacedStr = referenceTemplate.replace("{0}", this._referenceArray[i]);
        htmlString += replacedStr;
      }
    }

    domObject.innerHTML = htmlString;
  }
}
