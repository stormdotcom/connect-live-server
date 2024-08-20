export const generateSessionId = (): string => {
    return Math.random().toString(36).substring(2, 15);
  };
  
  // Other signaling-related utilities can be added here.
  