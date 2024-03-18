import { Button, Menu, Modal, Select, Rate, Switch, Divider, message, Dropdown, Table } from "antd";
import { Space, Tag } from 'antd';
import { BellOutlined, EditOutlined, MoreOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import "./notification.css";
import { useState } from "react";
import TextArea from "antd/lib/input/TextArea";
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;
function Notification() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = [
    {
      key: '1',
      notificationTitle: 'New Notification',
      createdOn: '2024-02-23',
      lastUpdate: '2024-02-23',
      status: 'Pending',
      active: true,
    },
    {
      key: '2',
      notificationTitle: 'Update Available',
      createdOn: '2024-02-22',
      lastUpdate: '2024-02-22',
      status: 'Published',
      active: false,
    },
    // Add more dummy data as needed
  ];

  const columns = [
    {
      title: 'Notification Title',
      dataIndex: 'notificationTitle',
      key: 'notificationTitle',
    },
    {
      title: 'Created On',
      dataIndex: 'createdOn',
      key: 'createdOn',
    },
    {
      title: 'Last Update',
      dataIndex: 'lastUpdate',
      key: 'lastUpdate',
    },
    {
      title: 'Status',
      dataIndex: 'active',
      key: 'active',
      render: (active) => (active ? <Tag color="green">Active</Tag> : <Tag color="red">Inactive</Tag>),
    },
    {
      title: 'Active/Inactive',
      dataIndex: 'active',
      key: 'active',
      render: (active, record) => (
        <Switch
          checked={active}
          onChange={(checked) => handleSwitchChange(checked, record.key)}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Dropdown overlay={getMenu(record)} trigger={['hover']}>
            <MoreOutlined />
          </Dropdown>
        </Space>
      ),
    },
  ];
  const getMenu = (record) => (
    <Menu>
      <Menu.Item key="edit" onClick={() => handleEdit(record.key)}>
        <EditOutlined /> Edit
      </Menu.Item>
      <Menu.Item key="delete" onClick={() => handleDelete(record.key)}>
        <DeleteOutlined /> Delete
      </Menu.Item>
    </Menu>
  );

  const handleSwitchChange = (checked, key) => {
    // Add logic for handling the switch change
    console.log(`Notification with key ${key} is now ${checked ? 'Active' : 'Inactive'}`);
  };

  const showModal = () => {
    setIsModalOpen(true);
    // handleOk()
  };

  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const operations = (
    <div className="mb-2 d-flex align-items-center">
      <Button
        // onClick={showModal}
        className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
      >
        <Link to={'/app/notification/add_notification'}>
          + Add New Notification</Link>
      </Button>
    </div>
  );
  const operationsTwo = (
    <div className="mb-2 d-flex align-items-center">
      <Button
        // onClick={showModal}
        className="ml-3 bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4"
      >
        <Link to={'/app/notification/add_broadcast_notification'}>
          + Add New</Link>
      </Button>
    </div>
  );

  const onDeleteData = (Id) => {
    // console.log(Id)
    // console.log(record)
    Modal.confirm({
      title: "Are you sure, you want to delete this Broadcast notification ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        handleDelete(Id);
      },
    });
  };

  const handleEdit = (key) => {
    // Add logic for editing a notification
    console.log('Edit notification with key:', key);
  };

  const handleDelete = (key) => {
    // Add logic for deleting a notification
    console.log('Delete notification with key:', key);
  };
  const onSearch = (value) => console.log(value);
  return (
    <div>
      {/* <div>
        <Tabs activeKey={key} onChange={setKey} tabBarExtraContent={key==="1"?operations:operationsTwo}>
          {items.map((item) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div> */}
      <h4> <BellOutlined /> Notifications</h4>
      <div className="d-flex justify-content-between mb-3">
        <div className="" style={{ display: "flex" }}>
          <Space direction="vertical">
            <Input
              placeholder="Search"
              allowClear
              onChange={onSearch}
              style={{
                width: 200,
              }}
              prefix={<SearchOutlined style={{ marginRight: 8 }} />}
            />
          </Space>
          {/* <Filter>
            <Button
              icon={<Icon component={FilterIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Filters
            </Button>
          </Filter> */}

        </div>
        <div className="mb-2 d-flex align-items-center">
          <Button
            // onClick={showModal}
            className="ml-3 bg-primary d-flex align-items-center rounded text-white font-weight-semibold px-4"
          >
            <Link to={'/app/notifications/add_notification'}>
              + Add New Notification</Link>
          </Button>
        </div>
      </div>
      <div>
        <Table
          // rowKey='id'
          // rowSelection={{
          //   selectedRowKeys,
          //   onChange: (selectedRowKeys, selectedRows) => {
          //     setSelectedRowKeys(selectedRowKeys);
          //   }
          // }} 
          columns={columns} dataSource={data} />
      </div>
      <Modal
        width={600}
        footer={null}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="d-flex mb-3 flex-column">
          {/* <CustomIcon svg={Verified} /> */}
          <h3 style={{ margin: 0 }} className="font-weight-bold">
            Performance Ratings
          </h3>
          <Divider />
          <h5 className="font-weight-bold">Teacher</h5>
          <h5>Wade Smith</h5>
          <br />
          <h5 className="font-weight-bold">Ratings</h5>
          <Rate value={3} />
          <br />
          <h5 className="font-weight-bold">Remarks</h5>
          <TextArea rows={4} />
          <div>
            <Button className="mt-3 bg-info text-white">Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Notification;
