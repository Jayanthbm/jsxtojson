import React from 'react';
import St from '../Components/St';
import StWrapper from '../Components/StWrapper';

const SriRamaManagala = ({navigation}) => {
  return (
    <StWrapper
      navigation={navigation}
      back={'BhajaneScreen'}
      title={'ಶ್ರೀ ರಾಮ ಮಂಗಳ'}>
      <St
        line1={
          'ಮಂಗಳಂ ಜಯ ಮಂಗಳಂ ಶುಭ ಮಂಗಳಂ ಶ್ರೀ ರಾಮಗೆ ಸಂಗ ರಹಿತ ವಿಹಂಗ ಪಾಲಗೆ ಸಂಗ ರಾಂಗನ ಭೀಮಗೆ'
        }
        line2={'||ಮಂಗಳ...||'}
      />
      <St
        line1={
          'ಚಂಡ ರಕ್ಷಸ ಸಮತೆಯಿಂದಲಿ ಖಂಡಿಸಿದವರಿಗೆ ಶೂರಗೆ ಅಂಡಖಂಡ ಬ್ರಹ್ಮಾಂಡ ನಾಯಕ ಆದಿಕೊದಂಡ ರಾಮಗೆ '
        }
        line2={'||ಮಂಗಳ...||'}
      />
      <St
        line1={
          'ಭಾನು ಕುಲದಲಿ ಜನಿಸಿದವರಿಗೆ ಭಕ್ತಜನ ಪರಿಪಾಲಗೆ ಲೀಲೆಯಿಂದಲಿ ವಾಲಿನಿಗ್ರಹ ಮಾಡಿದಾ ಬೋಪಾಲಗೆ'
        }
        line2={'||ಮಂಗಳ...||'}
      />
      <St
        line1={
          'ಭೂಮಿಯೋಳು ಮೆರೆಯುತ ಅದಾಕೆರೆಯ ಪುರದೊಳು ಸ್ಥಿರದಿ ನೆಲೆಸಿಹ ರಾಮದಾಸಗೆ ವರದ ವೇಣುಗೋಪಾಲಗೆ'
        }
        line2={'|| ಮಂಗಳ ...||'}
      />
    </StWrapper>
  );
};

export default SriRamaManagala;
