type GeoLocationType = {
  readonly lat: string;
  readonly lng: string;
};

type AddressType = {
  readonly street: string;
  readonly suite: string;
  readonly city: string;
  readonly zipcode: string;
  readonly geo: GeoLocationType;
};

type CompanyType = {
  readonly name: string;
  readonly catchPhrase: string;
  readonly bs: string;
};

export type UserType = {
  readonly id: number;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly address: AddressType;
  readonly phone: string;
  readonly website: string;
  readonly company: CompanyType;
};
