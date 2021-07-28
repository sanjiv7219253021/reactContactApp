const initialState = [
  {
    id: 0,
    name: "Sanjiv",
    number: 7219253021,
    email: "sg@gmail.com",
  },
  {
    id: 1,
    name: "Test name",
    number: 7219253020,
    email: "tn@gmail.com",
  },
];

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "UPDATE_CONTACT":
      let filteredState= state.filter((contact) =>
      contact.id === action.payload.id
        ? Object.assign(contact, action.payload)
        : contact
    );
      return [...filteredState];
    case "DELETE_CONTACT":
      let postDeleteState= state.filter((contact) =>
      contact.id !== action.payload ?  contact: null
    );
      return [...postDeleteState];

    default:
      return state;
  }
};

export default ContactReducer;
