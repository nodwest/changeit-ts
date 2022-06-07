import React from 'react';
import './Question.css'

type QuestionItemProps = {
    title: string
    text: string
    questStyle: string
}

const QuestionItem = ({title, text, questStyle}: QuestionItemProps) => {
    return (
        <div className={`question__item ${questStyle}`}>
            <div className="question__item__title">
                {title}
            </div>

            <div className="question__item__subtitle">
                {text}
            </div>
        </div>
    )
}
const Questions = () => {
    const listQuestions = [
        {
            title: ' Why should I choose Change.it?',
            text: 'We strive to provide the very best in automation, coupled with apersonal, human touch. Profiles are usually populated within 60`seconds of checkout.',
            questStyle: 'background-purple'
        },

        {
            title: 'Will my name change instantly after using this service?',
            text: 'No. We can only advise you on how to change your name and equip you with the tools required to go about it.',
            questStyle: 'background-yellow'

        },
        {
            title: 'What kind of companies do I need to notify?',
            text: 'As well as helping you through the process of how to change your name, NameSwitch makes it easier to identify which organizations and companies you’ll need to notify about your impending name change.',
            questStyle: 'background-white'
        },
        {
            title: 'Ask a Question',
            text: '',
            questStyle: 'question__item-blue'

        }

    ]
    return (
        <section id={'questions'} className="questions">
            {
                listQuestions.map(post => {
                    return (
                        <QuestionItem {...post} key={post.title}
                        />
                    )
                })
            }
        </section>
    );
};

export default Questions;
