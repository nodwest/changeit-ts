import React, {FC} from 'react';

interface InputBlogProps {
    label: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputBlog: FC<InputBlogProps> = (props) => {
    const {label, placeholder, value, onChange} = props
    return (
        <div>
            <div className="form__item">
                <label
                    className="form__label"
                    htmlFor="blog_title"> {label}
                </label>

                <input
                    className="form__input"
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default InputBlog;
