/*
 * @Author: zhouzhe 
 * @Date: 2018-09-29 10:17:27 
 * @Description: '封装Table组件' 
 * @Last Modified by: zhouzhe
 * @Last Modified time: 2018-10-08 11:38:34
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

class ComplexTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
    };
  }

  onSelect = (record, selected) => {
    console.log(record, selected);
  };

  handleSelectChange = selectedRowKeys => {
    const { onSelectChange } = this.props;
    this.setState({
      selectedRowKeys,
    });
    if (onSelectChange) {
      onSelectChange(selectedRowKeys);
    }
  };

  render() {
    const { dataSource, columns, loading, selectionType, isSelection } = this.props;
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleSelectChange,
      hideDefaultSelections: true,
      type: selectionType,
      onSelect: this.onSelect,
      fixed: true,
    };
    return (
      <div>
        <Table
          dataSource={dataSource}
          columns={columns}
          rowKey="id"
          size="small"
          bordered
          scroll={{ x: 1600 }}
          loading={loading}
          rowSelection={isSelection ? rowSelection : null}
        />
      </div>
    );
  }
}

export default ComplexTable;

ComplexTable.propTypes = {
  /** 表格 行数据 必传 */
  dataSource: PropTypes.array.isRequired,
  /** 表格列的配置数据 必传 */
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** 表格loading状态 */
  loading: PropTypes.bool,
  /** 表格选中类型 单选radio 多选checkbox */
  selectionType: PropTypes.string,
  /** 是否开启 单选 或者 多选 */
  isSelection: PropTypes.bool,
  /** 选中某行的回调 */
  onSelectChange: PropTypes.func,
};

ComplexTable.defaultProps = {
  loading: false,
  selectionType: 'checkbox',
  isSelection: true,
  onSelectChange: () => {},
};
