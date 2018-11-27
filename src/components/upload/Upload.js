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
  accpet: PropTypes.string,
  action: PropTypes.string,
  directory: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  defaultFileList: PropTypes.arrayOf(PropTypes.object),
  disabled: PropTypes.bool,
  fileList: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.object,
  listType: PropTypes.oneOf(['text', 'picture', 'picture-card']),
  multiple: PropTypes.bool,
  name: PropTypes.string,
  showUploadList: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      showPreviewIcon: PropTypes.bool,
      showRemoveIcon: PropTypes.bool,
    }),
  ]),
  supportServerRender: PropTypes.bool,
  withCredentials: PropTypes.bool,
  openFileDialogOnClick: PropTypes.bool,
  beforeUpload: PropTypes.func,
  onChange: PropTypes.func,
  onPreview: PropTypes.func,
  onRemove: PropTypes.func,
};

_Upload.defaultProps = {
  accpet: null,
  action: null,
  directory: false,
  data: null,
  defaultFileList: null,
  disabled: false,
  fileList: null,
  headers: null,
  listType: 'text',
  multiple: false,
  name: 'file',
  showUploadList: true,
  supportServerRender: false,
  withCredentials: false,
  openFileDialogOnClick: true,
  beforeUpload: null,
  onChange: null,
  onPreview: null,
  onRemove: null,
};
