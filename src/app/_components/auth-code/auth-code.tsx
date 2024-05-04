'use client'
import { useEffect, useRef } from "react";
import { AuthCodeProps, AuthInputProps } from "./auth-code.types";
import classNames from "classnames";

const AuthCode:React.FC<AuthCodeProps> = ({
    variant="ghost",
    autoFocus=true,
    className,
    onChange,
    isDisabled,
    length=5
})=>{
    if(length <1){
        throw new Error('تعداد ارقام باید بزرکتر از صفر باشد.')
    }
    const inputsRefs = useRef<Array<HTMLInputElement>>([])
    

    const inputProps :AuthInputProps = {
        min:'1',
        max:'9',
        pattern:'[0-9]{1}'
    }

    useEffect(()=>{
        if(autoFocus){
            inputsRefs.current[0].focus()
        }
    },[autoFocus])

    const sendResult=()=>{
        const result = inputsRefs.current.map(input=>input.value).join('')
        onChange(result)
    }
    const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {target:{value,nextElementSibling}} = e;
        if(value.match(inputProps.pattern)){
            if(nextElementSibling !== null){
                (nextElementSibling as HTMLInputElement).focus()
            }
        }else{
            e.target.value = ''
        }
        sendResult()
    }
    const handleOnFocus=(e:React.FocusEvent<HTMLInputElement>)=>{
        e.target.select()
    }
    const handleOnKeyDown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        const {key}=e;
        const target = e.target as HTMLInputElement;
        if(key === 'Backspace'){
                
       
        if(target.value ===''){
          if(target.previousElementSibling !== null){
              const previousElement= target.previousElementSibling as HTMLInputElement
              previousElement.value = ''
              previousElement.focus()
          }
        }else{
            target.value = ''
        }
    }
    sendResult()
    }
    const classes = classNames('textbox flex-1 w-1 text-center',{
        [`textbox-${variant}`]:variant
    })
    const inputs =[]
    for (let i=0;i<length;i++){
        inputs.push(
            <input
                key={i}
                type="text"
                maxLength={1}
                disabled={isDisabled}
                onChange={handleOnChange}
                onFocus={handleOnFocus}
                className={classes}
                onKeyDown={handleOnKeyDown}
                ref={(element:HTMLInputElement)=>{
                    inputsRefs.current[i] = element
                }}
            />
        )
    }
return(
    <div className={`flex gap-4 flex-row-reverse`}>
        {inputs}
    </div>
)
}
export default AuthCode