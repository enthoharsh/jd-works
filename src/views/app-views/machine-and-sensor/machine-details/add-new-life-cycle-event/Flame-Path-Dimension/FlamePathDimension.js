import React from 'react';
import { useState } from 'react';
import { Button, Collapse, Input, Radio } from "antd";
import { WhiteImageIcon, AuxilleryChecksIcon } from "assets/svg/icon";
import { EditOutlined, HistoryOutlined } from "@ant-design/icons";

const FlamePathDimension = ({ setModalName, auxilleryHeaterRadioChange, auxileryChecksHeater, setSRUploadForm, setSREditModal }) => {
    const [number, setNumber] = useState();
    const { Panel } = Collapse;
    const data = [
        { data1: { name: "Position A", data: ["Chamber Volume", "Flame Path Length", "Maximum permissible gap", "Logically larger diameter", "Logically smaller diameter", "Gap", "Acceptable to standard", "Maximum permissibe gap"] } },
        { data2: { name: "Position B", data: ["Chamber Volume", "Flame Path Length", "vvv"] } },
        {
            data3: { name: "Position C", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data4: { name: "Position C1", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data5: { name: "Position D", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data6: { name: "Position E", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data7: { name: "Position E1", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data8: { name: "Position G", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data9: { name: "Position H", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data10: { name: "Position J", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data11: { name: "Position K", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data12: { name: "Position L", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data13: { name: "Position M", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data14: { name: "Position P", data: ["Chamber Volume", "Flame Path Length", "Maximum permissible gap", "Logically larger diameter", "Logically smaller diameter", "Gap", "Acceptable to standard", "Maximum permissibe gap"] }
        },
        {
            data15: { name: "Position P1", data: ["Flange surface and flatness checked and acceptable"] }
        },
        {
            data16: { name: "Position L1", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data17: { name: "Position M1", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data18: { name: "Position K1", data: ["Chamber Volume", "Flame Path Length"] }
        },
        {
            data19: { name: "Position M2", data: ["Number of threads engaged", "Thread", "Condition acceptable to standard"] }
        },
        {
            data20: { name: "Position R", data: ["Remarks"] }
        },


    ];

    // , "Position C1", "Position D", "Position E", "Position E1", "Position G", "Position H", "Position I", "Position J", "Position K", "Position L", "Position M", "Position P", "Position P1", "Position L1", "Position M1", "Position P2", "Position k1", "Position M2", "Position R"

    return (
        <div className="normal-header-color">
            {
                data.map((item, i) => {
                    const key = `data${i + 1}`

                    return (

                        <Collapse
                            key={i} // Added key prop to Collapse component
                            expandIconPosition={"end"}
                            onChange={(data) => setNumber(data)}
                            className="mb-3"
                        >

                            <Panel
                                key={i}
                                header={
                                    <>
                                        <span className="d-flex align-items-centr" style={{ gap: "5px" }}>
                                            <AuxilleryChecksIcon /> {item[key]?.name}{" "}
                                            {/* {console.log("itemss" + item[key]?.name)}; */}
                                            <span style={{ color: "grey", fontSize: "14px" }} className="font-weight-300 ml-2">
                                                {" "}
                                                <HistoryOutlined /> Last updated an hour ago{" "}
                                            </span>
                                        </span>
                                        <span className="customEditButton" style={{ gap: "5px" }}>
                                            <Button
                                                className="bg-primary text-white mr-1"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    console.log("add");
                                                }}
                                            >
                                                +
                                            </Button>
                                            <Button onClick={(e) => {
                                                e.stopPropagation();
                                                setSRUploadForm(true)
                                            }} className="bg-primary text-white mr-1">
                                                <WhiteImageIcon />
                                            </Button>
                                            <Button onClick={(e) => {
                                                e.stopPropagation();
                                                setSREditModal(true)
                                                setModalName("heater")
                                            }} className="bg-primary text-white mr-1">
                                                <EditOutlined />
                                            </Button>
                                        </span>
                                    </>
                                }

                            >

                                {
                                    item[key].data.map((internalData, k) => {
                                        console.log("K" + k);
                                        return (
                                            <>
                                                {number == 19 && <h2>Notes on End-shield threaded</h2>}
                                                <div className="green-radio" key={k}>
                                                    <div className="mb-4 mt-3 d-flex justify-content-between">
                                                        <Radio
                                                            style={{ width: "30%" }}
                                                            checked={auxileryChecksHeater?.insulation?.checked}
                                                        >
                                                            {item[key].data[k]}
                                                        </Radio>
                                                        <Input
                                                            style={{ width: "70%" }}
                                                            placeholder="Type here..."
                                                            value={auxileryChecksHeater?.insulation?.value}
                                                            onChange={(e) =>
                                                                auxilleryHeaterRadioChange("insulation", e)
                                                            }
                                                            suffix="cm"
                                                        />
                                                    </div>
                                                    {/* <div className="mb-4 d-flex justify-content-between">
                                                    <Radio
                                                        style={{ width: "30%" }}
                                                        checked={auxileryChecksHeater?.result1?.checked}
                                                    >
                                                        {internalData}
                                                    </Radio>
                                                    <Input
                                                        style={{ width: "70%" }}
                                                        placeholder="Type here..."
                                                        value={auxileryChecksHeater?.result1?.value}
                                                        onChange={(e) =>
                                                            auxilleryHeaterRadioChange("result1", e)
                                                        }
                                                        suffix="cm"
                                                    />
                                                </div> */}
                                                    {/* <div className="mb-4 d-flex justify-content-between">
                                                    <Radio
                                                        style={{ width: "30%" }}
                                                        checked={auxileryChecksHeater?.resistance?.checked}
                                                    >
                                                        Motor Core Length 'f'
                                                    </Radio>
                                                    <Input
                                                        style={{ width: "70%" }}
                                                        placeholder="Type here..."
                                                        value={auxileryChecksHeater?.resistance?.value}
                                                        onChange={(e) =>
                                                            auxilleryHeaterRadioChange("resistance", e)
                                                        }
                                                        suffix="cm"
                                                    />
                                                </div> */}
                                                </div>
                                            </>
                                        );
                                    })
                                }

                            </Panel>
                        </Collapse>
                    )
                })
            }
        </div>
    );
};

export default FlamePathDimension;



// {/* <Collapse
// expandIconPosition={"end"}
// onChange={(data) => console.log(data)}
// className="mb-3"
// >
// <Panel
//     header={
//         <>
//             <span
//                 className="d-flex align-items-centr"
//                 style={{ gap: "5px" }}
//             >
//                 <AuxilleryChecksIcon /> Frame-V2-Lead Connection Chamber{" "}
//                 <span
//                     style={{ color: "grey", fontSize: "14px" }}
//                     className="font-weight-300 ml-2"
//                 >
//                     {" "}
//                     <HistoryOutlined /> Last updated an hour ago{" "}
//                 </span>
//             </span>
//             <span
//                 className="customEditButton"
//                 style={{ gap: "5px" }}
//             >

//                 <Button
//                     className="bg-primary text-white mr-1"
//                     onClick={(e) => {
//                         e.stopPropagation();
//                         console.log("add");
//                     }}
//                 >
//                     +
//                 </Button>
//                 <Button onClick={(e) => {
//                     e.stopPropagation();
//                     setSRUploadForm(true)
//                 }} className="bg-primary text-white mr-1">
//                     <WhiteImageIcon />
//                 </Button>
//                 <Button onClick={(e) => {
//                     e.stopPropagation();
//                     setSREditModal(true)
//                     setModalName("heater")
//                 }} className="bg-primary text-white mr-1">
//                     <EditOutlined />
//                 </Button>
//             </span>
//         </>
//     }
//     key="1"
// >
//     <div className="green-radio">

//         <div className="mb-4 mt-3 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.insulation?.checked}
//             >
//                 Width
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.insulation?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("insulation", e)
//                 }
//                 suffix="cm"
//             />
//         </div>
//         <div className="mb-4 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.result1?.checked}
//             >
//                 Breadth
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.result1?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("result1", e)
//                 }
//                 suffix="cm"
//             />
//         </div>
//         <div className="mb-4 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.resistance?.checked}
//             >
//                 Height
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.resistance?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("resistance", e)
//                 }
//                 suffix="cm"
//             />
//         </div>
//     </div>
// </Panel>
// </Collapse>


// <Collapse
// expandIconPosition={"end"}
// onChange={(data) => console.log(data)}
// className="mb-3"
// >
// <Panel
//     header={
//         <>
//             <span
//                 className="d-flex align-items-centr"
//                 style={{ gap: "5px" }}
//             >
//                 <AuxilleryChecksIcon /> Terminal Box-V3-Rectangular Box{" "}
//                 <span
//                     style={{ color: "grey", fontSize: "14px" }}
//                     className="font-weight-300 ml-2"
//                 >
//                     {" "}
//                     <HistoryOutlined /> Last updated an hour ago{" "}
//                 </span>
//             </span>
//             <span
//                 className="customEditButton"
//                 style={{ gap: "5px" }}
//             >

//                 <Button
//                     className="bg-primary text-white mr-1"
//                     onClick={(e) => {
//                         e.stopPropagation();
//                         console.log("add");
//                     }}
//                 >
//                     +
//                 </Button>
//                 <Button onClick={(e) => {
//                     e.stopPropagation();
//                     setSRUploadForm(true)
//                 }} className="bg-primary text-white mr-1">
//                     <WhiteImageIcon />
//                 </Button>
//                 <Button onClick={(e) => {
//                     e.stopPropagation();
//                     setSREditModal(true)
//                     setModalName("heater")
//                 }} className="bg-primary text-white mr-1">
//                     <EditOutlined />
//                 </Button>
//             </span>
//         </>
//     }
//     key="1"
// >
//     <div className="green-radio">

//         <div className="mb-4 mt-3 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.insulation?.checked}
//             >
//                 T-box internal width 'w'
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.insulation?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("insulation", e)
//                 }

//             />
//         </div>
//         <div className="mb-4 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.result1?.checked}
//             >
//                 T-box internal breadth 'b'
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.result1?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("result1", e)
//                 }
//                 suffix="mm"
//             />
//         </div>
//         <div className="mb-4 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.resistance?.checked}
//             >
//                 T-box internal height 'h'
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.resistance?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("resistance", e)
//                 }
//                 suffix="mm"
//             />
//         </div>
//     </div>
// </Panel>
// </Collapse>


// <Collapse
// expandIconPosition={"end"}
// onChange={(data) => console.log(data)}
// className="mb-3"
// >
// <Panel
//     header={
//         <>
//             <span
//                 className="d-flex align-items-centr"
//                 style={{ gap: "5px" }}
//             >
//                 <AuxilleryChecksIcon /> Terminal Box-V4-Circular Box{" "}
//                 <span
//                     style={{ color: "grey", fontSize: "14px" }}
//                     className="font-weight-300 ml-2"
//                 >
//                     {" "}
//                     <HistoryOutlined /> Last updated an hour ago{" "}
//                 </span>
//             </span>
//             <span
//                 className="customEditButton"
//                 style={{ gap: "5px" }}
//             >

//                 <Button
//                     className="bg-primary text-white mr-1"
//                     onClick={(e) => {
//                         e.stopPropagation();
//                         console.log("add");
//                     }}
//                 >
//                     +
//                 </Button>
//                 <Button onClick={(e) => {
//                     e.stopPropagation();
//                     setSRUploadForm(true)
//                 }} className="bg-primary text-white mr-1">
//                     <WhiteImageIcon />
//                 </Button>
//                 <Button onClick={(e) => {
//                     e.stopPropagation();
//                     setSREditModal(true)
//                     setModalName("heater")
//                 }} className="bg-primary text-white mr-1">
//                     <EditOutlined />
//                 </Button>
//             </span>
//         </>
//     }
//     key="1"
// >
//     <div className="green-radio">

//         <div className="mb-4 mt-3 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.insulation?.checked}
//             >
//                 T-Box internal width 'w'
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.insulation?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("insulation", e)
//                 }

//             />
//         </div>
//         <div className="mb-4 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.result1?.checked}
//             >
//                 T-Box internal breadth 'h'
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.result1?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("result1", e)
//                 }
//                 suffix="mm"
//             />
//         </div>
//     </div>
// </Panel>
// </Collapse>


// <Collapse
// expandIconPosition={"end"}
// onChange={(data) => console.log(data)}
// className="mb-3"
// >
// <Panel
//     header={
//         <>
//             <span
//                 className="d-flex align-items-centr"
//                 style={{ gap: "5px" }}
//             >
//                 <AuxilleryChecksIcon /> Auxiliary box-V5-Rectangular box{" "}
//                 <span
//                     style={{ color: "grey", fontSize: "14px" }}
//                     className="font-weight-300 ml-2"
//                 >
//                     {" "}
//                     <HistoryOutlined /> Last updated an hour ago{" "}
//                 </span>
//             </span>
//             <span
//                 className="customEditButton"
//                 style={{ gap: "5px" }}
//             >

//                 <Button
//                     className="bg-primary text-white mr-1"
//                     onClick={(e) => {
//                         e.stopPropagation();
//                         console.log("add");
//                     }}
//                 >
//                     +
//                 </Button>
//                 <Button onClick={(e) => {
//                     e.stopPropagation();
//                     setSRUploadForm(true)
//                 }} className="bg-primary text-white mr-1">
//                     <WhiteImageIcon />
//                 </Button>
//                 <Button onClick={(e) => {
//                     e.stopPropagation();
//                     setSREditModal(true)
//                     setModalName("heater")
//                 }} className="bg-primary text-white mr-1">
//                     <EditOutlined />
//                 </Button>
//             </span>
//         </>
//     }
//     key="1"
// >
//     <div className="green-radio">

//         <div className="mb-4 mt-3 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.insulation?.checked}
//             >
//                 T-Box internal width 'w'
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.insulation?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("insulation", e)
//                 }
//                 suffix="cm"
//             />
//         </div>
//         <div className="mb-4 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.result1?.checked}
//             >
//                 Diameter
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.result1?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("result1", e)
//                 }
//                 suffix="cm"
//             />
//         </div>
//         <div className="mb-4 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.resistance?.checked}
//             >
//                 T-box internal breadth 'b'
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.resistance?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("resistance", e)
//                 }
//                 suffix="cm"
//             />
//         </div>

//     </div>
// </Panel>
// </Collapse>


// <Collapse
// expandIconPosition={"end"}
// onChange={(data) => console.log(data)}
// className="mb-3"
// >
// <Panel
//     header={
//         <>
//             <span
//                 className="d-flex align-items-centr"
//                 style={{ gap: "5px" }}
//             >
//                 <AuxilleryChecksIcon /> Auxiliary box-V6-Circular Box{" "}
//                 <span
//                     style={{ color: "grey", fontSize: "14px" }}
//                     className="font-weight-300 ml-2"
//                 >
//                     {" "}
//                     <HistoryOutlined /> Last updated an hour ago{" "}
//                 </span>
//             </span>
//             <span
//                 className="customEditButton"
//                 style={{ gap: "5px" }}
//             >

//                 <Button
//                     className="bg-primary text-white mr-1"
//                     onClick={(e) => {
//                         e.stopPropagation();
//                         console.log("add");
//                     }}
//                 >
//                     +
//                 </Button>
//                 <Button onClick={(e) => {
//                     e.stopPropagation();
//                     setSRUploadForm(true)
//                 }} className="bg-primary text-white mr-1">
//                     <WhiteImageIcon />
//                 </Button>
//                 <Button onClick={(e) => {
//                     e.stopPropagation();
//                     setSREditModal(true)
//                     setModalName("heater")
//                 }} className="bg-primary text-white mr-1">
//                     <EditOutlined />
//                 </Button>
//             </span>
//         </>
//     }
//     key="1"
// >
//     <div className="green-radio">

//         <div className="mb-4 mt-3 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.insulation?.checked}
//             >
//                 T-box internal width 'w'
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.insulation?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("insulation", e)
//                 }

//             />
//         </div>
//         <div className="mb-4 d-flex justify-content-between">
//             <Radio
//                 style={{ width: "30%" }}
//                 checked={auxileryChecksHeater?.result1?.checked}
//             >
//                 T-box internal breadth 'h'
//             </Radio>
//             <Input
//                 style={{ width: "70%" }}
//                 placeholder="Type here..."
//                 value={auxileryChecksHeater?.result1?.value}
//                 onChange={(e) =>
//                     auxilleryHeaterRadioChange("result1", e)
//                 }
//                 suffix="cm"
//             />
//         </div>

//     </div>
// </Panel>
// </Collapse> */}