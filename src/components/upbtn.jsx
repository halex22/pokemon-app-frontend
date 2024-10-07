import { TopArrowSVG } from "./svg/arrow";
import { useState, useEffect } from "react";



export function UpBtn() {

  const [isNavVisible, setIsNavVisible] = useState(false)

  useEffect(() => {
    const navElement = document.querySelector('nav')
    if (!navElement) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>{ setIsNavVisible(entry.isIntersecting)})
    })

    observer.observe(navElement)

    return () => {
      if (navElement) observer.unobserve(navElement)
    }
  }, [])

  const moveTo = () => {
    window.scrollTo({top:0, behavior: 'smooth'})
  }

  return (
    <>
    {!isNavVisible && (
      <div className="ms-4 sticky top-12 z-20 group">
        <button className="border-2 rounded-2xl bg-red-500" onClick={moveTo}>
          <TopArrowSVG />
        </button>
        <span className="group-hover:block hidden ms-1 font-bold">Back to top</span>

      </div>
    )}      
    </>
  )
}