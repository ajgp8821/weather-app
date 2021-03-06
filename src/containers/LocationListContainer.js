import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList'
import { setCity } from './../actions';

class LocationListContainer extends Component {
    handleSelectedLocation = city => {
        console.log(`handleSelectedLocation ${city}`);
    
        this.props.setCity(city);
    };
    
    render() {
        return (
            <LocationList
              cities={this.props.cities}
              onSelectionLocation={this.handleSelectedLocation}
            />
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value)) 
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);