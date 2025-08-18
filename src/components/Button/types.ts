import { type ReactNode } from "react";
export type ButtonType = "button" | "submit" | "reset" | undefined; 
export interface ButtonProps {
    buttonName : string;
    type?: ButtonType;
    onClick?: () => void;
    children?: ReactNode;


}