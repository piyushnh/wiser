import React, { useEffect, lazy } from 'react'
import Faq from "react-faq-component";


import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import FaqContent from "../../content/FaqContent.json";
import GoogleAnalytics from '../../common/GoogleAnalytics';


// const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const TypeFormButton = lazy(() => import("../../components/TypeFormButton"));



const Home = () => {
  useEffect(() => {
    GoogleAnalytics.pageview('/home');

  }, []);
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
       <ContentBlock
        type="left"
        title={AboutContent.title}
        section={AboutContent.section}
        icon="graphs.svg"
        id="mission"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        id="product"
      />
              <TypeFormButton 
        buttonText={'Chat with us'}
        typeFormUrl={'https://rkeg813atqm.typeform.com/to/Gq1o3vKn'}
      />

     
      {/* <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />

      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
       <Faq
                data={FaqContent}
            />
             <TypeFormButton 
        buttonText={'Contact Us'}
        typeFormUrl={'https://rkeg813atqm.typeform.com/to/dkLtLebY'}
      />
      {/* <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
