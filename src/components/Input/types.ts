import { type ChangeEvent } from "react";
export interface InputProps {
    id: string ;
    name : string;
    type? : string;
    placeholder? : string;
    label: string;
    disabled?: boolean| undefined;
    error? :string | undefined;
    value? : string;
    onChange? : (ervent :ChangeEvent<HTMLInputElement>)=> void
}