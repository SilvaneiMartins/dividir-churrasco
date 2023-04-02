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
import { BorderlessButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from "react-native-responsive-fontsize";

/**
 * Estilizazao Container do componente;
 */
export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colorsTwo.primary};
`;

export const ContentFinish = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const ButtonViewCancelar = styled.View`
    align-items: center;
    justify-content: center;
    width: 50%;
    height: ${RFValue(60)}px;
    border-right-width: ${RFValue(2)}px;
    border-right-color: ${({ theme }) => theme.colorsTwo.primary};

    box-shadow: 1px 5px 3px rgba(0,0,0,0.3);
    background-color: ${({ theme }) => theme.colorsTwo.success_light4};
`;

export const ButtonViewContinuar = styled.View`
    align-items: center;
    justify-content: center;
    width: 50%;
    height: ${RFValue(60)}px;

    box-shadow: 1px 5px 3px rgba(0,0,0,0.3);
    background-color: ${({ theme }) => theme.colorsTwo.success_light4};
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


/**
 * Estilizazao do CENTRO do componente;
 */
 export const ContentViewTop = styled.View`
    align-items: center;
    padding: 25px 0;
    margin-top: ${Platform.OS === 'android' ? 0 : getStatusBarHeight() + 50}px;
 `;

 export const TitleChurrasco = styled.Text`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colorsTwo.title};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-top: ${RFValue(30)}px;
 `;

 export const QtdePessoas = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colorsTwo.title};
    font-family: ${({ theme }) => theme.fonts.light};
 `;

 export const ContentViewCenter = styled.View`
    align-items: center;
 `;

 export const ViewCenterImage = styled.Image`
    width: ${RFValue(180)}px;
    height: ${RFValue(200)}px;
 `;

 export const ViewCenterValor = styled.Text`
    font-size: ${RFValue(50)}px;
    color: ${({ theme }) => theme.colorsTwo.attention_light8};
    font-family: ${({ theme }) => theme.fonts.bold};
 `;

 export const ViewCenterInfo = styled.Text`
    font-size: ${RFValue(18)}px;
    margin-top: ${RFValue(-10)}px;
    color: ${({ theme }) => theme.colorsTwo.title};
    font-family: ${({ theme }) => theme.fonts.light};
 `;

 export const ContentViewFooter = styled.View`
    align-items: center;
    margin-top: ${RFValue(15)}px;
 `;

 export const ContentAvatar = styled.View`
    flex-direction: row;
    padding: ${RFValue(10)}px;
 `;

 export const ViewFooterAvatar = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    margin-right: ${RFValue(8)}px;
    border-radius: ${RFValue(8)}px;
 `;

 export const ViewFooterInfo = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colorsTwo.typoSecondary};
    font-family: ${({ theme }) => theme.fonts.light};
 `;
