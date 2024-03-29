import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 32,
      color: '#1890FF',
    }}
  />
);
const onSearch = (value) => console.log(value);
const SearchBox = () => (
  <Space direction="vertical">
    <Search
      placeholder="Search"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  </Space>
);
export default SearchBox;