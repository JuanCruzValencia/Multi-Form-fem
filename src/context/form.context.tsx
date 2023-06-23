import { createContext } from "react";
import { IFormContextProps } from "../types/interfaces";

type Props = {
  children: React.ReactNode;
};

export const FormContext = createContext({} as IFormContextProps);

const FormContextProvider: React.FC<Props> = ({ children }) => {
  const data = {};

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
