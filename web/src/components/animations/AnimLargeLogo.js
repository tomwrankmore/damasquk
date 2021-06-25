import gsap from 'gsap';
import scrollTrigger from 'gsap/all';

gsap.registerPlugin(scrollTrigger);

const AnimLargeLogo = (Container, Logo) => {
  const imgAnim = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: Container,
      start: 'top-=81 bottom',
      end: 'bottom top',
      toggleActions: 'play none none reverse',
      scrub: 1,
    },
  });
  imgAnim.from(Logo, {
    autoAlpha: 1,
    y: 0,
  });
  imgAnim.to(
    Logo,
    {
      y: 1200,
      autoAlpha: 0,
    },
    '>'
  );
};

export default AnimLargeLogo;
