/*
 * @Author: zhouzhe 
 * @Date: 2018-10-08 11:36:38 
 * @Description: '查询表单组件'
 * @Last Modified by: zhouzhe
 * @Last Modified time: 2018-10-09 18:52:53
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button } from 'antd';
import FormItemDom from './FormItemDom';
import styles from './index.less';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form, onSearch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        // for (let key in values) {
        //   //当元素为数组&&长度为2那么可以断定其是一个rangePicker
        //   if (Array.isArray(values[key]) && values[key].length === 2) {
        //     values[`${key}Start`] = values[key][0];
        //     values[`${key}End`] = values[key][1];
        //     values[key] = undefined;
        //   }
        // }
        this.setState(
          {
            filters: { ...values },
          },
          () => {
            const { filters } = this.state;
            onSearch(filters);
          }
        );
      }
    });
  };

  handleReset = () => {
    const { form } = this.props;
    form.resetFields();
    // form.setFieldsValue({ authMonth: undefined });
    this.setState({ filters: {} });
  };

  render() {
    const { formItem, form } = this.props;
    return (
      <Form className={styles.search_form} onSubmit={this.handleSubmit}>
        <Row gutter={24}>
          <FormItemDom formItemData={formItem} form={form} />
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              重置
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func,
  formItem: PropTypes.array,
  form: PropTypes.object,
};

SearchForm.defaultProps = {
  onSearch: () => {},
  formItem: [],
  form: {},
};

const WrappedSearchForm = Form.create()(SearchForm);
export default WrappedSearchForm;
