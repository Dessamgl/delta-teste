import { Carousel as CarouselComponent } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Carousel() {

  return (
    <CarouselComponent 
      infiniteLoop useKeyboardArrows 
      autoPlay 
      showArrows={false} 
      showThumbs={false} 
      showStatus={false}
    >
      <div>
        <img src="/images/slide1.png" alt="slide 1" />
      </div>
      <div>
        <img src="/images/slide2.png" alt="slide 2" />
      </div>
      <div>
        <img src="/images/slide3.png" alt="slide 3" />
      </div>
    </CarouselComponent>
  )
}