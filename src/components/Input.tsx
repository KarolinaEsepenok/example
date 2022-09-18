import React, {ChangeEvent} from 'react';


export type InputPropsType={
    title:string
    setTitle:(title:string)=>void

}
const Input = (props:InputPropsType) => {
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(event.currentTarget.value)

    }
    return (
      <input onChange={onChangeHandler} value={props.title}/>
    );
};

export default Input;