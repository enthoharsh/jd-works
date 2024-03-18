import React, { useState } from "react";
import { Button, Collapse, DatePicker, Input, Modal, Radio, Space } from "antd";
import ReportSerchIcon from "assets/svg/greenSearch.png";
import { DeleteOutlined, EditOutlined, HistoryOutlined } from "@ant-design/icons";
import { EditColorIcon, RemarkIcon, ViewDetailsIcon } from "assets/svg/icon";
import { Table } from 'antd';
import TextArea from "antd/lib/input/TextArea";
const data3 = [
  {
    key: '1',
    srNo: 1,
    dateReceived: '2024-03-18',
    receivedBy: 'John',
    dateRequested: '2024-03-15',
    dateDelivery: '2024-03-20',
    deliveredBy: 'Jane',
  },
  {
    key: '2',
    srNo: 2,
    dateReceived: '2024-03-19',
    receivedBy: 'Alice',
    dateRequested: '2024-03-16',
    dateDelivery: '2024-03-21',
    deliveredBy: 'Bob',
  },
  // Add more data as needed
];
const data2 = [
  {
    key: '1',
    srNo: '1',
    item: 'Keyboard',
    spec: 'Mechanical',
    qty: '20',
    remarks: 'Good',
    action: 'Edit',
  },
  {
    key: '2',
    srNo: '2',
    item: 'Mouse',
    spec: 'Wireless',
    qty: '15',
    remarks: 'Functional',
    action: 'Delete',
  },
  {
    key: '3',
    srNo: '3',
    item: 'Monitor',
    spec: '24" LED',
    qty: '10',
    remarks: 'Brand New',
    action: 'View',
  },
  {
    key: '4',
    srNo: '4',
    item: 'Laptop',
    spec: '15.6" Core i7',
    qty: '5',
    remarks: 'Refurbished',
    action: 'Edit',
  },
  {
    key: '5',
    srNo: '5',
    item: 'Headphones',
    spec: 'Noise Cancelling',
    qty: '12',
    remarks: 'Like New',
    action: 'Delete',
  },
];

const columns = [
  {
    title: 'Sr No',
    dataIndex: 'srNo',
    key: 'srNo',
  },
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
  },
  {
    title: 'Spec',
    dataIndex: 'spec',
    key: 'spec',
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Remarks',
    dataIndex: 'remarks',
    key: 'remarks',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render:(action)=>{
      return<>
      <Button className="bg-danger text-white"><DeleteOutlined /></Button>
      </>
    }
  },
];
const data1 = [
  {
    key: '1',
    srNo: '1',
    quoteJobRef: 'QJ001',
    poRef: 'PO001',
    customer: 'Customer A',
    sales: 'John Doe',
    action: 'Edit',
  },
  {
    key: '2',
    srNo: '2',
    quoteJobRef: 'QJ002',
    poRef: 'PO002',
    customer: 'Customer B',
    sales: 'Jane Smith',
    action: 'Delete',
  },
  {
    key: '3',
    srNo: '3',
    quoteJobRef: 'QJ003',
    poRef: 'PO003',
    customer: 'Customer C',
    sales: 'Michael Johnson',
    action: 'View',
  },
  // Add more data as needed
];
const columns3 = [
  {
    title: 'Sr No',
    dataIndex: 'srNo',
    key: 'srNo',
  },
  {
    title: 'Date Received',
    dataIndex: 'dateReceived',
    key: 'dateReceived',
  },
  {
    title: 'Received By',
    dataIndex: 'receivedBy',
    key: 'receivedBy',
  },
  {
    title: 'Date Requested',
    dataIndex: 'dateRequested',
    key: 'dateRequested',
  },
  {
    title: 'Date Delivery',
    dataIndex: 'dateDelivery',
    key: 'dateDelivery',
  },
  {
    title: 'Delivered By',
    dataIndex: 'deliveredBy',
    key: 'deliveredBy',
  },
];
const columns4 = [
  {
    title: 'Sr No',
    dataIndex: 'srNo',
    key: 'srNo',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Data',
    dataIndex: 'data',
    key: 'data',
  },
];
const data4 = [
  {
    key: '1',
    srNo: 1,
    title: 'Equipment',
    data: 'Machine A',
  },
  {
    key: '2',
    srNo: 2,
    title: 'Tag No',
    data: '12345',
  },
  {
    key: '3',
    srNo: 3,
    title: 'Manufacturer',
    data: 'Manufacturer X',
  },
  {
    key: '4',
    srNo: 4,
    title: 'Serial No',
    data: 'SN001',
  },
  {
    key: '5',
    srNo: 5,
    title: 'Model',
    data: 'Model ABC',
  },
  {
    key: '6',
    srNo: 6,
    title: 'Frame Size',
    data: 'Size 1',
  },
  {
    key: '7',
    srNo: 7,
    title: 'Power',
    data: '1000W',
  },
  {
    key: '8',
    srNo: 8,
    title: 'Voltage',
    data: '220V',
  },
  {
    key: '9',
    srNo: 9,
    title: 'Current',
    data: '10A',
  },
  {
    key: '10',
    srNo: 10,
    title: 'Sec Voltage',
    data: '110V',
  },
  {
    key: '11',
    srNo: 11,
    title: 'Sec Current',
    data: '5A',
  },
  {
    key: '12',
    srNo: 12,
    title: 'Phase',
    data: 'Single',
  },
  {
    key: '13',
    srNo: 13,
    title: 'Frequency',
    data: '60Hz',
  },
  {
    key: '14',
    srNo: 14,
    title: 'Pole',
    data: '4',
  },
  {
    key: '15',
    srNo: 15,
    title: 'Speed',
    data: '1500rpm',
  },
  {
    key: '16',
    srNo: 16,
    title: 'Power Factor',
    data: '0.9',
  },
  {
    key: '17',
    srNo: 17,
    title: 'Insulation Class',
    data: 'Class B',
  },
  {
    key: '18',
    srNo: 18,
    title: 'IP',
    data: 'IP65',
  },
  {
    key: '19',
    srNo: 19,
    title: 'Ex-Proof Type',
    data: 'Type X',
  },
  {
    key: '20',
    srNo: 20,
    title: 'Ex-Proof Cert',
    data: 'Cert Y',
  },
  {
    key: '21',
    srNo: 21,
    title: 'DE Bearing',
    data: 'Bearing 1',
  },
  {
    key: '22',
    srNo: 22,
    title: 'NDE Bearing',
    data: 'Bearing 2',
  },
  {
    key: '23',
    srNo: 23,
    title: 'Colour',
    data: 'Red',
  },
];
const columns1 = [
  {
    title: 'Sr No',
    dataIndex: 'srNo',
    key: 'srNo',
  },
  {
    title: 'Quote/Job Ref',
    dataIndex: 'quoteJobRef',
    key: 'quoteJobRef',
  },
  {
    title: 'PO Ref',
    dataIndex: 'poRef',
    key: 'poRef',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Sales',
    dataIndex: 'sales',
    key: 'sales',
  }
];
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const AddNewLifeCycleEvent = () => {
  const [jobRefModal, setJobRefModal] = useState(false)
  const [receiveAndDeliver, setReceiveAndDeliver] = useState(false)
  const [receiveAndDelData, setReceiveAndDelData] = useState({

  })
  const [radiodata, setRadiodata] = useState({
    quote_job_ref:''
  })
  const [data, setData] = useState({
    quote_job_ref:''
  })
  const onChange = (key) => {
    console.log(key);
  };
  const handleRadioChnge = (name,e)=>{
    console.log(name,e.target.value);
    if (e.target.value=='') {
      setRadiodata({
        ...radiodata,
        [name]:false
      })
      setData({
        ...data,
        [name]:e.target.value
      })
    } else {
      setRadiodata({
        ...radiodata,
        [name]:true
      })
      setData({
        ...data,
        [name]:e.target.value
      })
      
    }
    console.log(radiodata,data);
  }
  const handleRadio1Chnge = (name,e)=>{
    console.log(name,e.target.value);
    if (e.target.value==''||e.target.value==null) {
      setReceiveAndDelData({
        ...receiveAndDelData,
        [name]:false
      })
      setData({
        ...data,
        [name]:e.target.value
      })
    } else {
      setReceiveAndDelData({
        ...receiveAndDelData,
        [name]:true
      })
      setData({
        ...data,
        [name]:e.target.value
      })
      
    }
    console.log(radiodata,data);
  }
  return (
    <div>
      <Modal
        title={
          <div className="d-flex align-items-center">
             <EditColorIcon/>{" "}
            <span className="d-block ml-2"> Edit Details </span>
          </div>
        }
        visible={jobRefModal}
        onCancel={() => setJobRefModal(false)}
        footer={false}
        width={1000}
      >
        <div className="green-radio">
          <div className="mb-4 d-flex justify-content-between">
          <Radio style={{width:'30%'}} checked={radiodata?.quote_job_ref} >Quote/Job Ref</Radio>
            <Input style={{width:'70%'}} placeholder="Type here..." value={data?.quote_job_ref} onChange={(e)=>handleRadioChnge('quote_job_ref',e)} />
          </div>
          <div className="mb-4 d-flex justify-content-between">
          <Radio style={{width:'30%'}} checked={radiodata?.po_ref} >PO Ref</Radio>
            <Input style={{width:'70%'}} placeholder="Type here..." value={data?.po_ref} onChange={(e)=>handleRadioChnge('po_ref',e)} />
          </div>
          <div className="mb-4 d-flex justify-content-between">
          <Radio style={{width:'30%'}} checked={radiodata?.customer} >Customer</Radio>
            <Input style={{width:'70%'}} placeholder="Type here..." value={data?.customer} onChange={(e)=>handleRadioChnge('customer',e)} />
          </div>
          <div className="mb-4 d-flex justify-content-between">
          <Radio style={{width:'30%'}} checked={radiodata?.sales} >Sales</Radio>
            <Input style={{width:'70%'}} placeholder="Type here..." value={data?.sales} onChange={(e)=>handleRadioChnge('sales',e)} />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <Button key="cancel" onClick={() => setJobRefModal(false)}>
            Cancel
          </Button>
          <Button
            key="save"
            className="bg-primary text-white ml-2"
            onClick={() => setJobRefModal(false)}
          >
            Save
          </Button>
        </div>
      </Modal>
      <Modal
        title={
          <div className="d-flex align-items-center">
             <EditColorIcon/>{" "}
            <span className="d-block ml-2"> Edit Details </span>
          </div>
        }
        visible={receiveAndDeliver}
        onCancel={() => setReceiveAndDeliver(false)}
        footer={false}
        width={1000}
      >
        <div className="green-radio">
          <div className="mb-4 d-flex justify-content-between">
          <Radio style={{width:'30%'}} checked={receiveAndDelData?.dateReceived} >Date Received</Radio>
            <DatePicker style={{width:'70%'}} placeholder="Select Date" value={data?.dateReceived} onChange={(value)=>handleRadio1Chnge('dateReceived',{target:{value:value}})} />
          </div>
          <div className="mb-4 d-flex justify-content-between">
          <Radio style={{width:'30%'}} checked={receiveAndDelData?.receivedBy} >Received By</Radio>
            <Input style={{width:'70%'}} placeholder="Type here..." value={data?.receivedBy} onChange={(e)=>handleRadio1Chnge('receivedBy',e)} />
          </div>
          <div className="mb-4 d-flex justify-content-between">
          <Radio style={{width:'30%'}} checked={receiveAndDelData?.dateRequested} >Date Requested</Radio>
            <DatePicker style={{width:'70%'}} placeholder="Select Date" value={data?.dateRequested} onChange={(value)=>handleRadio1Chnge('dateRequested',{target:{value:value}})} />
          </div>
          <div className="mb-4 d-flex justify-content-between">
          <Radio style={{width:'30%'}} checked={receiveAndDelData?.dateDelivery} >Date Delivery</Radio>
            <DatePicker style={{width:'70%'}} placeholder="Select Date" value={data?.dateDelivery} onChange={(value)=>handleRadio1Chnge('dateDelivery',{target:{value:value}})} />
          </div>
          <div className="mb-4 d-flex justify-content-between">
          <Radio style={{width:'30%'}} checked={receiveAndDelData?.deliveredBy} >Delivered By</Radio>
            <Input style={{width:'70%'}} placeholder="Type here..." value={data?.deliveredBy} onChange={(e)=>handleRadio1Chnge('deliveredBy',e)} />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <Button key="cancel" onClick={() => setReceiveAndDeliver(false)}>
            Cancel
          </Button>
          <Button
            key="save"
            className="bg-primary text-white ml-2"
            onClick={() => setReceiveAndDeliver(false)}
          >
            Save
          </Button>
        </div>
      </Modal>
      <div className="custom-full-width">
        <Space direction="vertical">
          <Collapse
            expandIconPosition={"end"}
            onChange={(data) => console.log(data)}
            className="mb-3"
          >
            <Panel
              header={
                <>
                  <img src={ReportSerchIcon} alt="..." />
                  Process Control
                </>
              }
              key="1"
            >
                <div className="normal-header-color">
              <Collapse
                expandIconPosition={"end"}
                onChange={(data) => console.log(data)}
                 className="mb-3"
              >
                <Panel
                  header={
                    <>
                     General Process<Button className="bg-primary text-white customEditButton"><EditOutlined /> Edit</Button>
                    </>
                  }
                  key="1"
                >
                  {/* <div className="d-flex justify-content-end pr-4">
                    <Button className="bg-primary text-white"><EditOutlined /> Edit</Button>
                  </div> */}
                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}></div>
                    <div className="d-flex" style={{width:'60%'}}>
                    <div className="w-25 d-flex justify-content-start pl-3">
                            <h5 className="text-gray-light">Operator(OP)</h5>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <h5 className="text-gray-light">Date Start</h5>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <h5 className="text-gray-light">Date Completed</h5>
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                            <h5 className="text-gray-light">Remarks</h5>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>Onsite Inspection</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>Onsite Dismantling</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Receiving Inspection</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Electrical Test and Free Run Test</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Disassemble Motor</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Mechanical Checks</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Clean Parts</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Bake stator in oven</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Varnish and Bake</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>
                </Panel>
              </Collapse>
              <Collapse className="mb-3">
              <Panel
                  header={
                    <>
                     Rewinding<Button className="bg-primary text-white customEditButton"><EditOutlined /> Edit</Button>
                    </>
                  }
                  key="1"
                >
                  {/* <div className="d-flex justify-content-end pr-4">
                    <Button className="bg-primary text-white"><EditOutlined /> Edit</Button>
                  </div> */}
                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}></div>
                    <div className="d-flex" style={{width:'60%'}}>
                    <div className="w-25 d-flex justify-content-start pl-3">
                            <h5 className="text-gray-light">Operator(OP)</h5>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <h5 className="text-gray-light">Date Start</h5>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <h5 className="text-gray-light">Date Completed</h5>
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                            <h5 className="text-gray-light">Remarks</h5>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Check winding dimension/connection</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Cut winding</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Burn out in heat cleaning oven</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Lamination core test</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Re-stack lamination (if required)</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Rewind Main Stator/Brake Coil</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS TIG/Soldering</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS In-Progress test on winding before varnish</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Pre-Heat before Varnish</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Varnish and Bake in oven</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>
                </Panel>
              </Collapse>
              <Collapse className="mb-3">
              <Panel
                  header={
                    <>
                     Assembly and Final Test<Button className="bg-primary text-white customEditButton"><EditOutlined /> Edit</Button>
                    </>
                  }
                  key="1"
                >
                  {/* <div className="d-flex justify-content-end pr-4">
                    <Button className="bg-primary text-white"><EditOutlined /> Edit</Button>
                  </div> */}
                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}></div>
                    <div className="d-flex" style={{width:'60%'}}>
                    <div className="w-25 d-flex justify-content-start pl-3">
                            <h5 className="text-gray-light">Operator(OP)</h5>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <h5 className="text-gray-light">Date Start</h5>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <h5 className="text-gray-light">Date Completed</h5>
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                            <h5 className="text-gray-light">Remarks</h5>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Dynamic Balancing of rotor</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Recondition of Housing Journal</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Electrical Test before Assembly</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Mechanical Check before Assembly</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Re-assemble Bearings</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Re-assemble Motor</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Re-assemble Seals</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Final Test and Inspection after Overhauling</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Painting</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>WS Packaging</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>
                </Panel>
              </Collapse>
              <Collapse className="mb-3">
              <Panel
                  header={
                    <>
                    Deliver to Site <Button className="bg-primary text-white customEditButton"><EditOutlined /> Edit</Button>
                    </>
                  }
                  key="1"
                >
                  {/* <div className="d-flex justify-content-end pr-4">
                    <Button className="bg-primary text-white"><EditOutlined /> Edit</Button>
                  </div> */}
                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}></div>
                    <div className="d-flex" style={{width:'60%'}}>
                    <div className="w-25 d-flex justify-content-start pl-3">
                            <h5 className="text-gray-light">Operator(OP)</h5>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <h5 className="text-gray-light">Date Start</h5>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <h5 className="text-gray-light">Date Completed</h5>
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                            <h5 className="text-gray-light">Remarks</h5>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>Onsite Installation and Alignment</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div className="" style={{width:'40%'}}>
                        <h5>Onsite Commissioning</h5>
                    </div>
                    <div className="d-flex" style={{width:'60%'}}>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <Input placeholder="Operator"/>
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                            <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-start pl-3">
                        <DatePicker onChange={(date)=>console.log(date)} />
                        </div>
                        <div className="w-25 d-flex justify-content-center pl-3">
                        <Button className="bg-primary text-white"><RemarkIcon /></Button>
                        </div>
                    </div>
                  </div>
                </Panel>
              </Collapse>
              <div className="d-flex mb-3">
                <div style={{width:'25%'}}>
                    <h5>
                    Responsible Person (RP)
                    </h5>
                </div>
                <div style={{width:'75%'}}>
                    <Input placeholder="type here..."/>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div style={{width:'25%'}}>
                    <h5>
                    Date
                    </h5>
                </div>
                <div style={{width:'75%'}}>
                    <DatePicker className="w-100"/>
                </div>
              </div>
                </div>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel
              header={<><img src={ReportSerchIcon} alt="..." />Parts Renewal List</>}
              key="2"
            >
              <div className="d-flex justify-content-between">
                <h4 className="d-flex align-items-center"> <ViewDetailsIcon/> View Details <span style={{color:'grey',fontSize:'14px'}} className="font-weight-300 ml-2"> <HistoryOutlined /> Last updated an hour ago </span> </h4>
                <Button className="bg-primary text-white">+</Button>
              </div>
              <div className="grey-table mt-3">
              <Table className="border rounded" columns={columns} dataSource={data2} />
              </div>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />Job reference</>} key="3">
            <div className="d-flex justify-content-between">
                <h4 className="d-flex align-items-center"> <ViewDetailsIcon/> View Details <span style={{color:'grey',fontSize:'14px'}} className="font-weight-300 ml-2"> <HistoryOutlined /> Last updated an hour ago </span> </h4>
                <Button className="bg-primary text-white" onClick={()=>setJobRefModal(true)}> <EditOutlined/> Edit</Button>
              </div>
              <div className="grey-table mt-3">
              <Table className="border rounded" columns={columns1} dataSource={data1} />
              </div>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />Receiving & Delivery</>} key="3">
            <div className="d-flex justify-content-between">
                <h4 className="d-flex align-items-center"> <ViewDetailsIcon/> View Details <span style={{color:'grey',fontSize:'14px'}} className="font-weight-300 ml-2"> <HistoryOutlined /> Last updated an hour ago </span> </h4>
                <Button className="bg-primary text-white" onClick={()=>setReceiveAndDeliver(true)}> <EditOutlined/> Edit</Button>
              </div>
              <div className="grey-table mt-3">
              <Table className="border rounded" columns={columns3} dataSource={data3} />
              </div>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />Machine Data</>} key="3">
            <div className="d-flex justify-content-between">
                <h4 className="d-flex align-items-center"> <ViewDetailsIcon/> View Details <span style={{color:'grey',fontSize:'14px'}} className="font-weight-300 ml-2"> <HistoryOutlined /> Last updated an hour ago </span> </h4>
               <div> 
               <Button onClick={()=>console.log(true)}> Upload Photos</Button>
               <Button className="bg-primary text-white ml-2" onClick={()=>setReceiveAndDeliver(true)}> <EditOutlined/> Edit</Button>
               </div>
              </div>
              <div className="grey-table mt-3">
              <Table className="border rounded" pagination={{
      pageSize: 25
    }} columns={columns4} dataSource={data4} />
    <div className="mt-5">
      <h5>Remarks</h5>
      <TextArea rows={5} cols={16} placeholder="Type Here..." />
    </div>
    <div className="mt-5 d-flex justify-content-between" >
      <div className="d-flex justify-content-between w-50 align-items-center pr-4">
      <h5 className="w-50">Checked By</h5>
      <Input className="" placeholder="Add Operator Name" />
      </div>
      <div className="d-flex justify-content-between w-50 align-items-center pl-4">
      <h5 className="mr-3">Date</h5>
      <DatePicker className="w-50" />
      </div>
    </div>
    <div className="mt-5">
      <h5>Upload Photos</h5>
      <div className="dashed-border"> </div>
    </div>
              </div>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />Initial Conditions & Physical Inspection</>} key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />Stator winding electrical tests</>} key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />Auxiliaries Checks</>} key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />Free Load tests</>} key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />Vibration tests</>} key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />Mechanical Inspections</>} key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />Rotor shaft runout</>} key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />Free volume checks (for explosive proof motor)</>} key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />Flame path Dimension Checks</>} key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse className="mb-3">
            <Panel header={<><img src={ReportSerchIcon} alt="..." />miscellaneous report Upload</>} key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Space>
      </div>
    </div>
  );
};

export default AddNewLifeCycleEvent;
