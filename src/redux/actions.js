export const addContact = contact => {
  return {
    type: 'contacts/addContact',
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: {
      id,
    },
  };
};

export const setFilter = name => {
  return {
    type: 'filter/setFilter',
    payload: {
      name,
    },
  };
};
