import { gsap } from "gsap"
import { useEffect } from "react"


function App() {
  useEffect(() => {
    gsap.set("#demo", { scale: 0.7 })
  }, [])

  return (
    <>
      <div id="demo">
        <img id="title" src="images/meet-the-freds.png" alt="" />
        <div id="freds">
          <img src='images/fred.svg' title='1' />
          <img src='images/fred-purple.svg' title='2' />
          <img src='images/fred-blue.svg' title='3' />
          <img src='images/fred-pink.svg' title='4' />
          <img src='images/fred-orange.svg' title='5' />
          <img src='images/fred-red.svg' title='6' />
        </div>
        <img id="time" src="images/time.png" title='time' />
      </div>
      <button onClick={animate}>animate</button>
    </>
  )
}

export default App

const animate = () => {
  gsap.timeline()
    .from("#demo", {duration: 1, opacity: 0})
    .from("#title", {scale: 0, ease: "back"})
    .from("#freds img", {y: 160, stagger: 0.1, duration: 0.8, ease: "back"})
    .from("#time", {xPercent: 100, duration: 0.2})
}