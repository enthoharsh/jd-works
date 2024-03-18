import { DashboardOutlined, EyeOutlined, MoreOutlined, SearchOutlined, TeamOutlined } from '@ant-design/icons'
import Icon from '@ant-design/icons/lib/components/Icon';
import { Avatar, Button, Checkbox, Dropdown, Input, Menu, Modal, Space, Table, Tabs, Tag } from 'antd'
import Item from 'antd/lib/list/Item';
import SubMenu from 'antd/lib/menu/SubMenu';
import { CsvIcon, CustomerAccountIcon, EmailIcon, ExploreIcon, FilterIcon, InquiryIcon, InquiryStatusIcon, ManagersIcon, PhoneIcon, SettingsIcon } from 'assets/svg/icon';
import Filter from 'components/shared-components/Filter';
import React, { useState } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom/cjs/react-router-dom';

import { Form, Radio } from 'antd';
const CustomerDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { myCustomState } = location.state || {};

  const [modalVisible, setModalVisible] = useState(false);
  const history = useHistory();
  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleSave = (selectedDashboards) => {
    // Handle save logic here
    console.log('Selected Dashboards:', selectedDashboards);
  };
  const onFinish = (values) => {
    console.log('Received values:', values);
    // You can handle form submission logic here
  };

  const columnsInquiry = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Inquiry Details',
      dataIndex: 'inquiryDetails',
      key: 'inquiryDetails',
    },
    {
      title: 'Inquiry Type',
      dataIndex: 'inquiryType',
      key: 'inquiryType',
    },
    // {
    //   title: 'Membership Type',
    //   dataIndex: 'membershipType',
    //   key: 'membershipType',
    // },
    {
      title: 'Created On',
      dataIndex: 'userSince',
      key: 'userSince',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (active) => (active ? <Tag color="green">Active</Tag> : <Tag color="red">Inactive</Tag>),
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
  const dummyOrdersData = [
    {
      id: 1,
      image: 'https://example.com/avatar1.jpg',
      Jobsite: 'Construction Site A',
      Area: 'Zone 1',
      Machine: 'Excavator',
      Sensor: 'Vibrator',
      userSince: '2022-01-10',
      status: true,
    },
    {
      id: 2,
      image: 'https://example.com/avatar2.jpg',
      Jobsite: 'Construction Site B',
      Area: 'Zone 2',
      Machine: 'Bulldozer',
      Sensor: 'Vibrator',
      userSince: '2022-02-20',
      status: false,
    },
    {
      id: 3,
      image: 'https://example.com/avatar3.jpg',
      Jobsite: 'Construction Site C',
      Area: 'Zone 3',
      Machine: 'Crane',
      Sensor: 'Vibrator',
      userSince: '2022-03-15',
      status: true,
    },
    // Add more dummy data as needed
  ];
  const dummyData = [
    {
      id: 1,
      inquiryDetails: 'General Inquiry from John Doe',
      inquiryType: 'General Inquiry',
      userSince: '2022-01-01',
      status: true,
    },
    {
      id: 2,
      inquiryDetails: 'Support Request from Jane Smith',
      inquiryType: 'Support Request',
      userSince: '2022-02-15',
      status: false,
    },
    {
      id: 3,
      inquiryDetails: 'Product Inquiry from Alice Johnson',
      inquiryType: 'Product Inquiry',
      userSince: '2022-03-20',
      status: true,
    },
    // Add more dummy data as needed
  ];
  const getMenu = (_id) => (
    <Menu>
      <Menu.Item key="edit">
        <Link style={{color:'#475569'}} className='d-flex align-items-center' to={`${id}/inquiry-details/${_id}`}>
        <EyeOutlined /><span className='d-block ml-2'>View Detail</span></Link>
      </Menu.Item>
      <Menu.Item key="delete" onClick={() => setModalVisible(true)}>
        <InquiryStatusIcon />Inquiry Status
      </Menu.Item>
    </Menu>
  );
  const getMenuOrders = (_id) => (
    <Menu>
      <Menu.Item key="edit">
        <Link className='d-flex align-items-center' to={`${id}/order-details/${_id}`}>
        <EyeOutlined /><span className='d-block ml-2'>View Detail</span></Link>
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      // title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => <Avatar src={text} alt={`Avatar for ${record.organization}`} />,
    },
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Phone Number',
      dataIndex: 'contactNumber',
      key: 'contactNumber',
    },
    // {
    //   title: 'Membership Type',
    //   dataIndex: 'membershipType',
    //   key: 'membershipType',
    // },
    {
      title: 'Email ID',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Created On',
      dataIndex: 'userSince',
      key: 'userSince',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (active) => (active ? <Tag color="green">Active</Tag> : <Tag color="red">Inactive</Tag>),
    },
  ];
  const columnsOrders = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      // title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => <Avatar src={text} alt={`Avatar for ${record.organization}`} />,
    },
    {
      title: 'Jobsite',
      dataIndex: 'Jobsite',
      key: 'Jobsite',
    },
    {
      title: 'Area',
      dataIndex: 'Area',
      key: 'Area',
    },
    {
      title: 'Machine',
      dataIndex: 'Machine',
      key: 'Machine',
    },
    {
      title: 'Sensor',
      dataIndex: 'Sensor',
      key: 'Sensor',
      cell: (value) => {
        return <>Vibrator</>
      }
    },
    {
      title: 'Order Date',
      dataIndex: 'userSince',
      key: 'userSince',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (active) => (active ? <Tag color="green">Active</Tag> : <Tag color="red">Inactive</Tag>),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Dropdown overlay={getMenuOrders(record.id)} placement="bottomRight" trigger={['hover']}>
            <MoreOutlined />
          </Dropdown>
        </Space>
      ),
    },
  ];
  const dataone = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1708616748538-bdd66d6a9e25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      username: 'Customer Organization 1',
      contactNumber: '123-456-7890',
      membershipType: 'Premium',
      email: 'customer1@example.com',
      userSince: '2022-01-01',
      status: true,
    },
    // Add more data entries as needed
  ];
  const tabData = [
    {
      key: '1',
      tabTitle: 'Tab 1',
      tableData: [
        { key: '1', name: 'John Doe', age: 30, address: '123 Main St' },
        { key: '2', name: 'Jane Smith', age: 25, address: '456 Oak St' },
      ],
    },
    {
      key: '2',
      tabTitle: 'Tab 2',
      tableData: [
        { key: '3', name: 'Bob Johnson', age: 40, address: '789 Elm St' },
        { key: '4', name: 'Alice Williams', age: 35, address: '101 Pine St' },
      ],
    },
    // Add more tabs as needed
  ];
  const FilterMenu = (
    <Menu mode="horizontal">
      <SubMenu key="item1" title="Job site">
        <Item key="subitem1">
          <Checkbox>All</Checkbox>
        </Item>{" "}
        <Item key="subitem2">
          <Checkbox>Job site 1</Checkbox>
        </Item>
        <Item key="subitem3  ">
          <Checkbox>Job site 2</Checkbox>
        </Item>
      </SubMenu>
      <SubMenu key="item2" title="Area">
        <Menu.Item key="subitem4">
          <Checkbox>All</Checkbox>
        </Menu.Item>{" "}
        <Menu.Item key="subitem5">
          <Checkbox>Bedok</Checkbox>
        </Menu.Item>
        <Menu.Item key="subitem6  ">
          <Checkbox>Woodland</Checkbox>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="item3" title="Status">
        <Menu.Item key="subitem7">
          <Checkbox>All</Checkbox>
        </Menu.Item>{" "}
        <Menu.Item key="subitem8">
          <Checkbox>Active</Checkbox>
        </Menu.Item>
        <Menu.Item key="subitem9  ">
          <Checkbox>Terminated</Checkbox>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
  const items = [
    {
      label: (
        <div className="d-flex align-items-center">
          <CustomerAccountIcon color={"#3CA6C1"} />
          <span className="ml-2">
            Customer Admin</span>
        </div>
      ),
      key: 1,
      children: (
        <>

          <div className="ml-2 mb-3" style={{ display: "flex" }}>
            <Space direction="vertical">
              <Input
                placeholder="Search"
                allowClear
                onChange={(text) => console.log(text)}
                style={{
                  width: 200,
                }}
                prefix={<SearchOutlined style={{ marginRight: 8 }} />}
              />
            </Space>
            <Button icon={<Icon component={CsvIcon} />} className="d-flex align-items-center ml-2" >Export</Button>
          </div>
          <div className="p-3 bg-white border rounded ml-1">
            <div>
              <Table dataSource={dataone} columns={columns} />
            </div>

          </div>
        </>
      ),
    },
    {
      label: (
        <div className="d-flex align-items-center">
          <ManagersIcon />
          <span className="ml-2">Managers</span>
        </div>
      ),
      key: 2,
      children: (
        <>
                  <div className="ml-2 mb-3" style={{ display: "flex" }}>
            <Space direction="vertical">
              <Input
                placeholder="Search"
                allowClear
                onChange={(text) => console.log(text)}
                style={{
                  width: 200,
                }}
                prefix={<SearchOutlined style={{ marginRight: 8 }} />}
              />
            </Space>
            <Button icon={<Icon component={CsvIcon} />} className="d-flex align-items-center ml-2" >Export</Button>
          </div>
        <div className="p-3 bg-white border rounded ml-1">

          <div>
            <Table dataSource={dataone} columns={columns} />
          </div>

        </div>
        </>
      ),
    },
    {
      label: (
        <div className="d-flex align-items-center">
          <ManagersIcon />
          <span className="ml-2">Customer Users</span>
        </div>
      ),
      key: 3,
      children: (
        <>
                  <div className="ml-2 mb-3" style={{ display: "flex" }}>
            <Space direction="vertical">
              <Input
                placeholder="Search"
                allowClear
                onChange={(text) => console.log(text)}
                style={{
                  width: 200,
                }}
                prefix={<SearchOutlined style={{ marginRight: 8 }} />}
              />
            </Space>
            <Button icon={<Icon component={CsvIcon} />} className="d-flex align-items-center ml-2" >Export</Button>
          </div>
        <div className="p-3 bg-white border rounded ml-1">

          <div>
            <Table dataSource={tabData[0].tableData} columns={columns} />
          </div>

        </div>
        </>
      ),
    },
    {
      label: (
        <div className="d-flex align-items-center">
          <InquiryIcon />
          <span className="ml-2">Inquiry</span>
        </div>
      ),
      key: 4,
      children: (
        <>
        <div className="d-flex justify-content-between mb-3 mr-1 ml-2" style={{    alignItems: 'baseline'}}>
            <div className="" style={{ display: "flex" }}>
              <Space direction="vertical">
                <Input
                  placeholder="Search"
                  allowClear
                  onChange={(text) => console.log(text)}
                  style={{
                    width: 200,
                  }}
                  prefix={<SearchOutlined style={{ marginRight: 8 }} />}
                />
              </Space>
              <Filter filters={FilterMenu}>
                <Button
                  icon={<Icon component={FilterIcon} />}
                  className="d-flex align-items-center ml-2"
                >
                  Filters
                </Button>
              </Filter>
              <Button icon={<Icon component={CsvIcon} />} className="d-flex align-items-center ml-2" >Export</Button>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <h5>Ops admin in charge : <Avatar src={"https://images.unsplash.com/photo-1708616748538-bdd66d6a9e25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={`Avatar`} style={{ width: '22px', height: '22px' }}/> Wade warren</h5>
            </div>
          </div>
        <div className="p-3 bg-white border rounded ml-1">
          
          <div>
            <Table dataSource={dummyData} columns={columnsInquiry} />
          </div>

        </div>
        </>
      ),
    },
    {
      label: (
        <div className="d-flex align-items-center">
          <SettingsIcon />
          <span className="ml-2">Orders</span>
        </div>
      ),
      key: 5,
      children: (
        <>
        <div className="d-flex justify-content-between mb-3 mr-1 ml-2" style={{    alignItems: 'baseline'}}>
            <div className="" style={{ display: "flex" }}>
              <Space direction="vertical">
                <Input
                  placeholder="Search"
                  allowClear
                  onChange={(text) => console.log(text)}
                  style={{
                    width: 200,
                  }}
                  prefix={<SearchOutlined style={{ marginRight: 8 }} />}
                />
              </Space>
              <Filter filters={FilterMenu}>
                <Button
                  icon={<Icon component={FilterIcon} />}
                  className="d-flex align-items-center ml-2"
                >
                  Filters
                </Button>
              </Filter>
              <Button icon={<Icon component={CsvIcon} />} className="d-flex align-items-center ml-2" >Export</Button>
            </div>
            <div className="mb-2 d-flex align-items-center">
              {/* <h5>Ops admin in charge : <Avatar src={"https://images.unsplash.com/photo-1708616748538-bdd66d6a9e25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={`Avatar`} style={{ width: '22px', height: '22px' }}/> Wade warren</h5> */}
            </div>
          </div>
        <div className="ml-2 p-3 bg-white border rounded ml-1">

          <div>
            <Table dataSource={dummyOrdersData} columns={columnsOrders} />
          </div>

        </div>
        </>
      ),
    },
  ];
  return (
    <div>
      <h4> <TeamOutlined /><span style={{
        color: '#6a6a6a',
        fontWeight: '300'
      }}> Customer Management </span>/ Customers Accounts </h4>
      <div className="d-flex mt-3" style={{ height: "80vh", overflow: 'auto' }}>
        <div
          style={{
            width: "22%",
            background: "white",
            height: "100%",
          }}
        >
          <div className="d-flex justify-content-center mt-3">
            <img
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src="data:image/jpeg;base64,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"
              alt="..."
            />
          </div>
          <h4 className="text-center mt-3 mb-0">
            Acme co
          </h4>
          <p className="text-center mb-1 text-gray">
            #132 | Free
          </p>
          <Button style={{ margin: 'auto' }} className='d-block mb-4'>
            Edit Details
          </Button>
          <div
            style={{
              borderTop: "0.5px solid #b2adad",
              width: "90%",
              margin: "auto",
            }}
          ></div>
          <div className="p-3">
            <h5>Contact</h5>
            <div className="d-flex" style={{ marginTop: "15px" }}>
              <div
                style={{
                  marginRight: "12px",
                  color: "grey",
                  marginBottom: "12px",
                }}
              >
                <PhoneIcon/>
              </div>
              <div>120201020</div>
            </div>

            <div className="d-flex">
              <div
                style={{
                  marginRight: "12px",
                  color: "grey",
                  marginBottom: "12px",
                }}
              >
                <EmailIcon/>
              </div>
              <div>Bedok-Bidadari Park Drive
                Singapore</div>
            </div>
            <div className="d-flex">
              <div
                style={{
                  marginRight: "12px",
                  color: "grey",
                  marginBottom: "12px",
                }}
              >
                <ExploreIcon/>
              </div>
              <div>check@mail.com</div>
            </div>
          </div>
          <div
            style={{
              borderTop: "0.5px solid #b2adad",
              width: "90%",
              margin: "auto",
            }}
          ></div>
          <div className='p-3'>
            <div className='displayCenter mb-2'>
              <p>Total Admins</p>
              <span className='totalAdminCircle'>
                05
              </span>
            </div>
            <div className='displayCenter mb-2'>
              <p>Total Admins</p>
              <span className='totalUserCircle'>
                05
              </span>
            </div>
            <div className='displayCenter mb-2'>
              <p>Total Admins</p>
              <span className='totalManagerCircle'>
                05
              </span>
            </div>
          </div>
        </div>
        <div style={{ width: "78%" }} className='pl-3'>
          <div className="customTableBackground">
            <Tabs>
              {items.map((item) => (
                <Tabs.TabPane tab={item.label} key={item.key}>
                  {item.children}
                </Tabs.TabPane>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

      <Modal
      title={'Inquiry Status'}
      visible={modalVisible}
      onCancel={handleCancel}
      footer={false}
    >
     <Form
      name="yourForm"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="vertical"
    >
      {/* Inquiry Status Radio Group */}
      <Form.Item
        label="Inquiry Status"
        name="inquiryStatus"
        rules={[{ required: false, message: 'Please select an inquiry status' }]}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Radio.Group>
          <Radio value="active">Active</Radio>
          <Radio value="inactive">Inactive</Radio>
        </Radio.Group>
      </Form.Item>

      {/* Add Remarks Textarea */}
      <Form.Item
        label="Remarks"
        name="addRemarks"
        rules={[{ required: false, message: 'Please add remarks' }]}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      {/* Submit Button */}
        
      <div className='d-flex justify-content-end mt-3'>
        <Button className='bg-primary text-white ml-2' type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
    </Modal>
    </div>
  )
}

export default CustomerDetails
