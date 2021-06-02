const gwCanvas = document.getElementById('garden-wars')
const gwContext = gwCanvas.getContext('2d')

const frameCount = 80




function scaleToFit(img){
  // get the scale
  var scale = Math.min(gwCanvas.width / img.width, gwCanvas.height / img.height);
  // get the top left position of the image
  var x = (gwCanvas.width / 2) - (img.width / 2) * scale;
  var y = (gwCanvas.height / 2) - (img.height / 2) * scale;
  gwContext.drawImage(img, x, y, img.width * scale, img.height * scale);
}


const currentFrame = (index) => {
  index = (index).toString()
  const zerosToAdd = 3 - index.length
  for (let i = 0; i < zerosToAdd; i++ ) {
    index = '0' + index
  }
  // console.log(index)
  const deviceFolder = document.body.clientWidth > document.body.clientHeight ? 'desktop' : 'phone'
  return `assets/${deviceFolder}/ezgif-frame-${index}.jpg`

}

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image()
    
    img.src = currentFrame(i)
  }
}

const img = new Image()
img.src = currentFrame(1)
gwCanvas.width = document.body.clientWidth
gwCanvas.height = document.body.clientWidth > 991 ? document.body.clientHeight : screen.height
img.width = gwCanvas.width
img.height = gwCanvas.height
img.onload = function() {
  scaleToFit(this);
}

const updateImage = (index) => {
  img.src = currentFrame(index)
  scaleToFit(img);

}

preloadImages()

const projectSection = document.getElementById('projects')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 3500,
  triggerElement: projectSection,
  triggerHook: 0
})
// .addIndicators()
.setPin(projectSection)
.addTo(controller)




const projectsHeader = document.getElementById('projects-header')
const gwTitle = document.getElementById('garden-wars-title')

scene.on('update', (e) => {
  let newFrame = (parseInt((e.scrollPos - scene.triggerPosition()) / 50))
  if (newFrame > 0 && newFrame < frameCount) {
    if (newFrame > 10) {
      gwTitle.classList.add('condensed')
    } else {
      gwTitle.classList.remove('condensed')
    }
    projectsHeader.classList.add('faded')
    updateImage(newFrame)
  } else {
    projectsHeader.classList.remove('faded')
  }
})


let idle = true;

document.addEventListener('scroll', () => {
  idle = false;
  const canvasHeight = document.getElementById('canvas').getBoundingClientRect().height
  const navbar = document.getElementById("navigation-bar")
  const socialLinks = document.getElementById("social-links")
  const difference = canvasHeight - window.scrollY
  if (difference <= 250) {
    socialLinks.style.opacity = (difference / 300) - 0.25
    // if (difference <= 0) {
    //   navbar.classList.add("fixed")
    // } else {
    //   navbar.classList.remove("fixed")
    // }
  } else {
    socialLinks.style.opacity = 1;
  }
}, true)


var options = {
  strings: ['creating^50 <b>beautiful</b>^50 software.', 'writing <b>testable</b>^50 code.', 'architecting <b>scalable</b>^50 solutions.', 'crafting <b>fun</b> games.', 'developing <b>cross-platform</b> apps.', '<i>all things code^400.^400.^400.</i>'],
  typeSpeed: 60,
  loop: true
};

var typed = new Typed('#typed', options);

function readMore() {
  window.scrollTo({top: window.innerHeight})
}

function checkIdle() {
  document.getElementById('scroll-down').classList.remove('idle-alert')
  setTimeout(() => {
    if (idle === true) {
      document.getElementById('scroll-down').classList.add('idle-alert')
      setTimeout(() => {
        checkIdle()
      }, 1000);
    }
  }, 5000);
}
checkIdle()