import React from "react";
import styled from "styled-components";

const Login = () => {
	return (
		<Container>
			<Content>
				<CTA>
					<CtaLogoOne src="/images/cta-logo-one.svg" />
					<SignUp> GET ALL THERE </SignUp>
					<Desc>
						Get Premier Access to Raya and the Last Dragon for an additional fee
						with a Disney+ subscription. As of 03/26/21, the price of Disney+
						and The Disney Bundle will increase by $1.
					</Desc>
					<CtaLogoTwo src="/images/cta-logo-two.png" />
				</CTA>
				<BgImage />
			</Content>
		</Container>
	);
};

const Container = styled.section`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100vh;
`;

const Content = styled.div`
	margin-bottom: 10vw;
	width: 100%;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 80px 40px;
	height: 100%;
`;

const BgImage = styled.div`
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: url("/images/loginbackground.jpg");
	/* background-position: center center; */
	background-size: cover;
	z-index: -1;
`;

const CTA = styled.div`
	/* margin-bottom: 2vw;
	max-width: 650px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-top : 0;
	margin-left: auto;
	margin-right: auto;
	transition-timing-function: ease-out;
	transition : opacity 0.5s;
	width: 100%;  */
	max-width: 650px;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const CtaLogoOne = styled.img`
	margin-bottom: 12px;
	max-width: 600px;
	min-height: 1px;
	display: block;
	width: 100%;
`;

const SignUp = styled.a`
	width: 100%;
	padding: 20px;
	background-color: #0063e5;
	color: white;
	font-weight: bold;
	outline: none;
	margin-bottom: 12px;
	letter-spacing: 8.5px;
	font-size: 1.2rem;
	border: 0 solid transparent;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #0483ee;
	}
`;

const Desc = styled.p`
	font-size: 11px;
	color: hsla(0, 0%, 95.3%, 1);
	margin: 0 0 24px;
	line-height: 1.6;
	letter-spacing: 1.3px;
`;

const CtaLogoTwo = styled.img`
	max-width: 650px;
	width: 100%;
	margin: 0 auto 20px auto;
`;

export default Login;
