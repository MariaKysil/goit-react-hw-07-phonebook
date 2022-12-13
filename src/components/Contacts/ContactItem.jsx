import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { DeleteButton, ItemWrapper } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ItemWrapper>
      <span>{`${name} ${phone}`}</span>
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ItemWrapper>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
