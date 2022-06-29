import { useState } from 'react';
import { TextField } from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { editPropProduct } from '../../../firebase/FirebaseDB';

export default function DashboardProductoInput ({setReload, reload,title,type,palceholderValue,productId}){
    const [propType, setPropType] = useState("");
    const [tagDisplay,settagDisplay] = useState(true);
    const [data,setData] = useState("");


    const handleChangeData = (e) => {
        setData(e.target.value)
    }

    const handleConfirm = () => {
        editPropProduct(productId,propType,data).then(res => {
            setPropType("");
            setReload(!reload);
        });
        settagDisplay(true)
    }


    return(<div>

            {tagDisplay && <h5>{title}: </h5>}

            {propType === type ?
            
            <TextField className="title-dash-prod-item" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder={palceholderValue} type="text" onChangeCapture={handleChangeData}/>
            
            : <h5>{palceholderValue}</h5>}
                            
            {propType !== type ? 
            
            <EditTwoToneIcon fontSize="large" onClick={() => {setPropType(type), settagDisplay(false)}}/>
            
            : <div>
                <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                <CancelOutlinedIcon onClick={()=> {setPropType(""), setData(""), settagDisplay(true)}}/>
            </div>}

        </div>
    )
}