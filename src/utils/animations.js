import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps = {}) => {
    if (!target) {
        console.error("GSAP Animation Error: Target is not defined.");
        return;
    }

    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            // Spread scrollProps first so they can override defaults
            ...scrollProps,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
        },
    });
};
