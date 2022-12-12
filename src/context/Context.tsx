import React, { createContext, useContext, useReducer } from 'react';
import { Actions, IContextState, IContextUpdater, IState } from 'types';

const ContextState = createContext<IContextState | undefined>(undefined);

const ContextUpdater = createContext<IContextUpdater | undefined>(undefined);

export const useContextState = (): IContextState => {
  const context = useContext<IContextState | undefined>(ContextState);

  if (context === undefined) {
    throw new Error('ContextState was used outside of its Provider');
  }
  return context;
};

export const useContextUpdater = (): IContextUpdater => {
  const context = useContext<IContextUpdater | undefined>(ContextUpdater);

  if (context === undefined) {
    throw new Error('ContextUpdater was used outside of its Provider');
  }
  return context;
};

const initialValue: IState = {
  notes: [],
  tags: [],
};

const stateReducer = (state: IState, { type, payload }: Actions): IState => {
  switch (type) {
    case 'create_note':
      return { ...state, notes: [...state.notes, payload] };
    default:
      throw new Error(`Unknown action type`);
  }
};

interface MyProps {
  children?: React.ReactNode;
}

export const ContextProvider = ({ children }: MyProps): JSX.Element => {
  const [state, dispatch] = useReducer<(state: IState, action: Actions) => IState>(
    stateReducer,
    initialValue
  );

  console.log(state);

  return (
    <ContextState.Provider
      value={{
        state,
      }}
    >
      <ContextUpdater.Provider value={{ dispatch }}>{children}</ContextUpdater.Provider>
    </ContextState.Provider>
  );
};
