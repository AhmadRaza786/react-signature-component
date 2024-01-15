import React, { FC } from 'react';
import { ColorsContainer, ColorItemContainer, ColorItem } from './colors.styled';
import { colors } from '../../utils/constants';

export interface ColorsProps {
  selectedColor?: string
  onChange: (selectedColor: string) => void
}

/**
 * Component that renders the colors
 * @param {ColorsProps} 
 */
const Colors: FC<ColorsProps> = ({ selectedColor,  onChange }: ColorsProps) => {
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
