import React from 'react';

const BlockAfterSubmittedForm = () => {
    return (
        <div className={'form-form background-white'}>
            <h1 style={{marginTop: '150px', fontSize: '4rem', textAlign: 'center' }}>
                Thanks
            </h1>

            <h2 style={{fontSize: '2rem', textAlign: 'center' }}>
                We have sent a message to your email
            </h2>
        </div>
    );
};

export default BlockAfterSubmittedForm;
