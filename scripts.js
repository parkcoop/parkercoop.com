
const flightPath = {
  curviness: 1,
  autoRotate: true,
  values: [
    {
      x: 100,
      y: -20
    },
    {
      x: 1000,
      y: 100
    }
  ]
}

const tween = new TimelineLite()

tween.add(
  TweenLite.to('.paper-plane', 1, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
)


const tHero = anime.timeline({ autoplay: false })
let animateHero = {
  targets: '.info-section',
  translateY: {
    value: [50, 0]
  },
  opacity: [0, 1],
  duration: 1500,
  easing: "easeOutSine",
  delay: anime.stagger(400)
}
tHero.add(animateHero)





const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
  triggerElement: '.animation',
  duration: 3000,
  triggerHook: 0

})
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller)
.on("enter", () => {
  console.log("LETS GO")
  tHero.play()
})