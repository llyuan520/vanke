import React, { Component } from 'react';
import { Select } from 'antd';
import t from 'prop-types';

class SearchInput extends Component {
  state = {
    data: [],
    value: undefined,
  };
  getObj(obj, path = []) {
    if (obj && obj.constructor === Object && path.length) {
      const key = path[0];
      path.shift();
      return this.getObj(obj[key], path);
    } else {
      return obj;
    }
  }
  handleSearch = value => {
    const { url = '' } = this.props;
    fetch(url.replace('{value}', value))
      .then(response => response.json())
      .then(json => {
        const data = this.getObj(json, this.props.path);
        data.length && this.setState({ data });
      });
  };
  handleChange = value => {
    const { callback } = this.props;
    callback && callback(this.state.data[value], value);
    this.setState({ value });
  };

  render() {
    const { name } = this.props;

    const options = this.state.data.map((d, k) => (
      <Select.Option key={k}>{name ? d[name] : d}</Select.Option>
    ));
    return (
      <Select
        showSearch
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

SearchInput.defaultProps = {
  placeholder: '请输入内容',
};

SearchInput.propTypes = {
  /** 输入框提示内容 */
  placeholder: t.string,
  /** 样式设置 */
  style: t.object,
  /** 异步获取数据接口 */
  url: t.string.isRequired,
  /** 处理数据路径 */
  path: t.array,
  /** 展示属性名 */
  name: t.string,
  /** 回调函数 */
  callback: t.func,
};
export default SearchInput;
