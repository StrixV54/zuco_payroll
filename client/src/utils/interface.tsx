export interface FirebaseAPIError {
  code: string;
  message: string;
}

export interface UserInfoLogin {
  email: string;
  password: string;
  status?: string;
  first?: string;
  last?: string;
  phoneNumber?: string;
<<<<<<< Updated upstream
=======
  dateOfBirth?: string;
  employeeId?: string;
  grade?: string;
  department?: string;
}

export interface UserInfoFirebase {
  email: string;
  role: string;
  displayName: string;
  lastLoginAt: string;
  status: string;
  phoneNumber: string;
  dateOfBirth: string;
  employeeId: string;
  grade: string;
  uid?: string;
  department: string;
}

export interface UserInfoPersonal {
  currentAddress?: string;
  maritialStatus?: string;
  workSkills?: string;
  salary: string;
  aadhar: string;
  pancard: string;
  pfaAccount: string;
  dateJoined: string;
  manager: string;
  uid?: string;
}

export interface UserInfoSalary {
  basicSalary: string;
  hra: string;
  totalSalary: string;
  taxDeduction: string;
  month: string;
  year: string;
  employeeId: string;
>>>>>>> Stashed changes
}

export interface UserInterface {
  lastLoginAt: string;
  displayName: string;
  role: string;
  uid: string;
  email: string;
}

<<<<<<< Updated upstream
export type RoleLevel = "user" | "admin" | "super";
=======
export type RoleLevel = "Employee" | "Payroll Manager" | "Super Admin";
>>>>>>> Stashed changes
