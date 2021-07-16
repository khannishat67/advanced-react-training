import React, { InputHTMLAttributes, useEffect, useRef } from 'react'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: JSX.Element
}
export const TextField =(props: TextFieldProps) => {
    const labelElem = useRef<HTMLLabelElement>(null)
    const inputElem = useRef<HTMLInputElement>(null)
    useEffect(() => {
        console.log(labelElem.current);
        console.log(inputElem.current);
        

    }, [])
    return (
        <div>
            <label ref={labelElem}>{props.label}</label>
            <input ref={inputElem} type={'text'} {...props}/>
        </div>
    )
}