import { type ComponentProps } from "react" 

type InputProps = ComponentProps<'input'> & {
    type: string
}

export function Input({type, ...rest}: InputProps) {
    return (
        <input type={type} {...rest} />
    )
}