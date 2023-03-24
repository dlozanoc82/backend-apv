const checkAuth = ( req, res, next) => {
    console.log('Desde middleware');
    next();
};

export default checkAuth;
