gsap.registerPlugin(ScrollTrigger);
const revealElements = document.querySelectorAll('.textreveal-text')

revealElements.forEach((element) => {
    gsap.to(element, {
        yPercent: -100,
        duration: 2,
        delay: .25,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: element,
            start: 'top bottom'
        }
    })
})