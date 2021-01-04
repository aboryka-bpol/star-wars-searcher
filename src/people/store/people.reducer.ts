import { IPerson } from '../interfaces/people.interface';
import { PeopleAction, PeopleActionTypes } from './people.actions';

export interface IPeopleState {
    people: IPerson[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    isFetching: boolean;
}

export interface IPeopleAwareState {
    peopleReducer: IPeopleState;
}

const initialState: IPeopleState = {
    people: [],
    hasPrevPage: false,
    hasNextPage: true,
    isFetching: false,
};

const reducer = (state = initialState, action: PeopleAction) => {
    switch (action.type) {
        case PeopleActionTypes.FETCH_PEOPLE:
            return {
                ...state,
                isFetching: true,
            };
        case PeopleActionTypes.FETCH_PEOPLE_SUCCESS:
            const { people, prev, next } = action.payload;
            return {
                ...state,
                people,
                hasPrevPage: !!prev,
                hasNextPage: !!next,
                isFetching: false,
            };
        case PeopleActionTypes.FETCH_PEOPLE_FAILURE:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
};

export default reducer;
