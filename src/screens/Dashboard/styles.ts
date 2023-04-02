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
    flex-direction: row;
    padding: 0 10px;
 `;

export const ImageUser = styled.Image`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
    border-radius: ${RFValue(10)}px;
    margin-right: 10px;
 `;

export const UserInfo = styled.View`
 `;

export const TitleUser1 = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
 `;

export const TitleUser2 = styled.Text`
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
 `;

export const ButtonAdd = styled(BorderlessButton)`
    align-items: center;
    border-width: 0.5px;
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


/**
 * Estilizazao Container do componente;
 */

export const Container = styled.View`
    flex: 1;
    padding: 0 20px;
    padding-bottom: ${RFValue(20)}px;
`;

export const ContentCard = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
 `;

export const ListaChurrasco = styled.Text`
    padding: 0 20px;
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.light};
`;

export const Linha = styled.View`
    height: 0.5px;
    width: 81%;
    margin-right: ${RFValue(10)}px;
    margin-top: ${RFValue(5)}px;
    margin-bottom: ${RFValue(5)}px;
    background-color: ${({ theme }) => theme.colorsTwo.typoSecondary};
`;

/**
 * Estilizazao da Lista de Churrasco do componente;
 */
export const TypeChurras = styled.View`
    flex-direction: row;
    padding: 10px 0;
 `;

export const IconView = styled.View`
    align-items: center;
    justify-content: center;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(5)}px;
    margin-right: ${RFValue(10)}px;
    background-color: ${({ theme }) => theme.colorsTwo.success_light1};
`;

export const IconReceber = styled(FontAwesome5)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colorsTwo.primary};
 `;

export const ContentType = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ContentLeft = styled.View``;

export const TitleName = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const TextDate = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.gray};
`;

export const ContentRight = styled.View`
    align-items: flex-end;
    margin-right: ${RFValue(10)}px;
`;

export const ValorTotal = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const QtdeAmigos = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.gray};
`;

/**
 * Estilização da FlatList;
 */
export const FlatView = styled(BorderlessButton)`
    align-items: flex-end;
`;
