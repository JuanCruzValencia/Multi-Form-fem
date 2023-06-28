export interface IStepOne {
  fullName: string;
  email: string;
  phone: string;
}

export interface IStepTwo {
  plan: PLANS;
  bill: BILLS;
}

export enum PLANS {
  ARCADE = "ARCADE",
  ADVANCED = "ADVANCED",
  PRO = "PRO",
}

export enum BILLS {
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY",
}

export interface IFormContextProps {
  context: string;
}
