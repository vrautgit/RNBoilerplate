import { Dimensions } from 'react-native';
import { _isEmptyObjectHelper, _encryptHelper, _sortByKeyArrHelper } from './helpers';

export const WINDOW = Dimensions.get('window');

export const COLORS = {
    primiaryColor: '#fff',
    secondaryColor: '#555165',
    themeColor: '#6b56af',
    inactiveColor: '#988dbf'
}

export const helpers = {
    isEmptyObject: _isEmptyObjectHelper,
    encrypt: _encryptHelper,
    sortByKeyArrHelper: _sortByKeyArrHelper
}