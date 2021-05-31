// const header = document.getElementById("header")

// const flightPath = {
//   curviness: 1,
//   autoRotate: true,
//   values: [
//     {
//       x: 100,
//       y: -20
//     },
//     {
//       x: 1000,
//       y: 100
//     }
//   ]
// }

// const tween = new TimelineLite()

// tween.add(
//   TweenLite.to('.paper-plane', 1, {
//     bezier: flightPath,
//     ease: Power1.easeInOut
//   })
// )


// const headerFade = anime.timeline({ autoplay: true })
// let headerFadeHero = {
//   targets: 'header',
//   translateY: {
//     value: [50, 0]
//   },
//   opacity: [0, 1],
//   duration: 1500,
//   easing: "easeOutSine",
//   delay: anime.stagger(400)
// }
// headerFade.add(headerFadeHero)



// const tHero = anime.timeline({ autoplay: false })
// let animateHero = {
//   targets: '#info-section',
//   translateY: {
//     value: [50, 0]
//   },
//   opacity: [0, 1],
//   duration: 1500,
//   easing: "easeOutSine",
//   delay: anime.stagger(400)
// }
// tHero.add(animateHero)





// const controller = new ScrollMagic.Controller()

// const headerCollapse = new ScrollMagic.Scene({
//   triggerElement: 'header',
//   duration: 1000,
//   triggerHook: 1
// })
// .addTo(controller)
// .addIndicators()
// .on("enter", (event) => {
//   tHero.play()

// })


// const infoScene = new ScrollMagic.Scene({
//   triggerElement: '#canvas',
//   duration: 3000,
//   triggerHook: 0

// })
// // .setTween(tween)
// .addIndicators()
// // .setPin('.animation')
// .addTo(controller)
// .on("enter", (event) => {
//   console.log("LETS GO")
//   console.log(event)
//   // header.classList.add("collapsed")
//   tHero.play()
// })
// .on("leave", () => {
//   console.log("OMG")
// })

// const playGardenWars = new ScrollMagic.Scene({
//   triggerElement: '#projects',
//   duration: 3000,
//   triggerHook: 0

// })
// // .setTween(tween)
// .addIndicators()
// .setPin('#projects')
// .addTo(controller)
// .on("enter", (event) => {
//   console.log("LETS GO")
//   console.log(event)
//   // header.classList.add("collapsed")
//   tHero.play()
// })
// .on("leave", () => {
//   console.log("OMG")
// })

// const projectSection = document.getElementById('projects')
// const video = projectSection.querySelector('video')
// const text = projectSection.querySelector('h1')



const gwCanvas = document.getElementById('garden-wars')
const gwContext = gwCanvas.getContext('2d')

const frameCount = 118




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
  return `assets/videogif/ezgif-frame-${index}.jpg`

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

  // gwContext.drawImage(img, 0, 0);
}

const updateImage = (index) => {
  img.src = currentFrame(index)
  scaleToFit(img);

  // gwContext.drawImage(img, 0, 0)
}

// window.addEventListener('scroll', () => {  
//   // const scrollTop = html.scrollTop;
//   // const maxScrollTop = html.scrollHeight - window.innerHeight;
//   // const scrollFraction = scrollTop / maxScrollTop;
//   const frameIndex = Math.min(
//     frameCount - 1,
//     Math.ceil(0 * 3)
//   );
  
//   requestAnimationFrame(() => updateImage(frameIndex + 1))
// });

preloadImages()
// console.log(images)

const projectSection = document.getElementById('projects')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: projectSection,
  triggerHook: 0
})
.addIndicators()
.setPin(projectSection)
.addTo(controller)

// video animation
let stopFactor = 0.1;
let scrollPosition = 0;
let delay = 0;

scene.on('update', (e) => {
  let newFrame = (parseInt((e.scrollPos - scene.triggerPosition()) / 50))
  if (newFrame > 0 && newFrame < frameCount)
  updateImage(newFrame)
  // console.log(e.scrollPos / 100 - 1)
  // updateImage(e.scrollPos / 1000 - 1)
  // scrollPosition = e.scrollPos / 1000 - 1
  // video.currentTime = scrollPosition
  // console.log(scrollPosition)
})

// setInterval(() => {
//   delay += (scrollPosition - delay) * stopFactor
//   // console.log(scrollPosition, delay)
//   // video.currentTime = delay
// }, 33.3)







var c = document.getElementById("canvas");
var ctx = c.getContext("2d");



function resize() {
    var box = c.getBoundingClientRect();
    c.width = box.width;
    c.height = box.height;
}

var light = {
    x: 160,
    y: 200
}

var colors = ["#CDCDCD"];

function drawLight() {
    ctx.beginPath();
    ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
    var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
    gradient.addColorStop(0, "#3b4654");
    gradient.addColorStop(1, "#2c343f");
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
    // gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
    // gradient.addColorStop(0, "#fff");
    // gradient.addColorStop(1, "#3b4654");
    // ctx.fillStyle = gradient;
    // ctx.fill();
}

function Box() {
    this.half_size = Math.floor((Math.random() * 50) + 1);
    this.x = Math.floor((Math.random() * c.width) + 1);
    this.y = Math.floor((Math.random() * c.height) + 1);
    this.r = Math.random() * Math.PI;
    this.shadow_length = 2000;
    this.color = colors[Math.floor((Math.random() * colors.length))];
  
    this.getDots = function() {

        var full = (Math.PI * 2) / 4;


        var p1 = {
            x: this.x + this.half_size * Math.sin(this.r),
            y: this.y + this.half_size * Math.cos(this.r)
        };
        var p2 = {
            x: this.x + this.half_size * Math.sin(this.r + full),
            y: this.y + this.half_size * Math.cos(this.r + full)
        };
        var p3 = {
            x: this.x + this.half_size * Math.sin(this.r + full * 2),
            y: this.y + this.half_size * Math.cos(this.r + full * 2)
        };
        var p4 = {
            x: this.x + this.half_size * Math.sin(this.r + full * 3),
            y: this.y + this.half_size * Math.cos(this.r + full * 3)
        };

        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    }
    this.rotate = function() {
        var speed = (60 - this.half_size) / 20;
        this.r += speed * 0.002;
        this.x += speed;
        this.y += speed;
    }
    this.draw = function() {
        var dots = this.getDots();
        ctx.beginPath();
        ctx.moveTo(dots.p1.x, dots.p1.y);
        ctx.lineTo(dots.p2.x, dots.p2.y);
        ctx.lineTo(dots.p3.x, dots.p3.y);
        ctx.lineTo(dots.p4.x, dots.p4.y);
        ctx.fillStyle = this.color;
        ctx.fill();


        if (this.y - this.half_size > c.height) {
            this.y -= c.height + 100;
        }
        if (this.x - this.half_size > c.width) {
            this.x -= c.width + 100;
        }
    }
    this.drawShadow = function() {
        var dots = this.getDots();
        var angles = [];
        var points = [];

        for (dot in dots) {
            var angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
            var endX = dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
            var endY = dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
            angles.push(angle);
            points.push({
                endX: endX,
                endY: endY,
                startX: dots[dot].x,
                startY: dots[dot].y
            });
        };

        for (var i = points.length - 1; i >= 0; i--) {
            var n = i == 3 ? 0 : i + 1;
            ctx.beginPath();
            ctx.moveTo(points[i].startX, points[i].startY);
            ctx.lineTo(points[n].startX, points[n].startY);
            ctx.lineTo(points[n].endX, points[n].endY);
            ctx.lineTo(points[i].endX, points[i].endY);
            ctx.fillStyle = "#2c343f";
            ctx.fill();
        };
    }
}

var boxes = [];

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawLight();

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].rotate();
        boxes[i].drawShadow();
    };
    for (var i = 0; i < boxes.length; i++) {
        collisionDetection(i)
        boxes[i].draw();
    };
    requestAnimationFrame(draw);
    // ctx.font = "20px Montserrat";
    // ctx.fillStyle = "red";
    // ctx.textAlign = "center";
    // ctx.fillText("Hello, I'm Parker Cooper", canvas.width/2, canvas.height/2);
}

resize();
draw();

while (boxes.length < 9) {
    boxes.push(new Box());
}

window.onresize = resize;
c.onmousemove = function(e) {
    light.x = e.offsetX == undefined ? e.layerX : e.offsetX;
    light.y = e.offsetY == undefined ? e.layerY : e.offsetY;
}


function collisionDetection(b){
	for (var i = boxes.length - 1; i >= 0; i--) {
		if(i != b){	
			var dx = (boxes[b].x + boxes[b].half_size) - (boxes[i].x + boxes[i].half_size);
			var dy = (boxes[b].y + boxes[b].half_size) - (boxes[i].y + boxes[i].half_size);
			var d = Math.sqrt(dx * dx + dy * dy);
			if (d < boxes[b].half_size + boxes[i].half_size) {
			    boxes[b].half_size = boxes[b].half_size > 1 ? boxes[b].half_size-=1 : 1;
			    boxes[i].half_size = boxes[i].half_size > 1 ? boxes[i].half_size-=1 : 1;
			}
		}
	}
}

function goToSection(section) {
  console.log(section)
}


document.addEventListener('scroll', () => {
  const canvasHeight = document.getElementById('canvas').getBoundingClientRect().height
  const navbar = document.getElementById("navigation-bar")
  const socialLinks = document.getElementById("social-links")
  const difference = canvasHeight - window.scrollY
  if (difference <= 250) {
    socialLinks.style.opacity = (difference / 300) - 0.25
    if (difference <= 0) {
      navbar.classList.add("fixed")
    } else {
      navbar.classList.remove("fixed")
    }
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