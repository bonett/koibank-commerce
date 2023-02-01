import React from 'react'
import TextField from '../common/text-field';

const SearchBarComponent = () => {
    const handleInputSearch = (e: any) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <TextField placeholderText={'Search'} handleChange={handleInputSearch} />
        </div>
    )
}

export default SearchBarComponent;