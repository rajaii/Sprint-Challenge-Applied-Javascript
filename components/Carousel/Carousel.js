class Carousel {
    constructor(carou) {
        this.carou = carou;
        this.left = carou.querySelector('.left-button');
        this.right = carou.querySelector('.right-button');
        this.image = carou.querySelectorAll('.img');
        this.index = Array.from(this.image).forEach(img => index = img)
        this.left.addEventListener('click', this.handleLeftClick.bind(this));
        this.right.addEventListener('click', this.handleRightClick.bind(this));
    }
    handleLeftClick() {
        this.image[this.index].style.display = 'flex';
    }
    handleRightClick() {
        this.img.style.display = 'none';
    }
}

let carousel = document.querySelectorAll('.carousel');
//console.log(carousel);


carousel.forEach(carou => new Carousel(carou));






/* If You've gotten this far, you're on your own! Although we will give you some hints:
    //1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    //2. You will need to grab a reference to all of the images
    //3. Create a current index
    //4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
