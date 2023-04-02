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
import { Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import { CardInfo } from "../../../components/CardInfo/CardInfo";
import { UserRecentes } from "../../../utils/UserRecentes";

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
    InputText,
    Footer,
    ButtonCancelar,
    ButtonContinuar,
    ButtonTitle,
    ButtonViewCancelar,
    ButtonViewContinuar,
    ContentUsers,
    UserRecentesTitle,
    UserRecentesView,
    UserReceneteAvatar,
    UserContentViewInfo,
    UserReceneteNome,
    UserReceneteIcon,
    ButtonIcon,
} from "./styles";

const AppointmentSecondSteep: React.FC = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleThirdAppointment = () => {
        navigation.navigate("AppointmentThirdSteep");
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
                            <PageNumero>2</PageNumero>
                        </PageView>
                    </ContentUser>
                </Content>
            </Header>
            <ContentCard>
                <CardInfo title1="Com quem" title2="você quer dividir?" />
            </ContentCard>
            <Container>
                <ContentInput>
                    <InputText placeholder="Digite um nome" />
                </ContentInput>

                <ContentUsers>
                    <UserRecentesTitle>Recentes</UserRecentesTitle>
                    <FlatList
                        data={UserRecentes}
                        style={{ width: "100%", maxHeight: "77%", height: "77%"}}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <UserRecentesView>
                                <UserReceneteAvatar
                                    source={{ uri: item.avatar}}
                                />

                                <UserContentViewInfo>
                                    <UserReceneteNome>
                                        {item.nome}
                                    </UserReceneteNome>
                                    <ButtonIcon>
                                        <UserReceneteIcon name="plus" />
                                    </ButtonIcon>
                                </UserContentViewInfo>
                            </UserRecentesView>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </ContentUsers>
            </Container>
            <Footer>
                <ButtonViewCancelar>
                    <ButtonCancelar onPress={handleDashboard}>
                        <ButtonTitle>Cancelar</ButtonTitle>
                    </ButtonCancelar>
                </ButtonViewCancelar>

                <ButtonViewContinuar>
                    <ButtonContinuar onPress={handleThirdAppointment}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonContinuar>
                </ButtonViewContinuar>
            </Footer>
        </>
    );
};

export { AppointmentSecondSteep };
