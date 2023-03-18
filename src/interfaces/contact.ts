export interface IContact {
  email: string,
  address: string,
  city: ICity,
  phone: string,
  geo: IGeo
}

export interface ICity {
  title: string;
}

export interface IGeo {
  lat: string,
  lon: string
}
