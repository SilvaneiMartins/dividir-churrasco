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
import { FlatList, View } from "react-native";

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import { ChurrascoType } from "../../utils/ChurrascoType";
import { useNavigation } from "@react-navigation/native";
import { CardPagar } from "../../components/CardPagar/CardPagar";
import { CardReceber } from "../../components/CardReceber/CardReceber";

import {
    Header,
    Content,
    ContentUser,
    ImageUser,
    UserInfo,
    TitleUser1,
    TitleUser2,
    ButtonAdd,
    IconAdd,
    Container,
    ContentCard,
    ListaChurrasco,
    TypeChurras,
    IconView,
    IconReceber,
    ContentType,
    ContentLeft,
    TitleName,
    TextDate,
    ContentRight,
    ValorTotal,
    QtdeAmigos,
    Linha,
    FlatView,
} from "./styles";

const Dashboard: React.FC = () => {
    const navigation = useNavigation();

    const handleAppointment = () => {
        navigation.navigate("AppointmentFirstSteep");
    };

    return (
        <>
            <Header>
                <Content>
                    <ContentUser>
                        <ImageUser
                            source={{
                                uri: "https://avatars.githubusercontent.com/u/4657811?v=4",
                            }}
                        />
                        <UserInfo>
                            <TitleUser1>Ola, </TitleUser1>
                            <TitleUser2>Silvanei Martins</TitleUser2>
                        </UserInfo>
                    </ContentUser>
                    <ButtonAdd onPress={handleAppointment} >
                        <IconAdd name="add-outline" />
                    </ButtonAdd>
                </Content>
            </Header>
            <ContentCard>
                <CardReceber />
                <CardPagar />
            </ContentCard>

            <ListaChurrasco>Lista de churrasco</ListaChurrasco>
            <Container>
                <FlatList
                    data={ChurrascoType}
                    style={{ width: "100%" }}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <FlatView>
                            <TypeChurras>
                                <IconView>
                                    <IconReceber name="dollar-sign" />
                                </IconView>

                                <ContentType>
                                    <ContentLeft>
                                        <TitleName>{item.nome}</TitleName>
                                        <TextDate>{item.data}</TextDate>
                                    </ContentLeft>

                                    <ContentRight>
                                        <ValorTotal>{item.valor}</ValorTotal>
                                        <QtdeAmigos>{item.pessoa}</QtdeAmigos>
                                    </ContentRight>
                                </ContentType>
                            </TypeChurras>
                            <Linha />
                        </FlatView>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </Container>
        </>
    );
};

export { Dashboard };
