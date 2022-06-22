


export const requiredField = value => {
    if(value) return undefined
    return 'Field is required'
}

export const maxLength = max => value => {
    if (value && value.length > max) return `Max length is ${max} symbols`
}

export const alphaNumeric = value => {
  return (value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined)
}