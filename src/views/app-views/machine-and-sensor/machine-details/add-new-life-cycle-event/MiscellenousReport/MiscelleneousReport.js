import React from 'react'
import { ViewDetailsIcon } from 'assets/svg/icon'
import { EditOutlined, HistoryOutlined } from '@ant-design/icons'
import { Collapse, Button, Upload } from 'antd';
import ReportSerchIcon from "assets/svg/greenSearch.png";



const MiscelleneousReport = () => {

    const { Panel } = Collapse;
    let styles = {
        files: {
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "13px",
            border: "1px solid lightblue",
            padding: "10px",
            borderRadius: "9px",
            background: "#0093ff0a",
        },
        uploadFile: {
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0,
        },

        // Add the new styles here:

        ".uploadFile::-webkit-file-upload-button": {
            visibility: "hidden",
        },

        ".uploadFile::before": {
            content: "'Drag & Drop'",
            display: "inline-block",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
        },

        ".uploadFile:hover::before": {
            backgroundColor: "#ccc",
        },
    };


    return (
        <>
            <div className="d-flex justify-content-between">
                <h4 className="d-flex align-items-center">
                    {" "}
                    <ViewDetailsIcon /> View Details{" "}
                    <span
                        style={{ color: "grey", fontSize: "14px" }}
                        className="font-weight-300 ml-2"
                    >
                        {" "}
                        <HistoryOutlined /> Last updated an hour ago{" "}
                    </span>{" "}
                </h4>
                <Button
                    className="bg-primary text-white"
                // onClick={() => setJobRefModal(true)}
                >
                    {" "}
                    <EditOutlined /> Edit
                </Button>
            </div>
            <div className="grey-table mt-3">

                <Upload className='upload' >
                    <Button>fb</Button>
                </Upload>
            </div>


        </>
    )
}

export default MiscelleneousReport