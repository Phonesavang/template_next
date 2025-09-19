export interface GetEnterpriseRecordResult {
  publicEnterpriseRecord: PublicEnterpriseRecord;
  serviceResults: ServiceResults;
}

export interface PublicEnterpriseRecord {
  cancellationDate: CancellationDate;
  enterpriseId: CancellationDate;
  enterpriseLegalStructure: CancellationDate;
  enterpriseLocation: EnterpriseLocation;
  enterpriseNameEnglish: CancellationDate;
  enterpriseNameLao: CancellationDate;
  foreignInvestorFlag: CancellationDate;
  investmentAmount: CancellationDate;
  investmentCurrency: CancellationDate;
  investors: Investors;
  isicCodes: IsicCodes;
  lastUpdateDate: CancellationDate;
  lsicCodes: LsicCodes;
  registrationCertificateNumber: CancellationDate;
  registrationDate: CancellationDate;
  registrationOfficeCode: CancellationDate;
  registrationOfficeType: CancellationDate;
  representativeGender: CancellationDate;
  representativeIdCardNumber: CancellationDate;
  representativeIdCardType: CancellationDate;
  representativeName: CancellationDate;
  representativeNationality: CancellationDate;
  representativePhoneNumber: CancellationDate;
  representativePositionType: CancellationDate;
  taxRecord: TaxRecord;
}

export interface CancellationDate {
  value: string;
}

export interface EnterpriseLocation {
  districtId: CancellationDate;
  districtNameEnglish: CancellationDate;
  districtNameLao: CancellationDate;
  geoLocation: GeoLocation;
  provinceId: CancellationDate;
  provinceNameEnglish: CancellationDate;
  provinceNameLao: CancellationDate;
  street: CancellationDate;
  villageId: CancellationDate;
  villageNameEnglish: CancellationDate;
  villageNameLao: CancellationDate;
}

export interface GeoLocation {
  Latitude: CancellationDate;
  Longitude: CancellationDate;
}

export interface Investors {
  InvestorRecord: InvestorRecord;
}

export interface InvestorRecord {
  address: Address;
  cardNumber: CancellationDate;
  mobileNumber: CancellationDate;
  name: CancellationDate;
  nationality: CancellationDate;
  ownershipPercentage: CancellationDate;
  telephoneNumber: Statusdetails;
}

export interface Address {
  districtId: CancellationDate;
  districtNameEnglish: CancellationDate;
  districtNameLao: CancellationDate;
  geoLocation: GeoLocation;
  provinceId: CancellationDate;
  provinceNameEnglish: CancellationDate;
  provinceNameLao: CancellationDate;
  street: Statusdetails;
  villageId: CancellationDate;
  villageNameEnglish: CancellationDate;
  villageNameLao: CancellationDate;
}

export interface Statusdetails {}

export interface IsicCodes {
  SectorCode: IsicCodesSectorCode;
}

export interface IsicCodesSectorCode {
  descriptionLao: Statusdetails;
  sectorCode: CancellationDate;
}

export interface LsicCodes {
  SectorCode: LsicCodesSectorCode;
}

export interface LsicCodesSectorCode {
  descriptionLao: CancellationDate;
  sectorCode: CancellationDate;
}

export interface TaxRecord {
  lastUpdateDate: CancellationDate;
  registrationDate: CancellationDate;
  taxFilingStatus: CancellationDate;
  taxPaidStatus: CancellationDate;
  taxPermanentClosureDate: CancellationDate;
  taxStatus: CancellationDate;
  tin: CancellationDate;
  vatEffectiveDate: CancellationDate;
  vatStatus: CancellationDate;
}

export interface ServiceResults {
  statusCode: CancellationDate;
  statusDescription: CancellationDate;
  statusdetails: Statusdetails;
}
