import { FaStar, FaStarHalf } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half" />);
    }

    return stars;
  };

  return (
    <div className="testimonial-card">
      <div className="d-flex gap-20 justify-between flex-column-t">
        <div className="top-right">
          <img className="avatar" src={testimonial.avatar} alt={testimonial.name} />
          <div className="user-info">
            <div className="font-24 main-bold-font primary-color-darker">
              {testimonial.name}
            </div>
            <div className="font-16 main-regular-font role">{testimonial.role}</div>
          </div>
        </div>

        <div className="stars" aria-label={`Rating ${testimonial.rating} out of 5`}>
          {renderStars(testimonial.rating)}
        </div>
      </div>

      <p className="quote">{testimonial.quote}</p>

      <div className="badge">
        <FiMessageSquare size={32} />
      </div>
    </div>
  );
};

export default TestimonialCard;
