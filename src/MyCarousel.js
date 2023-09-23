import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MyCarousel.css';

function MyCarousel() {
 return (
  <div className="carousel-container">
   <Carousel
    showThumbs={false} // You can customize carousel options here
    showStatus={false}
    infiniteLoop={true}
    className="custom-carousel"
   >
    <div className="card">
     <img src="/images/Green Prawn Curry.jpg" alt="Green Prawn Curry" />
     <div className="description">
      <h3>Green Prawn Curry</h3>
      <h4>Rice Dishes</h4>
     </div>
    </div>

    <div className="card">
     <img src="/images/FriedRice.jpg" alt="Fried Rice" />
     <div className="description">
      <h3>Fried Rice</h3>
      <h4>Rice Dishes</h4>
     </div>
    </div>

    <div className="card">
     <img src="/images/Chopped-Salad.jpg" alt="Chopped Salad" />
     <div className="description">
      <h3>Chopped Salad</h3>
      <h4>Salad</h4>
     </div>
    </div>

    <div className="card">
     <img src="/images/FriedNoodle.jpg" alt="Fried Noodle" />
     <div className="description">
      <h3>Fried Noodle</h3>
      <h4>Noodle Dishes</h4>
     </div>
    </div>

   </Carousel>
  </div>
 );
}

export default MyCarousel;





