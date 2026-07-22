import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollWorld() {
  useGSAP(() => {
    ScrollTrigger.refresh()
  }, [])

  const createScrollTimeline = (config) => {
    const { trigger, start = 'top 80%', end = 'bottom 20%', scrub = 1, ...vars } = config
    return gsap.timeline({
      scrollTrigger: { trigger, start, end, scrub, ...vars },
    })
  }

  const createParallax = (element, speed = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }

  const createReveal = (elements, config = {}) => {
    const { stagger = 0.1, y = 50, opacity = 0, duration = 0.8, ease = 'power3.out' } = config
    return gsap.from(elements, {
      y,
      opacity,
      duration,
      ease,
      stagger,
      scrollTrigger: {
        trigger: elements[0]?.parentElement || elements[0],
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  }

  const createPin = (element, config = {}) => {
    return ScrollTrigger.create({
      trigger: element,
      pin: true,
      start: 'top top',
      end: `+=${config.height || '300%'}`,
      pinSpacing: config.pinSpacing !== false,
      ...config,
    })
  }

  return {
    createScrollTimeline,
    createParallax,
    createReveal,
    createPin,
    gsap,
    ScrollTrigger,
  }
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useGSAP(() => {
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => setProgress(self.progress),
    })
    return () => st.kill()
  }, [])
  return progress
}

export function useElementVisibility(threshold = 0.1) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useGSAP(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

import { useState, useRef } from 'react'