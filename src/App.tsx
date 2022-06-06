import React from 'react';
import './fonts.css'
import './App.css';
import Advantage from "./sections/Advantage/Advantage";
import Header from "./sections/Header/Header";
import PromoSecond from "./sections/PromoSecond/PromoSecond";
import Questions from "./sections/Question/Question";
import PromoFirst from "./sections/PromoFirst/PromoFirst";
import PromoThree from "./sections/PromoThree/PromoThree";
import FeedbackUser from "./sections/FeedbackUser/FeedbackUser";
import Footer from "./sections/Footer/Footer";
import FormBlog from "./sections/FormBog/FromBlog";
import FormCheckList from "./sections/FormCheklist/FormChekList";

function App() {
  return (
      <div className={'container-border'}>
        <Header/>
        <PromoFirst/>
        <Advantage/>
        <PromoSecond/>
        <Questions/>
        <PromoThree/>
        <FeedbackUser/>
        <FormBlog/>
        <FormCheckList/>
        <Footer/>
      </div>
  );
}

export default App;
