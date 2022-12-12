export interface IData {
  text: string;
  id: number;
}

export interface IState {
  notes: IData[];
  tags: IData[];
}

export interface IContextState {
  state: IState;
}

export interface IContextUpdater {
  dispatch: React.Dispatch<Actions>;
}

export type Actions = { type: 'create_note'; payload: IData };
