import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="games-card-rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number };

Rating.defaultProps = {
  rating: 'undefined',
};

export default Rating;