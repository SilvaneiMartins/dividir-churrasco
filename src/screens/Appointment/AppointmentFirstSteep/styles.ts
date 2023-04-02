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
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

/**
* Estilizazao Headder do componente;
*/
export const ImageBg = styled.ImageBackground`
    width: 100%;
    height: 100%;
    opacity: 0.2;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colorsTwo.primary};
    height: ${Platform.OS === 'android' ? RFPercentage(16) : RFPercentage(23)}px;
`;

export const Content = styled.View`
    flex-direction: row;
    margin-top: ${Platform.OS === 'android' ? 0 : getStatusBarHeight() + 20}px;
    justify-content: space-between;
    padding: 0 10px;
`;

export const ContentUser = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-right: ${RFValue(15)}px;
`;

export const ButtonAdd = styled(BorderlessButton)`
    align-items: center;
    justify-content: center;
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
    margin-right: ${RFValue(10)}px;
    border-radius: ${RFValue(10)}px;
    box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white_100};
`;

export const IconAdd = styled(Ionicons)`
    font-size: ${RFValue(35)}px;
    color: ${({ theme }) => theme.colors.white_100};
`;

export const PageView = styled.View`
    align-items: center;
    justify-content: center;
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
    border-radius: ${RFValue(23)}px;
    box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
    background-color: ${({ theme }) => theme.colorsTwo.success_light9};
`;

export const PageNumero = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.extrabold};
`;


/**
 * Estilizazao Container do componente;
 */
export const ContentCard = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
 `;

export const Container = styled.View`
    padding: ${RFValue(20)}px;
`;

export const ContentInput = styled.View`
    width: 100%;
    align-items: center;
    padding: ${RFValue(10)}px;
    height: ${RFValue(50)}px;

    border-bottom-width: ${RFValue(0.5)}px;
    border-color: ${({ theme }) => theme.colors.backgroundFive};
`;

export const InputText = styled.TextInput.attrs({
    placeholderTextColor: '#CCC',
})`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colorsTwo.typoSecondary};
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    border-top-width: ${RFValue(0.5)}px;
    border-top-color: ${({ theme }) => theme.colors.backgroundFive};
`;

export const ButtonViewCancelar = styled.View`
    align-items: center;
    justify-content: center;
    width: 50%;
    height: ${RFValue(60)}px;
    border-right-width: ${RFValue(0.5)}px;
    border-right-color: ${({ theme }) => theme.colors.backgroundFive};
`;

export const ButtonViewContinuar = styled.View`
    align-items: center;
    justify-content: center;
    width: 50%;
    height: ${RFValue(60)}px;
`;


export const ButtonCancelar = styled(BorderlessButton)`
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white_100};
`;

export const ButtonContinuar = styled(BorderlessButton)`
    color: ${({ theme }) => theme.colors.white};
`;

export const ButtonTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colorsTwo.typoSecondary};
`;
