import React, { Component } from 'react';
import styled from 'styled-components';

// Images
import logo from '../../assets/img/LogoPNE.png';
import showPassword from '../../assets/icon/login-show-password.svg';
import hidePassword from '../../assets/icon/login-hide-password.svg';
import imagemPrincpal from '../../assets/img/Grupo-8105.svg';

// Styled
const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	background: transparent linear-gradient(180deg,#115680 0%,#116EA0 100%) 0% 0% no-repeat padding-box;
	padding: 0 5vw;
`;

const InputContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 40vw;
	height: 90vh;
	background: #FFF;
	border-radius: 0 0 6px 6px;
`;

const Logo = styled.img`
	width: 40%;
`;

const InputBox = styled.span`
	position: relative;
	display: flex;
	flex-direction: ${(props) => (props.alt ? 'row' : 'column')};
	justify-content: ${(props) => props.alt && 'space-between'};
	margin-top: ${(props) => props.last && '.5rem'};
`;

const Label = styled.label`
	font: 500 12px Eurostile, sans-serif;
	margin: 0 0 .25rem .5rem;
	letter-spacing: 0;
	color: #7FBA4C;
`;

const Input = styled.input`
	width: 20vw;
	height: 3rem;
	padding: 1rem;
	font-size: 1rem;
	background: #FAFAFA 0% 0% no-repeat padding-box;
	border: 1px solid #7FBA4C;
	border-radius: 4px;

	::placeholder {
		color: #959595;
	}
`;

const IconInputPassword = styled.img`
	position: absolute;
	bottom: 25%;
	right: 0;
	width: 1.25rem;
	margin-right: 1rem;
	cursor: pointer;
`;

const Button = styled.button`
	width: 20vw;
	height: 3rem;
	margin-top: 1rem;
	background: #115680 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	border: none;
	border-radius: 4px;
	outline: none;

	text-align: center;
	font: 500 1rem Eurostile, sans serif;
	letter-spacing: 0;
	color: #FAFAFA;
`;


const AltBox = styled.span`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 40%;
	margin-top: 3rem;
`;

const Link = styled.p`
	align
	text-align: ${(props) => (props.color ? 'left' : 'center')} ;
	font: Regular 16px Eurostile, sans serif;
	letter-spacing: 0;
	color: ${(props) => props.color || '#505050'} ;
	text-decoration: ${(props) => (props.color ? 'underline' : 'none')} ;
`;

const LoginBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50vw;
	height: 90vh;
	border-radius: 0 0 6px 6px;
`;

const Img = styled.img`
	width: 60%;
`;

const TextBox = styled.span`
	width: 60%;
`;

const Text = styled.p`
	margin: 3rem 0;
	font: Bold 18px eurostile, sans serif;
	letter-spacing: 0.18px;
	line-height: 2.5rem;
	color: #FFFFFF;
`;

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputType: true,
		};
	}

	handleChange = (ev, type) => {
		ev.stopPropagation();
		// console.log(`${type}, ${ev.target.value}`);
	}

	showPassword = () => {
		this.setState((prevState) => ({
			inputType: !prevState.inputType,
		}));
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
		console.log(ev.target);
	}

	render() {
		return (
			<Container>
				<InputContainer>
					<Logo src={logo}/>
					<InputBox>
						<Label>E-mail</Label>
						<Input
							required
							placeholder={'Digite sua senha e-mail'}
							onChange={(ev) => this.handleChange(ev, 'email')}
						/>
					</InputBox>
					<InputBox last>
						<Label>Senha</Label>
						<Input
							required
							type={this.state.inputType ? 'password' : 'text'}
							placeholder={'Digite sua senha'}
							onChange={(ev) => this.handleChange(ev, 'password')}
						/>
						<IconInputPassword
							loginScreen
							src={this.state.inputType ? showPassword : hidePassword}
							onClick={this.showPassword}
						/>
					</InputBox>
					<Button
						onClick={this.handleSubmit}
					>
						Entrar
					</Button>
					<AltBox>
						<Link>Criar nova conta</Link>
						<Link>Recuperar Senha</Link>
					</AltBox>
				</InputContainer>
				<LoginBox>
					<Img src={imagemPrincpal} />
					<TextBox>
						<Text>
							Defina seus filtros, receba contratos selecionados e esqueça como listas de mil itens.
						</Text>
						<Link color={'#AADF00'}>Criar nova conta</Link>
					</TextBox>
				</LoginBox>
			</Container>
		);
	}
}

export default Login;
