let movies = [
  {
    name: "Wakanda Forever",
    des:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers after the death of beloved King T’Challa.",

    image: "images/slider1.png"
  },
  {
    name: "The Legend",
    des:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers after the death of beloved King T’Challa.",

    image: "images/slider2.png"
  },
  {
    name: "The Night Manager",
    des:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers after the death of beloved King T’Challa.",

    image: "images/slider3.png"
  }
];

const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0;

const createslide = () => {
  if(slideIndex>=movies.length){
    slideIndex=0;
  }

  let slide=document.createElement('div');
  var imgElement=document.createElement('img');
  let contant=document.createElement('div');
  let h1=document.createElement('h1');
  let p=document.createElement('p');

  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  contant.appendChild(p);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);
  imgElement.src=movies[slideIndex].image;
  slideIndex++

  slide.className='slider';
  contant.className='slide-container';
  h1.className='Movie-title';
  p.className='Movie-det';

  sliders.push(slide);

  if(slide.length)
  {
    sliders[0].style.marginleft =   `calc(-${100 *
      30 * (slider.length) 
    }px)`;
  }
}

for (let i=0; i<3;i++){
  createslide();


setInterval(()=>{
  createslide(); 
}, 3000);