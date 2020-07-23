import { ActionType } from 'redux-actions-type';

export const ActionTypes = {
  MODIFY: 'admin/MODIFY',
} as const

const actions = {
  modify(domain: string, title: string, subtitle: string){
    return {
      type: ActionTypes.MODIFY,
      payload: { domain, title, subtitle }
    }
  },
}

export type Actions = ActionType<typeof actions>;
export default actions;