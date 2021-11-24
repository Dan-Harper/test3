import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Terms</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Contact</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Harperway</FooterLinkTitle>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Founder</FooterLink>
                                <FooterLink to="/">Timeline</FooterLink>
                                <FooterLink to="//github.com/Dan-Harper">GitHub</FooterLink>
                                <FooterLink to="//www.linkedin.com/in/danielhlink/">Linkedin</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>A Dan Harper Production</FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Harperway
                        </SocialLogo>
                        <WebsiteRights>Harperway © 2020 A Dan Harper Production</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="mailto: work.dan.harper@gmail.com" target ="_blank" aria-label="Email"></SocialIconLink>
                                <FaEnvelope />
                            <SocialIconLink href="//www.github.com/Dan-Harper" target ="_blank" aria-label="GitHub"></SocialIconLink>
                                <FaGithub/>
                            <SocialIconLink href="//www.linkedin.com/in/danielhlink/" target ="_blank" aria-label="Linkedin"></SocialIconLink>
                                <FaLinkedin />
                        </SocialIcons> 
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;