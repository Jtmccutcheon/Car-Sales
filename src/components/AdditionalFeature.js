import React from 'react';
import { connect } from 'react-redux'

import { updateStoreAC } from '../actions'

const AdditionalFeature = props => {

  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log(item)
  };

  const onClick = e => {
    console.log(e, 'onclick add')
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={onClick}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default AdditionalFeature;

const mapStateToProps = state => {
  console.log(state, 'mSTP addfeatures log')
  return {
    store: state.store
  }
}

export default connect(
  mapStateToProps,
  { updateStoreAC }
)(AdditionalFeature);