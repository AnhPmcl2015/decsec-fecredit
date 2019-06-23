import React, {useState} from 'react'
import './Page1.scss'
import Navigation from '../../components/Navigation/Navigation';
import { Table } from 'antd';
function Page1() {

    const [tableData, setTableData] = useState([]);

    const columns = [
        {
            title: 'AppId',
            dataIndex: 'appId',
            key: 'appId'
        },
        {
            title: 'Result',
            dataIndex: 'result',
            key: 'result'
        }
    ];


    const changeUploadInput = (event) => {
        document.getElementById('labelForCSVFile').innerHTML = event.target.files[0].name;
    }

    return (
        <section id='home-page' className='container-fluid'>
            <section className="row">
                <section className="col-4">
                    <Navigation/>
                </section>
                <section className="col-8">
                    <section className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="csvFileAddon1">Upload</span>
                        </div>
                        <div className="custom-file">
                            <input
                                type="file"
                                className="custom-file-input"
                                id="csvFile"
                                aria-describedby="csvFileAddon1"
                                accept='.csv'
                                onChange={(event)=>changeUploadInput(event)}
                                />
                            <label id='labelForCSVFile' className="custom-file-label" htmlFor="csvFile">Choose CSV File</label>
                        </div>
                    </section>

                    <Table dataSource={tableData} columns={columns}/>
                </section>
            </section>
        </section>
    )
}

export default Page1;