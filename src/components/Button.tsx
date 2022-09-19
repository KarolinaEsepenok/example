import React, {MouseEventHandler} from 'react';


export type ButtonPropsType={
    nameB:string
    callback:(nameB:string)=>void


}
const Button = (props:ButtonPropsType) => {
    const onClickHandler=()=>{
        props.callback(props.nameB)

    }
    return (
        <button  onClick={onClickHandler}>{props.nameB}</button>
    );
};

export default Button;