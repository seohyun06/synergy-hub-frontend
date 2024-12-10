import React, { createContext, useContext, useState } from "react";

// Context 생성
const TeamContext = createContext();

// Context Provider
export const TeamProvider = ({ children }) => {
    const [teamId, setTeamId] = useState(null);

    return (
        <TeamContext.Provider value={{ teamId, setTeamId }}>
            {children}
        </TeamContext.Provider>
    );
};

// Context Consumer Hook
export const useTeam = () => useContext(TeamContext);
