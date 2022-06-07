import React, {FC} from 'react';
import persona1 from '../../img/feedback/person1.svg'
import persona2 from '../../img/feedback/person2.svg'
import persona3 from '../../img/feedback/person3.svg'
import persona4 from '../../img/feedback/person4.svg'
import './FeedbackUser.css'

interface FeedbackProps {
    avatar: string,
    name: string,
    country: string,
    body: string,
    style: string
}

const FeedbackUserItem: FC<FeedbackProps> = ({avatar, name, country, body, style}) => {
    return (
        <div id={'feedback'} className={`feedback__item ${style}`}>
            <div className="feedback-user">
                <div className="feedback-user__avatar">
                    <img src={avatar} alt="avatar"/>
                </div>

                <div className="feedback-user-info">
                    <div className="user-info__name">{name}</div>
                    <div className="user-info__country">{country}</div>
                </div>
            </div>

            <div className="feedback__text">
                {body}
            </div>
        </div>
    )
}

const FeedbackUser = () => {
    const listFeedbackUser = [
        {
            id: 0,
            avatar: persona1,
            name: 'Cody Fisher',
            country: 'South Dakota',
            body: 'Fantastic service and great value for money!',
            style: 'feedback__item_small background-yellow'
        },
        {
            id: 1,
            avatar: persona2,
            name: 'Eleanor Pena',
            country: 'Guinea',
            body: 'Thank you so much for taking the time to share your experience with others. So pleased you found the service helpful. Wishing you all the best in your next chapter!',
            style: 'feedback__item_big background-purple'
        },
        {
            id: 2,
            avatar: persona3,
            name: 'Theresa Webb',
            country: 'Greece',
            body: 'Would definitely recommend to anyone looking for an efficient service.',
            style: 'feedback__item_big background-white'
        },
        {
            id: 3,
            avatar: persona4,
            name: 'Esther Howard',
            country: 'Iceland',
            body: 'Well explained and a fast delivery :)',
            style: 'feedback__item_small background-yellow'
        },
    ]
    return (
        <div>
            <section className="feedback">
                {listFeedbackUser.map(feedbackPost => {
                    return (
                        <FeedbackUserItem {...feedbackPost} key={feedbackPost.id}/>
                    )
                })}

                <button className="feedback__button background-blue">
                    Tell your story
                </button>
            </section>
        </div>
    );
};

export default FeedbackUser;
