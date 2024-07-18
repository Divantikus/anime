import { StylesConfig } from 'react-select';

export const selectEpisodeStyles: StylesConfig = {
    container: (styles) => ({
        ...styles,
        position: 'absolute',
        zIndex: 100,
    }),
    input: (styles) => ({
        ...styles,
        color: '#ffffff',
    }),
    singleValue: (styles) => ({
        ...styles,
        color: '#ffffff',
    }),
    indicatorSeparator: (styles) => ({
        ...styles,
        backgroundColor: 'transparent',
    }),
    control: (styles) => ({
        ...styles,
        backgroundColor: '#252525',
        border: '1px solid black',
        color: '#fff',
    }),
    menuList: (styles) => ({
        ...styles,
        backgroundColor: '#252525',
        color: '#ffffff',
        scrollbarWidth: 'auto',
    }),
    option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        backgroundColor:
            (isFocused && '#5e5e5e') ||
            (isSelected && '#5e5e5e') ||
            styles.backgroundColor,
    }),
};
