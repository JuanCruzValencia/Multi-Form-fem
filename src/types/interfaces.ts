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

export const plans = [
  { plan: PLANS.ARCADE, price: 8 },
  { plan: PLANS.ADVANCED, price: 10 },
  { plan: PLANS.PRO, price: 12 },
];

export enum BILLS {
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY",
}

export interface IFormContextProps {
  context: string;
}
