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

    REISSUE: {
        link: `${process.env.REACT_APP_API_URL}/reissue`,
    },

    /* 팀 캘린더 */
    CREATE_EVENT: (calendarId) => `${process.env.REACT_APP_API_URL}/calendar/${calendarId}/events`,
    GET_TEAM_EVENTS: (teamId) => `${process.env.REACT_APP_API_URL}/calendar/team/${teamId}/events`,
    UPDATE_EVENT: (calendarEventId) => `${process.env.REACT_APP_API_URL}/calendar/events/${calendarEventId}`,
    DELETE_EVENT: (calendarEventId) => `${process.env.REACT_APP_API_URL}/calendar/events/${calendarEventId}`,

    /* 개인 캘린더 */
   GET_USER_EVENTS: (memberId) => `${process.env.REACT_APP_API_URL}/calendar/my-events`,


};