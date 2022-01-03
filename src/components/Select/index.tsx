import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
    SelectProps,
    MultipleSelectProps,
    FiltroProps,
    DatePickerProps,
    Option,
} from "./types";
import Autocomplete from "@mui/material/Autocomplete";
import setaBaixo from "../../assets/img/seta-baixo.svg";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";

export function Filtro(props: FiltroProps) {
    const { onChange, options, placeholder, width } = props;

    return (
        <Autocomplete
            disablePortal
            popupIcon={<img src={setaBaixo} alt="seta" />}
            options={options}
            className="combo-box-filtro"
            onChange={(e: object, value: any) => {
                onChange(value);
            }}
            isOptionEqualToValue={(option, value) =>
                option.value === value.value
            }
            sx={{
                width: width ? width : 300,
                color: "red",
                borderBottom: "1px solid #203742;",
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={placeholder ? placeholder : "perfil"}
                />
            )}
        />
    );
}

export function Select(props: SelectProps) {
    const { placeholder, options, onChange, clear, initalValue } = props;

    const [values, setValues] = useState<Option | null>(null);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (initalValue) {
            setValues(initalValue);
        } else {
            setValues(null);
        }
    }, [initalValue]);

    const clearSelected = () => {
        setValues(null);
    };

    return (
        <>
            <button hidden type="button" ref={clear} onClick={clearSelected}>
                Clear selected
            </button>
            <Autocomplete
                className="combo-box-select"
                popupIcon={<img src={setaBaixo} alt="seta" />}
                options={options}
                value={values}
                inputValue={inputValue}
                disablePortal={true}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                }
                onChange={(e: object, value: any) => {
                    if (value?.value) {
                        onChange(value);
                    }
                    setValues(value);
                }}
                onInputChange={(_, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                sx={{
                    width: "100%",
                    height: "100%",
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        autoComplete="new-password"
                        label={placeholder}
                    />
                )}
            />
        </>
    );
}

export function MultipleSelect(props: MultipleSelectProps) {
    const { placeholder, options, onChange, value } = props;

    const [values, setValues] = useState<Option[] | null>(value ? value : []);

    return (
        <>
            <Autocomplete
                multiple
                className="combo-box-select multipleSelect"
                popupIcon={<img src={setaBaixo} alt="seta" />}
                options={options}
                getOptionLabel={(option) => option.label}
                value={values ? values : []}
                defaultValue={values ? values : []}
                isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                }
                onChange={(e: object, value: Array<Option>) => {
                    onChange(value);
                    setValues(value);
                }}
                sx={{
                    width: "100%",
                    height: "100%",
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        autoComplete="new-password"
                        placeholder={placeholder}
                        SelectProps={{ native: true }}
                    />
                )}
            />
        </>
    );
}

export function DateTime(props: DatePickerProps) {
    const { onChange, initialValue, clear } = props;

    const [text, setText] = useState<string>("");
    const [value, setValue] = useState<Date | null>(initialValue);

    useEffect(() => {
        if (initialValue) {
            var data = new Date(initialValue).toLocaleDateString();
            var time = new Date(initialValue).toLocaleTimeString();
            setText("");
            if (data !== "Invalid Date" && time !== "Invalid Date") {
                if (!value) {
                    setText(`${data} ${time}`);
                }
            }
        }
    }, [initialValue, value]);

    const clearSelected = () => {
        setValue(null);
    };

    return (
        <>
            <button hidden type="button" ref={clear} onClick={clearSelected}>
                Clear selected
            </button>
            <LocalizationProvider id="asasd" dateAdapter={AdapterDateFns}>
                <MobileDateTimePicker
                    value={value}
                    onOpen={() => {
                        setText("");
                        setValue(new Date());
                    }}
                    onChange={(newValue) => {
                        onChange(newValue ? newValue.toLocaleString() : "");
                        setText("");
                        if (newValue) {
                            setValue(newValue);
                        }
                    }}
                    renderInput={(params) => {
                        return (
                            <>
                                {text ? (
                                    <p className="date-hora">{text}</p>
                                ) : null}
                                <TextField
                                    {...params}
                                    label={"VALIDADE"}
                                    autoComplete="new-password"
                                    focused={text ? true : false}
                                />
                            </>
                        );
                    }}
                />
            </LocalizationProvider>
        </>
    );
}
