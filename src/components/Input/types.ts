export interface InputProps {
    id: string ;
    name : string;
    type? : string;
    placeholder? : string;
    label: string;
    disabled?: boolean| undefined;
    error? :string | undefined;
}