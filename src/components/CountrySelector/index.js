import { FormControl, FormHelperText, InputLabel, NativeSelect } from "@material-ui/core"
import React from "react"

function CountrySelector({ value, handleOnChange, countries }) {
    return (
        <FormControl>
            <InputLabel htmlFor="" shrink >Country</InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector'
                }}>
                {
                    countries.map(country => (
                        <option key={country.Country} value={country.ISO2.toLowerCase()}>{country.Country}</option>
                    ))
                }
            </NativeSelect>
            <FormHelperText>Selection Country</FormHelperText>
        </FormControl>
    )
}

export default CountrySelector