import React, { PureComponent } from 'react';
import { Upload } from 'antd';
import PropTypes from 'prop-types';

export default class _Upload extends PureComponent {
  render() {
    const { children } = this.props;
    return <Upload {...this.props}>{children}</Upload>;
  }
}

_Upload.propTypes = {
  action: PropTypes.string,
};

_Upload.defaultProps = {
  action: null,
};
