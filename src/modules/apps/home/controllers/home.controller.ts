import { useState } from "react";

const useHomeController = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  return {
    tabValue,
    handleTabChange,
  };
};

export default useHomeController;
