import { FormControl, FormHelperText, InputLabel, Select } from "@mui/material"

// const renderFromHelper = ({ touched, error }) => {
//     if (!(touched && error)) {
//       return
//     } else {
//       return <FormHelperText>{touched && error}</FormHelperText>
//     }
//   }

export const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <FormControl 
    variant="standard"
    sx={{ minWidth: 120 }}
    error={touched && error}>
      <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: input.name,
          id: 'color-native-simple'
        }}
      >
        {children}
      </Select>
    </FormControl>
  )