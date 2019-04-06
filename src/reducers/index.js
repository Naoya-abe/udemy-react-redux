import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form'; //fromという名前にしてimport
import events from './events';

export default combineReducers({events, form});
