import React from 'react';
import { SelectOptionInterface } from '../../../models/select-option.model';
import { SelectField, FormControl, Label } from './select-option.styled';

const SelectOptionField = ({ name, value, handleChangeOption, options, label }: SelectOptionInterface) => {
    return (
        <FormControl>
            {
                label && (
                    <Label>{label}</Label>
                )
            }
            <SelectField defaultValue={'DEFAULT'} name={name} value={value} onChange={handleChangeOption}>
                <>
                    <option value="DEFAULT" disabled>Seleccione una opción ...</option>
                    {
                        options.map((option, index) => (
                            <option
                                key={index}
                                value={option.value}
                                selected={option.value === value}
                            >
                                {option.name}
                            </option>
                        ))
                    }
                </>
            </SelectField>
        </FormControl>
    )
}

export default SelectOptionField;