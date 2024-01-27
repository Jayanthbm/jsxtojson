import React from 'react';
import St from '../Components/St';
import StWrapper from '../Components/StWrapper';

const NeeYennaKayabekayya = ({navigation}) => {
  return (
    <StWrapper
      navigation={navigation}
      back={'BhajaneScreen'}
      title={'ನೀ ಎನ್ನ ಕಾಯಬೇಕಯ'}>
      <St
        line1={'ನೀ ಎನ್ನ ಕಾಯಬೇಕಯ್ಯ  ಆಂಜನೇಯ ನೀ ಎನ್ನ ಕಾಯಬೇಕಯ'}
        line2={
          'ನೀ ಎನ್ನ ಕಾಯಬೇಕು ನಾನು ನಿನ್ನ ಭಜಿಸಬೇಕು  ನಾನು ನೀನು ಒಂದುಗೂಡಿ ರಾಮ ಭಜನೆಯ ಮಾಡಬೇಕಯ'
        }
      />
      <St
        line1={
          'ನೀ ಎನ್ನ ಕಾಯಬೇಕು ನಾನು ನಿನ್ನ ಭಜಿಸಬೇಕು  ನಾನು ನೀನು ಒಂದುಗೂಡಿ ರಾಮ ಭಜನೆಯ ಮಾಡಬೇಕಯ'
        }
        line2={'ಪಯಣಿಗ  ನಾನು  ದಾಟಿಸಯ್ಯ ಅಂಬಿಗ ನೀನ'}
      />
      <St
        line1={
          'ಆಜನ್ಮ ಬ್ರಹ್ಮಚಾರಿ ನೀನು  ಅದ್ವಿತೀಯ ಬಲಶಾಲಿ ನೀನು ರಾಮಭಕ್ತಿ ಭಂಡಾರವನು ಲೋಕಕೆಲ್ಲ ಸಾರಿದವನು'
        }
      />
    </StWrapper>
  );
};

export default NeeYennaKayabekayya;
