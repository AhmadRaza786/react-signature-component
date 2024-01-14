import { FC } from 'react';
import { FontsContainer, FontOption, FontSelectionContainer, FontSelection } from "./fontSelector.styled";
import { fonts } from '../../utils/constants';

interface FontSelectorProps {
  fontFamily: string;
  setFontFamily: (color: string) => void
}

const FontSelector: FC<FontSelectorProps> = ({ fontFamily, setFontFamily }: FontSelectorProps) => {
  return (
      <FontsContainer>
        {fonts.map((font) => (
          <FontOption key={font} onClick={() => setFontFamily(font)}>
            <FontSelectionContainer>
              <FontSelection active={fontFamily === font} />
            </FontSelectionContainer>
            <span style={{ fontSize: 30, fontFamily: font }}>Signature</span>
          </FontOption>
        ))}
      </FontsContainer>
  );
};

export default FontSelector;