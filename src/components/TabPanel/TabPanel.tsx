import React from 'react';
import { StyledTabPanel } from './tabPanel.styled';

interface TabPanelProps {
  value: number;
  index: number;
  children?: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ value, index, children }) => {
  const isActive = value === index;

  return <StyledTabPanel active={isActive}>{children}</StyledTabPanel>;
};

export default TabPanel;
