import React, {MouseEventHandler} from 'react';


export type ButtonPropsType={
    nameB:string
    callback:()=>void

}
const Button = (props:ButtonPropsType) => {
    const onClickHandler=()=>{
        props.callback()
    }
    return (
        <button  onClick={onClickHandler}>{props.nameB}</button>
    );
};

export default Button;