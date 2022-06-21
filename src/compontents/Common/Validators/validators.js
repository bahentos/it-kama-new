


export const requiredField = value => {
    if(value) return undefined
    return 'Field is required'
}

export const maxLength = max => value => {
    if (value && value.length > max) return `Max length is ${max} symbols`
}