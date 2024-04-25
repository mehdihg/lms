import { DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form"
import { TextBoxProps } from "../../textbox/textbox.types"
export type TextInputProps<TFormsValue extends FieldValues> = Omit<TextBoxProps,'name'> & {
register:UseFormRegister<TFormsValue>;
name:Path<TFormsValue>;
rules?:RegisterOptions;
errors?:Partial<DeepMap<TFormsValue,FieldError>>
}