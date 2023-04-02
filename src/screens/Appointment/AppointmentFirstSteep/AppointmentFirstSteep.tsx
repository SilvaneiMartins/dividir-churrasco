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
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import { CardInfo } from "../../../components/CardInfo/CardInfo";

import {
    ImageBg,
    Header,
    Content,
    ContentUser,
    ButtonAdd,
    IconAdd,
    PageView,
    PageNumero,
    ContentCard,
    Container,
    ContentInput,
    InputText,
    Footer,
    ButtonCancelar,
    ButtonContinuar,
    ButtonTitle,
    ButtonViewCancelar,
    ButtonViewContinuar,
} from "./styles";

const AppointmentFirstSteep: React.FC = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleContinuar = () => {
        navigation.navigate("AppointmentSecondSteep");
    };

    const handleDashboard = () => {
        navigation.navigate("Dashboard");
    };

    return (
        <>
            <Header>
                <Content>
                    <ContentUser>
                        <ButtonAdd onPress={handleGoBack}>
                            <IconAdd name="arrow-back-outline" />
                        </ButtonAdd>

                        <PageView>
                            <PageNumero>1</PageNumero>
                        </PageView>
                    </ContentUser>
                </Content>
            </Header>
            <ContentCard>
                <CardInfo title1="Qual o nome" title2="do evento?" />
            </ContentCard>
            <Container>
                <ContentInput>
                    <InputText placeholder="Ex: Churrasco" />
                </ContentInput>
            </Container>
            <Footer>
                <ButtonViewCancelar>
                    <ButtonCancelar onPress={handleDashboard}>
                        <ButtonTitle>Cancelar</ButtonTitle>
                    </ButtonCancelar>
                </ButtonViewCancelar>

                <ButtonViewContinuar>
                    <ButtonContinuar onPress={handleContinuar}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonContinuar>
                </ButtonViewContinuar>
            </Footer>
        </>
    );
};

export { AppointmentFirstSteep };
