import React from 'react';
import Icon1 from '../../images/investing.svg';
import Icon2 from '../../images/investmentdata.svg';
import Icon3 from '../../images/segmentanalysis.svg';
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
        <ServicesContainer id="services">
            <ServicesH1>Our Expertise</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Quantitative Trading</ServicesH2>
                    <ServicesP>Our company employs mathematical models to analyze, guide, and execute trades.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Machine Learning</ServicesH2>
                    <ServicesP>Our firm uses computer-based models to predict price change in easily traded financial instruments.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Data Analytics</ServicesH2>
                    <ServicesP>The firm taps into massive amounts of data to assess statistical probabilities for the direction of securities prices in several markets.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services