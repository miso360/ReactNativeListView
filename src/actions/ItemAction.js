import { LOAD, SEARCH } from './actionType';
import mockData from '../mockData.json';

export const loadItems = () => ({
    type: LOAD,
    payload: mockData
});

export const searchItems = searchTerm => ({
    type: SEARCH,
    payload: searchTerm
});