import { createContext, useContext } from 'react';

const BaseNameContext = createContext<string | undefined>(undefined);

export const useBaseName = () => {
  return useContext(BaseNameContext);
};

export const BaseNameProvider = BaseNameContext.Provider;