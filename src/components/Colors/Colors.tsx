import React, { FC } from 'react';
import { ColorsContainer, ColorItemContainer, ColorItem } from './colors.styled';
import { colors } from '../../utils/constants';

export interface TabProps {
  selectedColor?: string
  onChange: (selectedColor: string) => void
}

const Colors: FC<TabProps> = ({ selectedColor,  onChange }: TabProps) => {
  return (
    <ColorsContainer>
      {colors.map(colorItem => 
        <ColorItemContainer key={colorItem} active={selectedColor ? colorItem === selectedColor : colorItem === colors[0]}>
          <ColorItem
            color={colorItem}
            onClick={() => onChange(colorItem)} 
          />
        </ColorItemContainer>
      )}
    </ColorsContainer>
  );
};

export default Colors;
