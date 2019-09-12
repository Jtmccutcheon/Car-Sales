import React from 'react';

import AddedFeature from './AddedFeature';
import { connect } from 'react-redux'

import { updateStoreAC } from '../actions'

const AddedFeatures = props => {
  console.log(props, 'addedfeatures props')
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state, 'addedfeatures mSTP')
  return {
    car: state.car
  }
}

export default connect(
  mapStateToProps,
  { updateStoreAC }
)(AddedFeatures);
