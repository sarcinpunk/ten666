import React from 'react';
import Icon1 from '../../images/Billede7.jpg';
import Icon2 from '../../images/pexels-gonzalo-facello-1432039.jpg';
import Icon3 from '../../images/imgstartup2.jpg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Statistical support</ServicesH2>
          <ServicesP>
          Get statistics on your performance, such as topspin, backhand, forehand, serve, slice and speed.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Zoom and replay</ServicesH2>
          <ServicesP>
          Revisit your best tennis strokes with ITRACKET's zoom and replay feature and share it with friends.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>ITRACKET mount</ServicesH2>
          <ServicesP>
          Use the ITRACET mount to achieve the best recording results at your own tennis club.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
