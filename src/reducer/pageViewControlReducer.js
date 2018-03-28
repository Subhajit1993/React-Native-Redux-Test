const pageControl = (state = 'Enabled', action) => {
    switch (action.type) {
        case 'ENABLE':
            return 'Enabled';
        case 'DISABLE':
            return 'Disabled';
        default:
            return state;
    }
};

export default pageControl