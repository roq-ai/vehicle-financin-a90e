interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Loan Officer', 'Financial Advisor'],
  tenantName: 'Organization',
  applicationName: 'Vehicle Financing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own user information',
    'View loan details',
    'View vehicle details',
    'Manage own bookings',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage organization details',
    'Manage loan details',
    'Manage vehicle information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/a6c02598-5c2b-4498-bfa0-a7822d1bd87e',
};
