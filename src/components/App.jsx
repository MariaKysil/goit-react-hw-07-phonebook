import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from 'Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/ContactList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box mt={5} ml={5} mr={5} pt={4} pb={4} pl={4} pr={4} boxShadow="boxShadow">
      <h1>Phonebook</h1>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactForm></ContactForm>
      <ToastContainer />
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </Box>
  );
};
