/**
 * Data: 01 /01 / 2021
 * Projeto: Salvar Senha
 * Developer: Silvanei Martins
 * Whatsapp: (69) 9.8405-2620
 * Contato: silvaneimartins_rcc@hotmail.com
 *
 * Componente criado pelo proprio framework;
 */
 import styled from 'styled-components/native';
 import { Platform } from 'react-native';
 import { RectButton } from 'react-native-gesture-handler';
 import { RFValue } from 'react-native-responsive-fontsize';
 import { Ionicons } from "@expo/vector-icons";

export const Button = styled(RectButton)`
    width: 100%;
	height: ${RFValue(56)}px;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 5px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	margin-bottom: 16px;

    box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
`;

export const ImageContainer = styled.View`
    height: 100%;
	justify-content: center;
	align-items: center;
	padding: ${RFValue(10)}px;

	border-right-width: 1px;
	border-color: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.Text`
    flex: 1;
	text-align: center;
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colorsTwo.typoSecondary};
	font-family: ${({ theme }) => theme.fonts.medium};
`;

export const IconButton = styled(Ionicons)`
    font-size: ${RFValue(27)}px;
    margin-right: ${Platform.OS === 'ios' ? 8 : 0}px;
`;

export const ImgIconButton = styled.Image`

`;
