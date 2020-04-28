export interface IContactState {
  id: string,
  username: string,
  phone: string,
  email: string,
  address: string
}  

export interface IContactsState {
  [id: string]: IContactState
}  


export interface IHomeState {
  isFetching: boolean,
  contacts: IContactsState
  error?: Object
}

export interface IHomeMetaData {
  id: string,
  contact: IContactState
}

export interface IHomeAction {
  type: string,
  payload: IHomeState,
  metaData: IHomeMetaData
}