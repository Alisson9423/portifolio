import { RefObject } from "react";
export interface Option {
    label: string;
    value: number;
    others?: string;
}
export interface SelectProps {
    placeholder: string;
    initalValue?: Option | null;
    options: Option[];
    onChange: (value: Option) => void;
    clear?: RefObject<HTMLButtonElement>;
}

export interface FiltroProps {
    onChange: (value: Option) => void;
    options: Option[];
    placeholder?: string;
    width?: number | string;
}

export interface MultipleSelectProps {
    placeholder: string;
    value?: Option[] | null;
    options: Option[];
    onChange: (value: Option[]) => void;
    clear?: RefObject<HTMLButtonElement>;
}

export interface DatePickerProps {
    onChange: (data: string) => void;
    initialValue: Date | null;
    clear?: RefObject<HTMLButtonElement>;
}
