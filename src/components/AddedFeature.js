import React from 'react';




const AddedFeature = props => {
  console.log(props, 'addedfeature props')
  return (
    <li>
      <p>hi</p>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

// const mapStateToProps = state => {
//   console.log(state, 'addedfeature mSTP')
// }


// export default connect(
//   mapStateToProps,
//   { updateStoreAC }
// )(AddedFeature);






