import { IContactsState } from '../../../../types/home';

export const getData = (contacts: IContactsState) => {
  if (contacts)
    return Object.keys(contacts).map(key => ({
      id: key,
      ...contacts[key]
    }));
  return [];
}