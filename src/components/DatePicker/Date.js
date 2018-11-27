/*
 * @Author: zhouzhe 
 * @Date: 2018-10-09 16:21:26 
 * @Description: '日期选择组件'
 * @Last Modified by: zhouzhe
 * @Last Modified time: 2018-10-10 10:19:55
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

const dateFormat = 'YYYY-MM-DD';

class DatePickerComponent extends React.Component {
  constructor(props) {
    super(props);
    // const value = props.value || undefined;
    this.state = {
      // dateValue: value,
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
    // const value = dateString === '' ? undefined : dateString;
    // this.setState({
    //   dateValue: value,
    // });
    // console.log('moment(value).format(dateFormat)', moment(dateString).format(dateFormat))
    onChange(dateString);
  };

  render() {
    // const { dateValue } = this.state;
    const { showToday, placeholder } = this.props;
    return (
      <DatePicker
        format={dateFormat}
        onChange={this.handleChange}
        style={{ width: '100%' }}
        placeholder={placeholder}
        showToday={showToday}
      />
    );
  }
}

DatePickerComponent.propTypes = {
  onChange: PropTypes.func,
  /** 默认值 */
  // value: PropTypes.string,
  /** 是否展示“今天”按钮 */
  showToday: PropTypes.bool,
  /** 提示语 */
  placeholder: PropTypes.string,
};

DatePickerComponent.defaultProps = {
  onChange: () => {},
  showToday: false,
  // value: undefined,
  placeholder: '请选择日期',
};

export default DatePickerComponent;
