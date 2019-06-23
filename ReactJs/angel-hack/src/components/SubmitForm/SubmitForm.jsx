import React, {useState} from 'react'
import { Modal } from 'antd';

const initialFormData = {
    appSex : '0',
    hasRefType: '0',
    education: '0',
    appWperiodg: '0',
    familyStatus: '0',
    primaryIncome: '0',
	basicExpences: '0'
}

function SubmitForm() {

    const [visibleModal, setvisibleModal] = useState(false)
    const [data, setData] = useState(initialFormData)
    const [modelText, setModelText] = useState('');

    const onChangeNumberField = e => {
        e.preventDefault();
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }

    const submitForm = async e => {
        e.preventDefault();

        let item = {...data};
        item['appSex'] = document.getElementById('appSex').value;
        item['hasRefType'] = document.getElementById('hasRefType').value;
        item['appWperiodg'] = document.getElementById('appWperiodg').value;
        item['education'] = document.getElementById('education').value;
        item['familyStatus'] = document.getElementById('familyStatus').value;
        item['primaryIncome'] = document.getElementById('primaryIncome').value;
        item['basicExpences'] = document.getElementById('basicExpences').value;

        setData(item);

        console.log(item);
        
        await fetch('http://localhost:8080/api/get-score',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        }).then(res=>{
           if(res.ok){
               return res.text();
           }
        }).then(res=>{
            if(res.trim() == '0.0'){
                setModelText('Bad');
            }else{
                setModelText('Good');
            }
            setvisibleModal(true);
        }).catch(err=>{
            console.log(err);
        })
    }

    const handleOk = () => {
        setvisibleModal(false);
    }

    return (
        <section>
            <Modal
                title="Result"
                visible={visibleModal}
                onOk={handleOk}
                closable={false}
                cancelButtonProps={{ disabled: true }}
                >
                {modelText}
            </Modal>
            <form onSubmit={(e)=>submitForm(e)}>
                <section className="form-group">
                    <label htmlFor="appSex">Sex</label>
                    <select className="custom-select" id="appSex">
                        <option value='0'>Female</option>
                        <option value='1'>Male</option>
                    </select>
                </section>

                <section className="form-group">
                    <label htmlFor="hasRefType">Has ref type</label>
                    <select className="custom-select" id="hasRefType">
                        <option value='0'>No</option>
                        <option value='1'>Yes</option>
                    </select>
                </section>

                <section className="form-group">
                    <label htmlFor="education">Education</label>
                    <select className="custom-select" id="education">
                        <option value='0'>No Education</option>
                        <option value='1'>High School</option>
                        <option value='2'>Middle School</option>
                        <option value='3'>Working Cerfiticate</option>
                        <option value='4'>Basic School</option>
                        <option value='5'>Master Degree</option>
                        <option value='6'>College</option>
                        <option value='7'>Bachelor</option>
                    </select>
                </section>

                <section className="form-group">
                    <label htmlFor="appWperiodg">Months of work experience</label>
                    <input
                        type="number"
                        className="form-control"
                        id="appWperiodg"
                        aria-describedby="appWperiodg"
                        onChange={(e)=>onChangeNumberField(e)}
                        />
                </section>

                <section className="form-group">
                    <label htmlFor="familyStatus">Family status</label>
                    <select className="custom-select" id="familyStatus">
                        <option value='0'>Single</option>
                        <option value='1'>Married</option>
                        <option value='2'>Divorced</option>
                        <option value='3'>Widow</option>
                        <option value='4'>Civil Marriage/live-in</option>
                        <option value='5'>Widow/Widower</option>
                        <option value='6'>Other</option>
                    </select>
                </section>

                <section className="form-group">
                    <label htmlFor="primaryIncome">Primary Income (VND)</label>
                    <input
                        type="number"
                        className="form-control"
                        id="primaryIncome"
                        aria-describedby="primaryIncome"
                        placeholder="Enter your primary income"
                        onChange={(e)=>onChangeNumberField(e)}
                        />
                </section>

                <section className="form-group">
                    <label htmlFor="basicExpences">Basic Expences (VND)</label>
                    <input
                        type="number"
                        className="form-control"
                        id="basicExpences"
                        aria-describedby="basicExpences"
                        placeholder="Enter your basic expences"
                        onChange={(e)=>onChangeNumberField(e)}
                        />
                </section>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    );
}

export default SubmitForm;