import React, { Component } from 'react';
import ComplexTable from '@/components/Table';
import SearchForm from '@/components/SearchForm';
import styles from './Workplace.less';

const getDataSource = () => [
  {
    id: '1',
    profitCenterName: '香格里拉利润中心2',
    projectName: '香格里拉碧桂园44',
    stagesName: '香格里拉凤凰碧桂园01（二期）',
    roomCode: 'XGLL1001-501',
    deliveryDate: '2018-07-02',
    dealPrice: '500.00',
    taxRate: '10%',
    buildingName: '香格里拉凤凰碧桂园10号楼5单501',
  },
  {
    id: '2',
    profitCenterName: '香格里拉利润中心2',
    projectName: '香格里拉碧桂园44',
    stagesName: '香格里拉凤凰碧桂园02（二期）',
    roomCode: 'XGLL1001-401',
    deliveryDate: '2018-07-01',
    dealPrice: '200.00',
    taxRate: '11%',
    buildingName: '香格里拉凤凰碧桂园10号楼5单元701',
  },
];

const formItem = [
  {
    label: '纳税主体',
    fieldName: 'main',
    type: 'input',
    fieldOptions: {
      initialValue: undefined,
      rules: [
        {
          required: true,
          message: '请选择纳税主体',
        },
      ],
    },
  },
  {
    label: '交易月份',
    fieldName: 'authMonth',
    type: 'MonthPicker',
  },
  {
    label: '利润中心',
    fieldName: 'profitCenterId',
    type: 'RangePicker',
  },
  {
    label: '项目分期',
    fieldName: 'stagesId',
    type: 'DatePicker',
  },
  {
    label: '房间编码',
    fieldName: 'roomCode',
  },
  {
    label: '客户名称',
    fieldName: 'customerName',
  },
  {
    label: '匹配状态',
    fieldName: 'matchingStatus',
    type: 'select',
    options: [
      {
        text: '未匹配',
        value: '0',
      },
      {
        text: '已匹配',
        value: '1',
      },
    ],
    onChange: () => {},
  },
  {
    label: '房间交付日期',
    fieldName: 'deliveryDate',
  },
  {
    label: '确收时点',
    fieldName: 'confirmedDate',
  },
  {
    label: '测试测试测试测试',
    fieldName: 'test01',
  },
];

const getColumns = () => [
  {
    title: 'ID',
    dataIndex: 'id',
    width: '50px',
  },
  {
    title: '利润中心',
    dataIndex: 'profitCenterName',
    width: '200px',
  },
  {
    title: '项目名称',
    dataIndex: 'projectName',
    width: '150px',
  },
  {
    title: '项目分期名称',
    dataIndex: 'stagesName',
    width: '200px',
  },
  {
    title: '房间编码',
    dataIndex: 'roomCode',
    width: '150px',
  },
  {
    title: '房间交付日期',
    dataIndex: 'deliveryDate',
    width: '100px',
  },
  {
    title: '成交金额',
    dataIndex: 'dealPrice',
    width: '100px',
  },
  {
    title: '税率',
    dataIndex: 'taxRate',
    width: '100px',
  },
  {
    title: '楼栋名称',
    dataIndex: 'buildingName',
    width: '300px',
  },
];

class Workplace extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  handleSelectChange = () => {};

  handleSearch = value => {
    console.log(value);
  };

  render() {
    return (
      <div className={styles.workplace}>
        <ComplexTable
          dataSource={getDataSource()}
          columns={getColumns()}
          onSelectChange={this.handleSelectChange}
          selectionType="radio"
        />
        <SearchForm formItem={formItem} onSearch={this.handleSearch} />
      </div>
    );
  }
}

export default Workplace;
