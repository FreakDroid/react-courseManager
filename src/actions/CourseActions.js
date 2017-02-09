/**
 * Created by Wilfredo on 07/02/2017.
 */
"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constant/ActionType');

var CourseActions = {
  createCourse: function (course) {

    var newCourse = CourseApi.saveCourse(course);
    console.log('newCourse');
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSE,
      course: newCourse
    });
  },

  updateCourse: function (course) {
    var courseUpdated = CourseApi.saveCourse(course);
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_COURSE,
      course: courseUpdated
    });
  },

  deleteCourse: function (id) {
    var courseDeleted = CourseApi.deleteCourse(id);
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_COURSE,
      id: id
    });
  }
};

module.exports = CourseActions;