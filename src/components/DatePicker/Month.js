/*
 * @Author: zhouzhe 
 * @Date: 2018-10-09 16:21:26 
 * @Description: '日期选择组件--选择月份' 
 * @Last Modified by: zhouzhe
 * @Last Modified time: 2018-10-10 10:20:03
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

const { MonthPicker } = DatePicker;
const monthFormat = 'YYYY-MM';

class MonthPickerComponent extends React.Component {
  constructor(props) {
    super(props);
    // const value = props.value || undefined;
    this.state = {
      // dateValue: undefined,
    };
  }

  componentWillReceiveProps() {
    // if ('value' in nextProps) {
    //   const { value } = nextProps;
    //   this.setState({ dateValue: value });
    // }
  }

  handleChange = (date, dateString) => {
    const { onChange } = this.props;
    // const { dateValue } = this.props;
    // const value = dateString === '' ? undefined : dateString;
    // this.setState({
    //   dateValue: value,
    // });
    onChange(dateString);
  };

  render() {
    // const { dateValue } = this.state;
    return (
      <MonthPicker
        format={monthFormat}
        onChange={this.handleChange}
        // value={dateValue === undefined ? undefined : moment(dateValue, monthFormat)}
        style={{ width: '100%' }}
      />
    );
  }
}

MonthPickerComponent.propTypes = {
  /** 时间发生变化的回调，发生在用户选择时间时 */
  onChange: PropTypes.func,
  /** 默认值 */
  // value: PropTypes.string,
};

MonthPickerComponent.defaultProps = {
  onChange: () => {},
  // value: undefined,
};

export default MonthPickerComponent;
