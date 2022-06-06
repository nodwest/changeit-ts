import React, {useState} from 'react';
import handImg from '../../img/form/hand.png'
import './FormChekList.css'
import FormSection from "./components/FormSection";
import BlockAfterSubmittedForm from "./components/BlockAfterSubmittedForm";

const FormCheckList = () => {

    const [isFormSend, setIsFormSend] = useState(false)

    return (
        <section id={'form'} className="form">
            <div className="form-about background-yellow">
                <div className="form-about__text">Get your free Change.it checklist</div>

                <div className="form-about__img">
                    <img src={handImg} alt="hand"/>
                </div>
            </div>

            {
                !isFormSend
                    ? <FormSection setIsFormSend={setIsFormSend}/>
                    : <BlockAfterSubmittedForm/>
            }

        </section>
    );
};

export default FormCheckList;
