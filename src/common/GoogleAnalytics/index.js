import ReactGA from 'react-ga';


ReactGA.initialize('UA-121464669-5');

let env_check = process.env.NODE_ENV === 'production';

let actions = {

  track: (event) => {
    if (env_check) {
        event.category += '_prod'
    }
        else{
            event.category += '_dev'

        }
        ReactGA.event(event);

  },
  pageview: (pageName) => {
    if (!env_check) {
        pageName += '/dev'
    }
    ReactGA.pageview(pageName)


  }

};

// const Mixpanel = actions;
export default actions;

