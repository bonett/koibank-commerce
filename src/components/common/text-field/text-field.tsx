import React from 'react'
import { TextField, FormControl, Label } from './text-field.styled'
import { TextFieldInterface } from '../../../models/text-field.model';

const TextFieldComponent = ({ type = 'text', value, placeholderText, handleChange, label }: TextFieldInterface) => {
    return (
        <FormControl>
            {
                label && (
                    <Label>{label}</Label>
                )
            }
            <TextField
                type={type}
                placeholder={placeholderText}
                onChange={handleChange}
                value={value}
            />
        </FormControl>
    )
}

export default TextFieldComponent