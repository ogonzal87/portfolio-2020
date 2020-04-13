const easing = [0.6, -0.05, 0.01, 0.99]

const ogAnimation = {
  containerStagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  },

  fadeUpItem: {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  },

  fadeItem: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2.25,
        ease: easing,
      },
    },
  },

  hover: {
    scale: 1.02,
  },

  tap: {
    scale: 0.98,
  },
}

export default ogAnimation
