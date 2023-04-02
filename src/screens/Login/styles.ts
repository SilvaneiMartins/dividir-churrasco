/**
 * Data: 05 / 11 / 2021
 * Projeto: App Churras
 * Developer: Silvanei Martins
 * Whatsapp: (69) 9.8405-2620
 * Contato: silvaneimartins_rcc@hotmail.com
 */

/**
 * Componente criado pelo proprio framework;
 */
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons';

/**
 * Estilização do header do componente;
 */
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.colorsTwo.primary};
	height: ${Platform.OS === 'android' ? RFPercentage(50) : RFPercentage(55)}px;
`;

export const Content = styled.View`
    flex-direction: row;
    padding: 0 10px;
`;

export const ContentInfo = styled.View`
    max-width: 45%;
`;

export const TitleInfo = styled.Text`
    font-size: ${RFValue(25)}px;
    margin-top: ${RFValue(25)}px;
    margin-bottom: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const TitleInfo2 = styled.Text`
    font-size: ${RFValue(16)}px;
    margin-top: ${RFValue(15)}px;
    margin-bottom: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.light};
`;

export const IconInfo = styled(Ionicons)`
    font-size: ${RFValue(30)}px;
    margin-top: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colorsTwo.typoSecondary};
`;

export const ContentImage = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(20)}px;
    margin-left: -15px;
`;

export const LoginImage = styled.Image`
    width: ${RFValue(200)}px;
    height: ${RFValue(200)}px;
`;

/**
 * Estilização do Container do componente;
 */
export const Container = styled.View`
    flex: 1;
    padding: 30px 30px;
`;

export const TitleLogin = styled.Text`
    font-size: ${RFValue(16)}px;
    margin-bottom: ${RFValue(5)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TitleInfoLogin = styled.Text`
    font-size: ${RFValue(16)}px;
    margin-bottom: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.fonts.light_Italic};
`;

