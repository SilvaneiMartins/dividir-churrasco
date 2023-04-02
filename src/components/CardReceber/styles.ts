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
import { FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: ${RFValue(150)}px;
    height: ${RFValue(120)}px;
    border-radius: ${RFValue(5)}px;
    padding: 20px;
    margin-bottom: ${RFValue(10)}px;
    margin-top: ${RFValue(-50)}px;

    border-width: 0.5px;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.2);
    border-color: ${({ theme }) => theme.colors.backgroundTree};
    background-color: ${({ theme }) => theme.colors.backgroundOne};
`;

export const IconView = styled.View`
    align-items: center;
    justify-content: center;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(5)}px;
    background-color: ${({ theme }) => theme.colorsTwo.success_light1};
`;

export const IconMoney = styled(FontAwesome5)`
    padding: ${RFValue(5)}px;
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colorsTwo.primary};
`;

export const Content = styled.View`
    position: absolute;
    left: ${RFValue(15)}px;
    right: ${RFValue(10)}px;
    bottom: ${RFValue(10)}px;
`;

export const ContentInfoReceber = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`

export const ContentInforValor = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.extrabold};
    color: ${({ theme }) => theme.colorsTwo.success_light4};
`
