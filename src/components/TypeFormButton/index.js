import { useState, Fragment, lazy } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import { ReactTypeformEmbed } from 'react-typeform-embed';
import Mixpanel from '../../common/MixPanel';
import GoogleAnalytics from '../../common/GoogleAnalytics';



import * as S from "./styles";

const Button = lazy(() => import("../../common/Button"));
// const Mixpanel = lazy(() => import("../../common/MixPanel"));



const TypeFormButton = ({ t, buttonText, typeFormUrl, content }) => {

  let typeformEmbed = null;

  const openForm = () => {
    
    // typeformEmbed.typeform.open();
    document.querySelector('.woot--bubble-holder').click();

    GoogleAnalytics.track({
      category: buttonText,
      action: 'Opened',
    });

    Mixpanel.track(buttonText+ '_Form_Opened');

  }
  
  const onFormSubmit = () => {
    GoogleAnalytics.track({
      category: buttonText,
      action: 'Submitted',
    });

    Mixpanel.track(buttonText+ '_Form_Submitted');

  }
  

  return (
      <S.Container>
        <S.Content>{t(content)}</S.Content>

        {/* <ReactTypeformEmbed
          autoOpen={false}
          popup
          url={typeFormUrl}
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{position: 'relative' }}
          ref={tf => {
           typeformEmbed = tf;
          }}
        mode="drawer_right"

          onSubmit={onFormSubmit}
        /> */}
         <Button
                  name="submit"
                  type="submit"
                  onClick={openForm}
                >
                  {t(buttonText)}
        </Button>

  
      </S.Container>
  );
};

export default withTranslation()(TypeFormButton);
