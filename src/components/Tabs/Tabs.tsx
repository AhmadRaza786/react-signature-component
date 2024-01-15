import React, { FC } from 'react';
import { TabItem, TabsContainer } from './tabs.styled';
import { SignatureTypes } from '../../utils/enums';

export interface TabProps {
  tabValue: number;
  onChange: (tab: number) => void
}

const Tabs: FC<TabProps> = ({ tabValue, onChange}: TabProps) => {
  return (
    <TabsContainer>
      <TabItem active={tabValue === 0} onClick={() => onChange(0)}>
        {SignatureTypes.DRAW}
      </TabItem>
      <TabItem active={tabValue === 1} onClick={() => onChange(1)}>
        {SignatureTypes.TYPE}
      </TabItem>
    </TabsContainer>
  );
};

export default Tabs;
