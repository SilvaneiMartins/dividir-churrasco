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
import React from "react";
import { useNavigation } from "@react-navigation/native";

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import ImgMoney from '../../../assets/money.png';

import {
    Container,
    ContentFinish,
    Footer,
    ButtonCancelar,
    ButtonContinuar,
    ButtonTitle,
    ButtonViewCancelar,
    ButtonViewContinuar,
    ContentViewTop,
    TitleChurrasco,
    QtdePessoas,
    ContentViewCenter,
    ViewCenterImage,
    ViewCenterValor,
    ViewCenterInfo,
    ContentViewFooter,
    ContentAvatar,
    ViewFooterAvatar,
    ViewFooterInfo,
} from "./styles";

const Finished: React.FC = () => {
    const navigation = useNavigation();

    const handleDashboard = () => {
        navigation.navigate("Dashboard");
    };

    return (
        <>
            <Container>
                <ContentFinish>
                    <ContentViewTop>
                        <TitleChurrasco>Churrasco Família</TitleChurrasco>
                        <QtdePessoas>4 pessoas</QtdePessoas>
                    </ContentViewTop>

                    <ContentViewCenter>
                        <ViewCenterImage source={ImgMoney} resizeMode="contain" />
                        <ViewCenterValor>R$ 50,00</ViewCenterValor>
                        <ViewCenterInfo>para cada um</ViewCenterInfo>
                    </ContentViewCenter>

                    <ContentViewFooter>
                        <ContentAvatar>
                            <ViewFooterAvatar source={{ uri: "https://avatars.githubusercontent.com/u/4657811?v=4" }} />
                            <ViewFooterAvatar source={{ uri: "https://avatars.githubusercontent.com/u/4657811?v=4" }} />
                            <ViewFooterAvatar source={{ uri: "https://avatars.githubusercontent.com/u/4657811?v=4" }} />
                            <ViewFooterAvatar source={{ uri: "https://avatars.githubusercontent.com/u/4657811?v=4" }} />
                        </ContentAvatar>
                        <ViewFooterInfo>Eu, Joao, Roberto, Silvio e Maria</ViewFooterInfo>
                    </ContentViewFooter>
                </ContentFinish>
            </Container>
            <Footer>
                <ButtonViewCancelar>
                    <ButtonCancelar onPress={handleDashboard}>
                        <ButtonTitle>Voltar</ButtonTitle>
                    </ButtonCancelar>
                </ButtonViewCancelar>

                <ButtonViewContinuar>
                    <ButtonContinuar onPress={handleDashboard}>
                        <ButtonTitle>Finalizar</ButtonTitle>
                    </ButtonContinuar>
                </ButtonViewContinuar>
            </Footer>
        </>
    );
};

export { Finished };
