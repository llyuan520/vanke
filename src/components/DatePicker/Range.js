/*
 * @Author: zhouzhe 
 * @Date: 2018-10-09 16:21:26 
 * @Description: '日期选择组件--区间选择'
 * @Last Modified by: zhouzhe
 * @Last Modified time: 2018-10-10 10:04:16
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

class RangePickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {}

  handleChange = (date, dateString) => {
    const { onChange } = this.props;
    const value = date.length === 0 ? undefined : dateString;
    onChange(value);
  };

  render() {
    return (
      <RangePicker
        format={dateFormat}
        placeholder={['开始时间', '结束时间']}
        onChange={this.handleChange}
        style={{ width: '100%' }}
      />
    );
  }
}

RangePickerComponent.propTypes = {
  onChange: PropTypes.func,
};

RangePickerComponent.defaultProps = {
  onChange: () => {},
};

export default RangePickerComponent;
