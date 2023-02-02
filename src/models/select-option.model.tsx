interface OptionInterface {
    value: string;
    name: string;
}

export interface SelectOptionInterface {
    name: string;
    label: string;
    value: string;
    handleChangeOption: any;
    options: Array<OptionInterface>
}