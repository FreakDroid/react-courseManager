/**
 * Created by Wilfredo on 03/02/2017.
 */
"use strcit";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constant/ActionType');

var AuthorActions = {
  createAuthor: function (author) {
    var newAuthor = AuthorApi.saveAuthor(author);

    //Hey dispatcher, go tell all the stores that an author was created
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  },
  updateAuthor: function (author) {
    var updatedAuthor = AuthorApi.saveAuthor(author);
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    });
  },

  deleteAuthor: function (id) {
    AuthorApi.deleteAuthor(id);
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    });
  }
};

module.exports = AuthorActions;