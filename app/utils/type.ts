export interface User {
  eid: string;
  name: string;
  email: string;
  dob: Date;
  doj: Date;
  address: string;
  employment: string;
  role: string;
  manager?: string;
}
export interface ApiResponse<T> {
  [x: string]: any;
  success: boolean;
  data: T;
  message?: string;
}

export type Params = Record<string, string | number | boolean>;
