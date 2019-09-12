import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux'

import { updateStoreAC } from '../actions'

const AdditionalFeatures = props => {
  console.log(props, 'addfeatures props')
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state, 'mSTP addfeatures log')
  return {
    store: state.store
  }
}

export default connect(
  mapStateToProps,
  { updateStoreAC }
)(AdditionalFeatures);
