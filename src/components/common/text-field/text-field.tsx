import React from 'react'

interface TextFieldInterface {
    placeholderText: string;
    handleChange: any
}

const TextFieldComponent = ({ placeholderText, handleChange }: TextFieldInterface) => {
    return (
        <input type="text" placeholder={placeholderText} onChange={handleChange} />
    )
}

export default TextFieldComponent