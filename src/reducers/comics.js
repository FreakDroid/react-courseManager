/**
 * Created by Wilfredo on 14/01/2017.
 */

const comic = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMIC':
      return {
        id: action.id,
        comic: action.text
      };
    case 'DELETE_COMIC':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state
  }
};

const comics = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        comic(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        comic(t, action)
      );
    default:
      return state
  }
};

export default comics