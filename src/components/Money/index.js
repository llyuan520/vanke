import React, { Component, Fragment } from 'react';
import t from 'prop-types';

class Percent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editStatus: false,
      value: this.props.value,
    };
  }

  getValue() {
    const { decimal, value } = this.props;

    const size = Math.pow(10, decimal);
    const v = Math.round(value * size) / size;
    const str = v.toString().split('.');
    if (decimal && str[1]) {
      const zero = Array(decimal)
        .fill('0')
        .join('');
      str[1] += zero;
      str[1] = str[1].substring(0, zero.length);
    }
    const n = str[0].split('');
    for (let i = n.length; i > 0; i--) {
      if (!(i % 3) && n.length - i) {
        n[n.length - i] = ',' + n[n.length - i];
      }
    }
    str[0] = n.join('');
    return str.join('.');
  }

  handleShowInput() {
    if (this.props.edit) {
      this.setState({ editStatus: true, value: this.props.value });
      setTimeout(() => {
        this.dom_input.focus();
      }, 10);
    }
  }

  handleBlur() {
    const { edit, value: p_value, onValue } = this.props;
    const { value } = this.state;
    if (edit) {
      if (isNaN(value)) {
        this.setState({ value: p_value });
        setTimeout(() => {
          this.dom_input.focus();
        }, 10);
        return false;
      }
      this.setState({ editStatus: false });
      if (value && value != p_value && onValue) {
        onValue(value);
      }
    }
  }

  componentDidMount() {
    this.dom_input = this.refs['percent-component-input'];
  }

  handleInput(value) {
    this.setState({ value });
  }

  render() {
    const { editStatus } = this.state;

    return (
      <Fragment>
        <input
          style={{ display: editStatus ? 'inline-block' : 'none' }}
          ref="percent-component-input"
          onBlur={() => {
            this.handleBlur();
          }}
          onChange={e => {
            this.handleInput(e.target.value);
          }}
          value={this.state.value}
        />
        <span
          style={{ display: !editStatus ? 'inline' : 'none' }}
          onClick={() => {
            this.handleShowInput();
          }}
        >
          {this.getValue()}
        </span>
      </Fragment>
    );
  }
}

Percent.defaultProps = {
  decimal: 2,
  hideSymbol: false,
  edit: false,
};

Percent.propTypes = {
  /** 数值参数 */
  value: t.number.isRequired,
  /** 保留小数点 */
  decimal: t.number,
  /** 数值参数 */
  edit: t.bool,
  /** 获取数值回调 */
  onValue: t.func,
};

export default Percent;
