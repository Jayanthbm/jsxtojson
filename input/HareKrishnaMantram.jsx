import React from 'react';
import StWrapper from '../Components/StWrapper';
import St from '../Components/St';

const HareKrishnaMantram = ({navigation}) => {
  return (
    <StWrapper
      navigation={navigation}
      back={'BhajaneScreen'}
      title={'ಹರೇ ಕೃಷ್ಣ ಮಂತ್ರಂ'}>
      <St line1={'ಹರೇ ಕೃಷ್ಣ ಹರೇ ಕೃಷ್ಣ'} />
      <St line1={'ಕೃಷ್ಣ ಕೃಷ್ಣ ಹರೇ ಹರೇ |'} />
      <St line1={'ಹರೇ ರಾಮ ಹರೇ ರಾಮ'} />
      <St line1={'ರಾಮ ರಾಮ ಹರೇ ಹರೇ ||'} />
    </StWrapper>
  );
};

export default HareKrishnaMantram;
