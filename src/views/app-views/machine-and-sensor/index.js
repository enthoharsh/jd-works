import React from 'react';
import { Table, Space, Avatar, Dropdown, Menu, Input, Button } from 'antd';
import { DeleteOutlined, EditOutlined, MoreOutlined, SearchOutlined, ToolOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { AccountStatusIcon, CsvIcon } from 'assets/svg/icon';
import Filter from 'components/shared-components/Filter';
import Icon from '@ant-design/icons/lib/components/Icon';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const data = [
  {
    key: '1',
    ID: '001',
    image: 'https://images.unsplash.com/photo-1708616748538-bdd66d6a9e25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Customer: 'ABC Company',
    Jobsite: 'Site A',
    Machines: 'Machine 1',
    ActiveSince: '2022-01-01',
    MachineStatus: 'Running',
    OverallStatus: 'Good',
  },
  {
    key: '2',
    ID: '002',
    image: 'https://images.unsplash.com/photo-1708616748538-bdd66d6a9e25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Customer: 'XYZ Corporation',
    Jobsite: 'Site B',
    Machines: 'Machine 2',
    ActiveSince: '2022-02-15',
    MachineStatus: 'Idle',
    OverallStatus: 'Fair',
  },
  // Add more dummy data as needed
];


const MachineAndSensor = () => {
  const history = useHistory()
  const columns = [
    {
      title: 'ID',
      dataIndex: 'ID',
      key: 'ID',
    }, {
      // title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => <Avatar src={text} alt={`Avatar for ${record.organization}`} />,
    },
    {
      title: 'Customer',
      dataIndex: 'Customer',
      key: 'Customer',
    },
    {
      title: 'Jobsite',
      dataIndex: 'Jobsite',
      key: 'Jobsite',
    }, {
      // title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => <Avatar src={text} alt={`Avatar for ${record.organization}`} />,
    },
    {
      title: 'Machines',
      dataIndex: 'Machines',
      key: 'Machines',
    },
    {
      title: 'Active Since',
      dataIndex: 'ActiveSince',
      key: 'ActiveSince',
    },
    {
      title: 'Machine Status',
      dataIndex: 'MachineStatus',
      key: 'MachineStatus',
    },
    {
      title: 'Overall Status',
      dataIndex: 'OverallStatus',
      key: 'OverallStatus',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
            <Dropdown overlay={getMenu(record.id)} placement="bottomRight" trigger={['hover']}>
              <MoreOutlined />
            </Dropdown>
          </Space>
      ),
    },
  ];
  const getMenu = (record) => (
    <Menu>
      <Menu.Item key="edit" onClick={() => history.push(`/app/machine-and-sensors/machine-details/${1}`)}>
        <EditOutlined /> View Details
      </Menu.Item>
      <Menu.Item key="view" onClick={() => {
        history.push(`/app/machine-and-sensors/sensor-list/${1}`)
      }}>
        <DeleteOutlined /> View Sensors
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
       <h4> <ToolOutlined /> Machine & Sensors </h4>
      <div className="d-flex justify-content-between mb-3">
        <div className="" style={{ display: "flex" }}>
          <Space direction="vertical">
            <Input
              placeholder="Search"
              allowClear
              onChange={(onSearch)=>{}}
              style={{
                width: 200,
              }}
              prefix={<SearchOutlined style={{ marginRight: 8 }} />}
            />
          </Space>
          <Button icon={<Icon component={CsvIcon} />} className="d-flex align-items-center ml-2" >Export</Button>
        </div>
        <div className="mb-2 d-flex align-items-center">
          <Button
            // onClick={showModal}
            className="ml-3 bg-primary d-flex align-items-center rounded text-white font-weight-semibold px-4"
          >
            <Link to={'machine-and-sensors/add-new'}>
              + Add New</Link>
          </Button>
        </div>
      </div>
       <Table dataSource={data} columns={columns} />
    </div>
  )
}

export default MachineAndSensor
