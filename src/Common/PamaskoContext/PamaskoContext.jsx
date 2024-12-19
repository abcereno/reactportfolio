import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context object
const PamaskoContext = createContext();

// Create the provider component
const PamaskoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    relationship: "",
  });

  const [quizInfo, setQuizInfo] = useState({
    child: "",
    attempts: 0,
    balance: 0,
    completed: false,
  });

  const [loading, setLoading] = useState(true); // Loader state

  const contextValue = {
    userInfo,
    setUserInfo,
    quizInfo,
    setQuizInfo,
    loading, // Expose the loader state to components
  };

  return (
    <PamaskoContext.Provider value={contextValue}>
      {loading ? <div style={{ textAlign: "center", marginTop: "20px" }}>Loading...</div> : children}
    </PamaskoContext.Provider>
  );
};

// Custom hook to use the PamaskoContext
const usePamaskoContext = () => {
  const context = useContext(PamaskoContext);
  if (!context) {
    throw new Error('usePamaskoContext must be used within a PamaskoProvider');
  }
  return context;
};

export { PamaskoProvider, usePamaskoContext };
