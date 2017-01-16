/**
 * Created by Wilfredo on 10/01/2017.
 */

/*
 * action types
 */
export const ADD_COMIC = 'ADD_COMIC';
export const DELETE_COMIC = 'DELETE_COMIC';


/*
 * action creators
 */
export function addComic(comic) {
  return { type: ADD_COMIC, comic }
}

export function deleteComic(index) {
  return { type: DELETE_COMIC, index }
}