/*
 * @Author: zhouzhe 
 * @Date: 2018-10-09 12:02:20 
 * @Description: '选择框组件' 
 * @Last Modified by: zhouzhe
 * @Last Modified time: 2018-10-09 12:20:18
 */

import React from 'react';
import { Select } from 'antd';

export default function SelectDom({ list, ...rest }) {
  return (
    <Select {...rest}>
      {list.map(item => (
        <Select.Option key={Math.random()} value={item.value}>
          {item.text}
        </Select.Option>
      ))}
    </Select>
  );
}
