import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ConfigContext = createContext();

// Export a custom hook for easy access to the context
export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(origin+'/storage/content_option.json');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log('Get data ', data)
        setConfig(data);
      } catch (error) {
        console.error("Failed to fetch the config:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return (
    <ConfigContext.Provider value={{ config, loading }}>
      {children}
    </ConfigContext.Provider>
  );
};

