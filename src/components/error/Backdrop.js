import React from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";

const Backdrop = props => (
  <div className="Backdrop" onClick={() => props.onLeaveErrorMessage()}></div>
);

const mapDispatchToProps = dispatch => {
  return {
    onLeaveErrorMessage: () => dispatch(actions.leaveErrorMessage())
  };
};

export default connect(null, mapDispatchToProps)(Backdrop);
