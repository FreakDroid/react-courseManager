/**
 * Created by Wilfredo on 05/02/2017.
 */

"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constant/ActionType');
var AuthorApi = require('../api/authorApi');
var CoursesApi = require('../api/courseApi');

var InitializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  },

  initCourse: function () {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE_COURSE,
      initialData:{
        courses: CoursesApi.getAllCourses()
      }
    });
  }
};

module.exports = InitializeActions;