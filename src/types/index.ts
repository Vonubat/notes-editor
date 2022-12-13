export interface INote {
  text: string;
  id: number;
}

export interface ITag {
  text: string;
  id: number;
  active: boolean;
}

export interface IState {
  notes: INote[];
  tags: ITag[];
}

export interface IContextState {
  state: IState;
}

export interface IContextUpdater {
  dispatch: React.Dispatch<Actions>;
}

export type Actions =
  | { type: 'create_note'; payload: INote }
  | { type: 'update_note'; payload: INote }
  | { type: 'delete_note'; payload: INote['id'] }
  | { type: 'add_tag'; payload: ITag }
  | { type: 'delete_tag'; payload: ITag['id'] }
  | { type: 'activate_tag'; payload: ITag['text'] }
  | { type: 'reset_tags'; payload: ITag['text'] };
