import { useState } from 'react';
import { TextField } from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { editPropProduct } from '../../../firebase/FirebaseDB';
import Swal from 'sweetalert2'

export default function DashboardProductoInput ({setReload, reload,title,propType,palceholderValue,productId}){
    const [inputProp, setInputProp] = useState("");
    const [tagDisplay,settagDisplay] = useState(true);
    const [data,setData] = useState("");


    const handleChangeData = (e) => {
        setData(e.target.value)
    }

    const handleConfirm = () => {
        editPropProduct(productId,inputProp,data).then(res => {
            setInputProp("");
            setReload(!reload);
        });
        Swal.fire('Modificado correctamente!', '', 'success')
        settagDisplay(true)
    }


    return(<div>

            {tagDisplay && <h5>{title}</h5>}

            {inputProp === propType ?
            
            <TextField className="title-dash-prod-item" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder={palceholderValue} type="text" onChangeCapture={handleChangeData}/>
            
            : <h5>{palceholderValue}</h5>}
                            
            {inputProp !== propType ? 
            
            <EditTwoToneIcon fontSize="large" onClick={() => {setInputProp(propType), settagDisplay(false)}}/>
            
            : <div>
                <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                <CancelOutlinedIcon onClick={()=> {setInputProp(""), setData(""), settagDisplay(true)}}/>
            </div>}

        </div>
    )
}