export const ROUTES = {

    LOGIN: {
        link: `${process.env.REACT_APP_API_URL}/members/login`,
    },

    SIGNUP: {
        link: `${process.env.REACT_APP_API_URL}/members/signup`,
    },

    GOOGLEURL: {
        link: `${process.env.REACT_APP_API_URL}/oauth2/authorization/google`,
    },

    JWTHEADER: {
        link: `${process.env.REACT_APP_API_URL}/oauth2/jwt-header`,
    },

    GETMEMBER: {
        link: `${process.env.REACT_APP_API_URL}/members/me`,
    },

    LOGOUT: {
        link: `${process.env.REACT_APP_API_URL}/logout`,
    },
    
};