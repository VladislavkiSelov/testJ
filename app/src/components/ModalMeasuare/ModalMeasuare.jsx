// import React from 'react'
// import FormСontactUs from '../FormСontactUs/FormСontactUs'
// import './ModalMeasuare.scss'

// export default function ModalMeasuare({setModalMeasure}) {
//     return <>
//         <div onClick={()=>setModalMeasure(false)} className="ModalMeasuare">ModalMeasuare</div>;
//         <div className='wrapper_form'>
//             <FormСontactUs statusComment={true} />
//         </div>
//   </>
// }



import React,{useContext} from 'react'
import FormСontactUs from '../FormСontactUs/FormСontactUs'
import {Context} from '../Context/context'
import './ModalMeasuare.scss'

export default function ModalMeasuare() {
    const {setModalMeasure} = useContext(Context)
    return <>
        <div onClick={()=>setModalMeasure(false)} className="ModalMeasuare">ModalMeasuare</div>;
        <div className='wrapper_form'>
            <FormСontactUs statusComment={true} />
        </div> 
  </> 
}
