import React, { ReactNode } from 'react';
import './FadeIn.css';


// Required props
interface FadeInRequiredProps {
  direction: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode
}
// Optional props
interface FadeInOptionalProps {
  distance?: string;
  delay?: string
}

interface FadeInProps extends FadeInRequiredProps, FadeInOptionalProps {

}
function FadeIn({ direction, distance = '5', children, delay}: FadeInProps) {


  const style = {
    left: {

      isHidden: {
        transform: `translateX(-${distance}vw)`

      }

    },

    right: {

      isHidden: {
        transform: `translateX(${distance}vw)`

      }

    },

    bottom: {

      isHidden: {
        transform: `translateY(${distance}vh)`

      }

    },
    top: {
      
      isHidden: {
        transform: `translateY(-${distance}vh)`

      }

    }
  }
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) { // Make sure to check if the ref is available before observing
      observer.observe(domRef.current);
    }
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={isVisible ? delay? {transitionDelay: delay}: {} : style[direction].isHidden}
      ref={domRef}
    >
      {children}
    </div>
  );
}




export default FadeIn;