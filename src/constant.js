const ImageListener={
    constructor(imageElement, imageURL){
        this.imageElement = imageElement;
        this.imageURL = imageURL;
        this.imageElement.addEventListener('load', this.handleImageLoad.bind(this));
    }
}