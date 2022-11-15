import { combineReducers } from '@reduxjs/toolkit';
// import useLocalStorage from 'hooks/useLocalStorage';
import { defaultContacts } from 'utils/data';

const contacts = defaultContacts;

export const contactsReducer = (state = contacts, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return [action.payload, ...state];
    }
    case 'contacts/deleteContact': {
      return state.filter(contact => contact.id !== action.payload.id);
    }

    case 'contacts/filterContacts': {
      return state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.filterName)
      );
    }

    default:
      return state;
  }
};

const filter = '';

export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case 'filter/setFilter': {
      return action.payload.name;
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
