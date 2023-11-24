import { RoleLevel } from "./interface";

export const StylesConstant: { [key: string]: any } = {
  divCenterStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenVWPort: {
    height: "100vh",
    width: "100vw",
  },
  fullScreenCover: {
    height: "100%",
    width: "100%",
  },
  changeAutofillColor: {
    "& input:-webkit-autofill ": {
      WebkitBoxShadow: "0 0 0 100px #222222 inset",
    },
  },
  drawerListItem: {
    borderRadius: "8px",
    "&:hover": {
      bgcolor: "#303030",
    },
    "&.active": {
      bgcolor: "#0d4250",
    },
  },
  gradientEffectDark: {
    "&:before": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background:
        "linear-gradient(140.9deg, rgb(57, 169, 165) -14.02%, rgba(144, 202, 249, 0) 85.5%)",
      borderRadius: "50%",
      top: "-125px",
      right: "-15px",
      opacity: "0.5",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background:
        "linear-gradient(210.04deg, rgb(57, 169, 165) -50.94%, rgba(144, 202, 249, 0) 95.49%)",
      borderRadius: "50%",
      top: "-85px",
      right: "-95px",
    },
  },
  gradientEffectLight: {
    "&:before": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background:
        "linear-gradient(140.9deg, rgb(57, 169, 165) -14.02%, rgba(144, 202, 249, 0) 85.5%)",
      borderRadius: "50%",
      top: "-125px",
      right: "-15px",
      opacity: "0.3",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background:
        "linear-gradient(210.04deg, rgb(57, 169, 165) -24.94%, rgba(144, 202, 249, 0) 95.49%)",
      borderRadius: "50%",
      opacity: "0.3",
      top: "-85px",
      right: "-95px",
    },
  },
  lightGradientEffectDark: {
    "&:before": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background: "rgb(41, 151, 146)",
      borderRadius: "50%",
      top: "-125px",
      right: "-15px",
      opacity: 0.5,
    },
    "&:after": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background: "rgb(41, 151, 146)",
      borderRadius: "50%",
      top: "-85px",
      right: "-95px",
    },
  },
};

export const UserRoleLevel = {
  EMPLOYEE: "Employee",
  PAYROLL_MANAGER: "Payroll Manager",
  SUPER_ADMIN: "Super Admin",
};

export const ColorConstant = {
  // THEME - TEAL
  TEAL_BG: "#041215",
  TEAL_ACTIVE_BG: "#091e20",
  TEAL_HOVER_BG: "#3eb0ac",
  TEAL_LIGHT_HOVER_BG: "#395b5f",
  TEAL_SIDEBAR_BG: "#0d4250",
  TEAL_SIDEBAR_HOVER_BG: "#0b2b34",
  // THEME - LIGHT
  LIGHT_BG: "#f5f5f5",
  LIGHT_SHADE_BG: "#dcdcdc",
  LIGHT_TEAL_BG: "#63b0ad",
  LIGHT_SIDEBAR_BG: "#a3dfe1",
  LIGHT_SIDEBAR_HOVER_BG: "#a2ceda",
  // DEFAULTS
  BLACK: "#000000",
  WHITE: "#ffffff",
  COOL_YELLOW: "#ffc007",
  COOL_GREEN: "#198d27",
};

export const DropdownOptions: { [key: string]: any } = {
  grade: [
    { value: "G01", label: "G01" },
    { value: "G02", label: "G02" },
    { value: "G03", label: "G03" },
    { value: "G04", label: "G04" },
    { value: "G05", label: "G05" },
    { value: "G06", label: "G06" },
    { value: "G07", label: "G07" },
    { value: "G08", label: "G08" },
    { value: "G09", label: "G09" },
    { value: "G010", label: "G010" },
  ],
  department: [
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "HR", label: "HR" },
    { value: "Finance", label: "Finance" },
    { value: "Engineering", label: "Engineering" },
    { value: "IT Support", label: "IT Support" },
  ],
  status: [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
    { value: "Terminated", label: "Terminated" },
  ],
  role: [
    { value: "Employee", label: "Employee" },
    { value: "Payroll Manager", label: "Payroll Manager" },
    { value: "Super Admin", label: "Super Admin" },
  ],
  maritialStatus: [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
  ],
};
