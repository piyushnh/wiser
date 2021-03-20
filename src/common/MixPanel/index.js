import mixpanel from 'mixpanel-browser';

mixpanel.init('a87c5f9ced8c46d4a462de9439c8f310', {debug:true, ignore_dnt: true});

let env_check = process.env.NODE_ENV === 'production';

let actions = {
  identify: (id) => {
    if (env_check) mixpanel.identify(id);
  },
  alias: (id) => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) {
        mixpanel.track(name+'_prod', props)}
        else{
    mixpanel.track(name+'_dev', props)
        }
  },
  people: {
    set: (props) => {
      if (env_check) mixpanel.people.set(props);
    },
  },
};

// const Mixpanel = actions;
export default actions;

