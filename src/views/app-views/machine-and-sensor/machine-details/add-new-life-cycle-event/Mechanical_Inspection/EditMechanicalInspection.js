import React from 'react'

const EditMechanicalInspection = () => {
    return (
        <Collapse
            expandIconPosition={"end"}
            onChange={(data) => console.log(data)}
            className="mb-3"
        >
            <Panel
                header={
                    <>
                        <span
                            className="d-flex align-items-centr"
                            style={{ gap: "5px" }}
                        >
                            <AuxilleryChecksIcon /> Mechanical Inspection{" "}
                            <span
                                style={{ color: "grey", fontSize: "14px" }}
                                className="font-weight-300 ml-2"
                            >
                                {" "}
                                <HistoryOutlined /> Last updated an hour ago{" "}
                            </span>
                        </span>
                        <span
                            className="customEditButton"
                            style={{ gap: "5px" }}
                        >
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
                key="1"
            >
                <div className="green-radio">
                    <div className="mb-4 mt-3 d-flex justify-content-between">
                        <Radio
                            style={{ width: "30%" }}
                            checked={auxileryChecksHeater?.insulation?.checked}
                        >
                            Insulation
                        </Radio>
                        <Input
                            style={{ width: "70%" }}
                            placeholder="Type here..."
                            value={auxileryChecksHeater?.insulation?.value}
                            onChange={(e) =>
                                auxilleryHeaterRadioChange("insulation", e)
                            }
                            suffix="mΩ"
                        />
                    </div>
                    <div className="mb-4 d-flex justify-content-between">
                        <Radio
                            style={{ width: "30%" }}
                            checked={auxileryChecksHeater?.result1?.checked}
                        >
                            Result
                        </Radio>
                        <Input
                            style={{ width: "70%" }}
                            placeholder="Type here..."
                            value={auxileryChecksHeater?.result1?.value}
                            onChange={(e) =>
                                auxilleryHeaterRadioChange("result1", e)
                            }
                            suffix="mΩ"
                        />
                    </div>
                    <div className="mb-4 d-flex justify-content-between">
                        <Radio
                            style={{ width: "30%" }}
                            checked={auxileryChecksHeater?.resistance?.checked}
                        >
                            Resistance
                        </Radio>
                        <Input
                            style={{ width: "70%" }}
                            placeholder="Type here..."
                            value={auxileryChecksHeater?.resistance?.value}
                            onChange={(e) =>
                                auxilleryHeaterRadioChange("resistance", e)
                            }
                            suffix="KΩ"
                        />
                    </div>
                    <div className="mb-4 d-flex justify-content-between">
                        <Radio
                            style={{ width: "30%" }}
                            checked={auxileryChecksHeater?.result2?.checked}
                        >
                            Result
                        </Radio>
                        <Input
                            style={{ width: "70%" }}
                            placeholder="Type here..."
                            value={auxileryChecksHeater?.result2?.value}
                            onChange={(e) =>
                                auxilleryHeaterRadioChange("result2", e)
                            }
                            suffix="KΩ"
                        />
                    </div>
                    <div className="mb-4 d-flex justify-content-between">
                        <Radio
                            style={{ width: "30%" }}
                            checked={auxileryChecksHeater?.test_volt?.checked}
                        >
                            Test Volt
                        </Radio>
                        <Input
                            style={{ width: "70%" }}
                            placeholder="Type here..."
                            value={auxileryChecksHeater?.test_volt?.value}
                            onChange={(e) =>
                                auxilleryHeaterRadioChange("test_volt", e)
                            }
                            suffix="v"
                        />
                    </div>
                    {/* <div className="mb-4 d-flex justify-content-between">
                        <Radio
                          style={{ width: "30%" }}
                          checked={auxileryChecksHeater?.date?.checked}
                        >
                          Date
                        </Radio>
                        <DatePicker
                          style={{ width: "70%" }}
                          placeholder="Select date"
                          value={auxileryChecksHeater?.date?.value}
                          onChange={(e) =>
                            auxilleryHeaterRadioChange("date", {
                              target: { value: e },
                            })
                          }
                          // suffix='mΩ'
                        />
                      </div> */}
                    <div className="mb-4 d-flex justify-content-between">
                        <Radio
                            style={{ width: "30%" }}
                            checked={auxileryChecksHeater?.remarks?.checked}
                        >
                            Remarks
                        </Radio>
                        <Input
                            style={{ width: "70%" }}
                            placeholder="Type here..."
                            value={auxileryChecksHeater?.remarks?.value}
                            onChange={(e) =>
                                auxilleryHeaterRadioChange("remarks", e)
                            }
                        // suffix='mΩ'
                        />
                    </div>
                </div>
            </Panel>
        </Collapse>
    )
}

export default EditMechanicalInspection