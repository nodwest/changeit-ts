import React, {ChangeEvent, FC} from 'react';

interface InputFormProps {
    label: string
    name: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    errorMessage: string
}

const InputForm: FC<InputFormProps> = (props) => {

    const {label, name, value, onChange, placeholder, errorMessage} = props

    return (
        <div className="form__item">
            <label
                className="form__label"
                htmlFor="name"> {label}
            </label>
            <input
                className={errorMessage.length > 0 ? 'form__input border-red' : 'form__input'}
                type="text" name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <div className={'error-input'}>
                {errorMessage}
            </div>
        </div>

    );
};

export default InputForm;
