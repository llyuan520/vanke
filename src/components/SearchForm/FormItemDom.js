/*
 * @Author: zhouzhe 
 * @Date: 2018-10-08 16:45:54 
 * @Description: '表单项统一管理组件' 
 * @Last Modified by: zhouzhe
 * @Last Modified time: 2018-10-10 10:19:27
 */

import React from 'react';
import { Input, Form, Row, Col, DatePicker } from 'antd';
import SelectDom from './SelectDom';

const { RangePicker, MonthPicker } = DatePicker;
const FormItem = Form.Item;
class FormItemDom extends React.Component {
  getFields = formItemData => {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return formItemData.map(item => (
      <Col span={8} key={item.fieldName}>
        <FormItem label={item.label} key={item.fieldName}>
          {getFieldDecorator(item.fieldName, {
            ...item.fieldOptions,
          })(this.getItemDom(item))}
        </FormItem>
      </Col>
    ));
  };

  getItemDom = item => {
    switch (item.type) {
      case 'input':
        return <Input placeholder={`请输入${item.label}`} />;
      case 'MonthPicker':
        return (
          <MonthPicker
            format="YYYY-MM"
            onChange={this.handleChange}
            style={{ width: '100%' }}
            placeholder={`请选择${item.label}`}
          />
        );
      case 'RangePicker':
        return <RangePicker style={{ width: '100%' }} />;
      case 'DatePicker':
        return <DatePicker style={{ width: '100%' }} placeholder={`请选择${item.label}`} />;
      case 'select':
        return (
          <SelectDom
            list={item.options}
            placeholder={`请选择${item.label}`}
            onChange={item.onChange}
          />
        );
      default:
        return <Input placeholder={`请输入${item.label}`} />;
    }
  };

  render() {
    const { formItemData } = this.props;
    return <Row gutter={24}>{this.getFields(formItemData)}</Row>;
  }
}

export default FormItemDom;
