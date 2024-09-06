

export const fadeInOnScroll = (delay, duration) => ({
  hidden: {opacity: 0}, // initial state: fully transparent
  visible: {
    opacity: 1,         // final state: fully visible 
    transition: {
      delay,
      duration,
      ease: [0.42, 0, 0.58, 1],
    },
  },
})

export const fadeInSpring = (delay, duration) => ({
  hidden: { opacity: 0, y: 60, scale: 0.88 }, 
  visible: {
    opacity: 1,
    sacle: 1,         
    transition: {
      delay,
      duration,
      ease: [0.6, 0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 100,
    },
  },
})