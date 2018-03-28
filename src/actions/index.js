export const INCREMENT = 'INCREMENT';  // This is some action type to use internally,
export const DECREMENT = 'DECREMENT';  // Use as many action types as you need, of course.
export const ENABLE = 'ENABLE';  // Use as many action types as you need, of course.
export const DISABLE = 'DISABLE';  // Use as many action types as you need, of course.

export const increment = () => {
    return{
        type:INCREMENT,
    }
};

export const decrement = () => {
    return{
        type:DECREMENT,
    }
};

export const enablePage = () => {
    return{
        type:ENABLE,
    }
};

export const disablePage = () => {
    return{
        type:DISABLE,
    }
};