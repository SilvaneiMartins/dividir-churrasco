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
    flex: 1;
    width: ${RFValue(150)}px;
    height: ${RFValue(120)}px;
    border-radius: ${RFValue(4)}px;
    padding: 0px;
    margin-bottom: ${RFValue(10)}px;
    margin-top: ${RFValue(-50)}px;
    align-items: center;
    justify-content: center;

    border-width: 0.5px;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.2);
    border-color: ${({ theme }) => theme.colors.backgroundTree};
    background-color: ${({ theme }) => theme.colors.backgroundOne};
`;

export const ContentInfoTitle1 = styled.Text`
    font-size: ${RFValue(22)}px;
    color: ${({ theme }) => theme.colorsTwo.typoSecondary};
    font-family: ${({ theme }) => theme.fonts.bold};
`

export const ContentInfoTitle2 = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colorsTwo.typoSecondary};
`
