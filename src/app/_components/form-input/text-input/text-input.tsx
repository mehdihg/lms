import { FieldValues, get } from "react-hook-form"
import { TextBox } from "../../textbox/textbox"
import { TextInputProps } from "./text-input.types"

const TextInput =<TFormValues extends FieldValues> ({
    name,
    register,
    variant,
    errors,
    rules,
    ...rest
}:TextInputProps<TFormValues>)=>{
    const error = get(errors,name)
    const hasError =!!error
    return(
        <>
        <TextBox
        {...register(name,rules)}
        {...(hasError ? {variant:'error'}:{variant:variant})}
        {...rest}
        />
        
        
        {hasError && (
                <p className="mt-1 text-sm text-error">
                    {error.message}
                </p>
            )
        }
        </>
        

    )
}
export default TextInput