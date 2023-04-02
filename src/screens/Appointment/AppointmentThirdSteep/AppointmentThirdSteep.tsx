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
    InputTextItem,
    InputTextValor,
    Footer,
    ButtonCancelar,
    ButtonContinuar,
    ButtonTitle,
    ButtonViewCancelar,
    ButtonViewContinuar,
    InputIconItem,
    ButtonDeletar,
    InputIconDeletar,
    InputContentViewRight,
    InputContentViewLeft,
    ContentButtonView,
    ButtonAddItem,
    ButtonAddTitle,
} from "./styles";

const AppointmentThirdSteep: React.FC = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleFinished = () => {
        navigation.navigate("Finished");
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
                            <PageNumero>3</PageNumero>
                        </PageView>
                    </ContentUser>
                </Content>
            </Header>
            <ContentCard>
                <CardInfo
                    title1="Qual ou quais items"
                    title2="você quer dividir?"
                />
            </ContentCard>
            <Container>
                <ContentInput>
                    <InputContentViewRight>
                        <InputIconItem name="check-double" />
                        <InputTextItem placeholder="Nome do item" />
                    </InputContentViewRight>

                    <InputContentViewLeft>
                        <InputTextValor placeholder="R$ 0,00" />
                    </InputContentViewLeft>

                    <ButtonDeletar>
                        <InputIconDeletar name="trash-alt" />
                    </ButtonDeletar>
                </ContentInput>


                <ContentButtonView>
                    <ButtonAddItem>
                        <ButtonAddTitle>Adicionar Item</ButtonAddTitle>
                    </ButtonAddItem>
                </ContentButtonView>
            </Container>
            <Footer>
                <ButtonViewCancelar>
                    <ButtonCancelar onPress={handleDashboard}>
                        <ButtonTitle>Cancelar</ButtonTitle>
                    </ButtonCancelar>
                </ButtonViewCancelar>

                <ButtonViewContinuar>
                    <ButtonContinuar onPress={handleFinished}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonContinuar>
                </ButtonViewContinuar>
            </Footer>
        </>
    );
};

export { AppointmentThirdSteep };
