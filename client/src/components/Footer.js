import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "purple",
				textAlign: "center",
				marginTop: "-50px" }}>
		Know More Tiers: Yo dawg, I heard you liked tiers, so we put a tier for your tiers so you can tier while you tier.
	</h1>
	<Container>
		<Row>
		{/* <Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column> */}
		
		<Column>
			<Heading>Contact Us at LinkedIn</Heading>
			<FooterLink href="#">Julian Williams</FooterLink>
			<FooterLink href="https://www.linkedin.com/in/evelyn-ngoc-nguyen/">Evelyn Nguyen</FooterLink>
			<FooterLink href="https://www.linkedin.com/in/florian-meneses-02807b5/">Florian Meneses</FooterLink>
			<FooterLink href="https://www.linkedin.com/in/mrogers23458/">Michael Rogers</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/tyler-everett-5b288520a/">Tyler Everett</FooterLink>
		</Column>
		<Column>
			<Heading>The Teams Github's</Heading>
			<FooterLink href="https://github.com/LordLowdar">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Julian Williams
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://github.com/ENguyen25">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Evelyn Nguyen
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://github.com/Myuze">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Florian Meneses
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://github.com/mrogers23458">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Michael Rogers
				</span>
			</i>
            </FooterLink>
			<FooterLink href="https://github.com/TylerTechno">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Tyler Everett
				</span>
			</i>
            
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
