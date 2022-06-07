import React, {FC, useState} from "react";
import InputForm from "./InputForm";

interface IStateIsFormSend  {
    setIsFormSend : (value:boolean)=> void
}

interface IStateInputFormSection {
    value : string,
    errorText : string
}

interface IValidateName {
    (field : IStateInputFormSection , setValue : (field : IStateInputFormSection) => void) : void
}

const FormSection : FC<IStateIsFormSend> = ({setIsFormSend} ) => {

    const [firstName, setFirstName] = useState<IStateInputFormSection>({
        value: '',
        errorText: ''
    })

    const [lastName, setLastName] = useState<IStateInputFormSection>({
        value: '',
        errorText: ''
    })

    const [email, setEmail] = useState<IStateInputFormSection>({
        value: '',
        errorText: ''
    })

    const [dateEvent, setDateEvent] = useState<IStateInputFormSection>({
        value: '',
        errorText: ''
    })
    // const validateName = <T extends IStateInputBlockCheck, R extends Function> (field : T, setValue : R) => {
    const validateName : IValidateName= (field, setValue ) => {
        if (field.value === '') {
            setValue({
                ...field,
                errorText: 'This field cannot be empty',
            })
        } else if (/^[a-z]/.test(field.value)) {
            setValue({
                ...field,
                errorText: 'This field must start with a capital letter',
            })
        } else if (field.value.length <= 3) {
            setValue({
                ...field,
                errorText: 'This field must contain more than 3 characters',
            })

        } else if (field.value.includes(' ')) {
            setValue({
                ...field,
                errorText: 'This field can only contain one word without spaces',
            })
        } else {
            setValue({
                ...field,
                errorText: '',
            })
        }
    }

    const validateEmail = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            setEmail({
                ...email,
                errorText: '',
            })
        } else if (email.value.length === 0) {
            setEmail({
                ...email,
                errorText: 'This field cannot be empty',
            })
        } else {
            setEmail({
                ...email,
                errorText: 'You have entered an invalid email address!',
            })
        }
    }

    const validateDate = () => {
        let date : number  = +new Date(dateEvent.value)
        const nowDate = +new Date()

        if (/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/.test(dateEvent.value)) {
            if (date > nowDate) {
                setDateEvent({
                    ...dateEvent,
                    errorText: 'Сan not be scheduled for today or previously',
                })
            } else if (date < nowDate) {
                setDateEvent({
                    ...dateEvent,
                    errorText: '',
                })
            }
        } else if (dateEvent.value.length === 0) {
            setDateEvent({
                ...dateEvent,
                errorText: 'This filed can not be empty',
            })
        }
        else {
            setDateEvent({
                ...dateEvent,
                errorText: 'Wrong date format',
            })
        }
    }

    const handlerOnSubmitForm = (e:React.FormEvent<HTMLFormElement>) => {
        let isError = false
        const arr = [firstName, lastName, email, dateEvent]
        e.preventDefault()
        arr.forEach(item => {

            if (item.errorText.length > 0) {
                isError = true
            }
        })
        if (!isError) {
            const formData = new FormData(e.currentTarget);
            for (let data of formData.entries()) {
                console.log(data)
                setIsFormSend(true)
            }
        }
    }
    const handlerClickSubmit = () => {
        validateName(firstName, setFirstName)
        validateName(lastName, setLastName)
        validateEmail()
        validateDate()
    }

    return (
        <form
            onSubmit={handlerOnSubmitForm}
            id="form"
            className="form-form background-white">

            <InputForm
                label={'First Name'}
                name={'firstName'}
                value={firstName.value}
                placeholder="Enter Your First Name"
                onChange={(e) => setFirstName({
                    ...firstName,
                    value: e.target.value
                })}
                errorMessage={firstName.errorText}
            />

            <InputForm
                label={'Last Name'}
                name={'LastName'}
                value={lastName.value}
                placeholder="Enter Your First Name"
                onChange={(e) => setLastName({
                    ...lastName,
                    value: e.target.value
                })}
                errorMessage={lastName.errorText}
            />

            <InputForm
                label={'Email'}
                name={'Email'}
                value={email.value}
                placeholder="Enter Your Email"
                onChange={(e) => setEmail({
                    ...email,
                    value: e.target.value
                })}
                errorMessage={email.errorText}
            />

            <div className="form__item">
                <label
                    className="form__label select-row"
                    htmlFor="event"> Life Event
                </label>
                <select
                    className="form__input select"
                    name="event"
                    id="event">
                    <option value="Marriage">Marriage</option>
                </select>
            </div>

            <InputForm
                label={'Life Event Date'}
                name={'date'}
                value={dateEvent.value}
                placeholder="MM/DD/YYYY"
                onChange={(e) => setDateEvent({
                    ...dateEvent,
                    value: e.target.value
                })}
                errorMessage={dateEvent.errorText}
            />

            <div className="form__description">
                By submitting your details you agree with our <span> Privacy Policy.</span>
            </div>

            <input className="form__submit background-blue"
                   type="submit"
                   value='Download'
                   onClick={handlerClickSubmit}
            />
        </form>
    )
}

export default FormSection