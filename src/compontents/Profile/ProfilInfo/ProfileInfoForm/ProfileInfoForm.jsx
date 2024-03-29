import s from "./ProfileInfoForm.module.css";
import { Field, initialize, reduxForm } from 'redux-form';
import { muiInputField, renderTextArea } from "../../../Common/FormsControls/formControls";
import { Button, createTheme, Grid, ThemeProvider } from "@mui/material";
import { renderSelectField } from "../../../Common/FormsControls/muiSelected";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ProfileInfoForm = ({
    handleSubmit, pristine,
    submitting, classes,
    savePhoto, setEdit, error,
    ...props }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initialize('profile_update_form', props.initialValues))
    }, [props.initialValues])

    const contacts = props.initialValues.contacts

    const theme = createTheme({
        palette: {
            primary: {
                main: '#32516B',
            },
            secondary: {
                main: '#CCE7FF',
            }
        },
    });

    let onChangeHandler = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }


    return (
        <form onSubmit={handleSubmit} className={s.container}>
            {error && <div className={s.formError}>{error}</div>}

            <ThemeProvider theme={theme}>
                {/* Имя и работа */}
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    rowSpacing={1}
                >
                    <Grid item xs className={s.textInput}>
                        <label>Фото профиля</label><span className={s.spacer} />
                        <input type="file" placeholder='Фото профиля' onChange={onChangeHandler} />
                    </Grid>
                    <Grid item xs className={s.textInput}>
                        <Field
                            label={'Имя'}
                            id="standard-basic"
                            variant="standard"
                            component={muiInputField}
                            name='fullName'
                        ></Field>
                    </Grid>
                    <Grid item xs className={s.textInput}>
                        <Field
                            label={'Обо мне'}
                            id="standard-basic"
                            variant="standard"
                            component={renderTextArea}
                            minRows={3}
                            style={{ width: 170 }}
                            name='aboutMe'
                        ></Field>
                    </Grid>
                    <Grid item xs className={s.textInput}>
                        <Field
                            classes={classes}
                            name='lookingForAJob'
                            component={renderSelectField}
                            label="Ищу работу"
                        >
                            <option value="" />
                            <option value={false}>Нет</option>
                            <option value={true}>Да</option>
                        </Field>
                    </Grid>
                    <Grid item xs className={s.textInput}>
                        <Field
                            id="standard-basic"
                            variant="standard"
                            label={'Профессиональные навыки'}
                            component={renderTextArea}
                            minRows={3}
                            style={{ width: 170 }}
                            name='lookingForAJobDescription'
                        ></Field>
                    </Grid>
                </Grid>

                {/* Контакты */}
                <div className={s.contactHeaders}>
                    <label>Контакты</label>
                </div>
                <Grid container spacing={3}>
                    {
                        Object.keys(contacts).map(name => {
                            return (
                                <Grid item
                                    key={`div_${name}`}
                                    className={s.textInput}>
                                    <Field
                                        id="standard-basic"
                                        variant="standard"
                                        label={name}
                                        component={muiInputField}
                                        name={`contacts.${name}`}
                                    ></Field>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Grid
                    container
                    direction="colunn"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                    className={s.btnContaner}
                >
                    <Grid item>
                        <Button
                            type="submit"
                            disabled={pristine || submitting}
                            variant="contained"
                        >Save</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            type="button"
                            onClick={setEdit}
                            variant="outlined"
                        >Cancel</Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </form>
    )
}

const ProfileUpdateForm = reduxForm({
    form: 'profile_update_form',
    enableReinitialize: true
}
)(ProfileInfoForm)

export default ProfileUpdateForm
