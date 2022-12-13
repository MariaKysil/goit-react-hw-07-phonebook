import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { ButtonAdd, Form, Input, Label, Wrapper } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const addNewContact = () => {
    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts`);
      return;
    } else {
      dispatch(addContact({ name, phone: number }));
    }
  };

  const onContactSubmit = event => {
    event.preventDefault();

    addNewContact();

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form onSubmit={onContactSubmit}>
        <Wrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="number">Number</Label>
          <Input
            id="number"
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Wrapper>
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </Form>
    </div>
  );
};
