import { Word } from '../types';


const defaultWords : Word[] = [
    { en: 'One', vn: 'Mot', isMemorized: true, _id: 'abcd1' },
    { en: 'Two', vn: 'Hai', isMemorized: false, _id: 'abcd2' },
    { en: 'Three', vn: 'Ba', isMemorized: false, _id: 'abcd3' },
    { en: 'Four', vn: 'Bon', isMemorized: true, _id: 'abcd4' }
];


export function wordsReducer(state = defaultWords , action) {
    if (action.type='SHOW_FORM') return true;
    if (action.type='HIDEW_FORM') return false;
    return state;
}