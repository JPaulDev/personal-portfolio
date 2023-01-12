import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';

interface State {
  showSidebar: boolean;
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;
}

interface Props {
  children: React.ReactNode;
}

type Action = { type: 'OPEN_SIDEBAR' } | { type: 'CLOSE_SIDEBAR' };

const initialState = {
  showSidebar: false,
  handleOpenSidebar: () => undefined,
  handleCloseSidebar: () => undefined,
};

const UIContext = createContext<State>(initialState);

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        showSidebar: true,
      };
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        showSidebar: false,
      };
    }
    default: {
      return state;
    }
  }
}

export function UIProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOpenSidebar = useCallback(
    () => dispatch({ type: 'OPEN_SIDEBAR' }),
    []
  );

  const handleCloseSidebar = useCallback(
    () => dispatch({ type: 'CLOSE_SIDEBAR' }),
    []
  );

  const value = useMemo(
    () => ({
      ...state,
      handleOpenSidebar,
      handleCloseSidebar,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
}

export function useUI() {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error('useUI must be wrapped in a <UIProvider />');
  }

  return context;
}
