import React, { useCallback, useState } from 'react';
import { Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import HomeForm from '../../components/pages/Home/Form';
import HomeTable from '../../components/pages/Home/Table';
import * as homeActions from '../../redux/actions/home';
import IReduxState from '../../types/index';
import { StyledContainer } from './styled';
import { IContactsState } from '../../types/home';

const HomeContainer = () => {
  const contacts = useSelector<IReduxState, IContactsState>((state) => state.home.contacts);
  const isFetching = useSelector<IReduxState, boolean>((state) => state.home.isFetching);

  const dispatch = useDispatch();
  const fetchContacts = useCallback(() => dispatch(homeActions.fetchContactsRequest()), [dispatch]);
  const addContact = useCallback((contact) => dispatch(homeActions.createContactRequest(contact)), [dispatch]); 
  const deleteContact = useCallback((id) => dispatch(homeActions.deleteContactRequest(id)), [dispatch]);

  return (
    <StyledContainer>
      <HomeForm  addContact={addContact} />
      <Typography>List contact</Typography>
      <HomeTable contacts={contacts} isFetching={isFetching} fetchContacts={fetchContacts} deleteContact={deleteContact} />
    </StyledContainer>
  )
}


export default HomeContainer;