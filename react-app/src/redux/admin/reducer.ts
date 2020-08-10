import { Reducer } from 'redux';
import { Actions, ActionTypes } from './actions';

type State = {
  site: {
    domain: string,
    title: string,
    subtitle: string,
  }
}

const initialState: State = {
  site: {
    domain: 'react.com',
    title: 'title',
    subtitle: 'subtitle',
  }
}

const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MODIFY: {
      return {
        site: {
          domain: action.payload.domain,
          title: action.payload.title,
          subtitle: action.payload.subtitle,
        }
      }
    }

    default: {
      return state
    }
  }
}

export default reducer