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
import { Platform, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import ImgLogin from "../../assets/imgLogin.png";
import { ButtonSocial } from "../../components/ButtonSocial/ButtonSocial";
import { ButtonSocialFacebook } from "../../components/ButtonSocialFacebook";
import { ButtonSocialApple } from "../../components/ButtonSocialApple";

import {
    Header,
    Content,
    ContentInfo,
    TitleInfo,
    TitleInfo2,
    IconInfo,
    ContentImage,
    LoginImage,
    Container,
    TitleLogin,
    TitleInfoLogin,
} from "./styles";

const Login: React.FC = () => {
    const navigation = useNavigation();

    const handleDashboard = () => {
        navigation.navigate("Login", { screen: "Dashboard" });
    };

    return (
        <>
            <Header>
                <Content>
                    <ContentInfo>
                        <TitleInfo>
                            {" "}
                            Divida seu {"\n"} Churrasco {"\n"} com seus {"\n"}{" "}
                            amigos
                        </TitleInfo>
                        <TitleInfo2> Simples, {"\n"} rápido e fácil</TitleInfo2>
                        <IconInfo name="arrow-down-outline" />
                    </ContentInfo>
                    <ContentImage>
                        <LoginImage source={ImgLogin} resizeMode="contain" />
                    </ContentImage>
                </Content>
            </Header>
            <Container>
                <TitleLogin>Faça seu login</TitleLogin>
                <TitleInfoLogin>Com uma das contas abaixo </TitleInfoLogin>

                {Platform.OS === "android" ? (
                    <>
                        <ButtonSocial
                            title="Entrar com Google"
                            iconName="google"
                            onPress={() => {}}
                        />
                        <ButtonSocialFacebook
                            title="Entrar com Facebook"
                            iconName="logo-facebook"
                            onPress={() => {}}
                        />
                    </>
                ) : (
                    <>
                        <ButtonSocialApple
                            title="Entrar com Apple"
                            iconName="apple"
                            onPress={handleDashboard}
                        />
                        <ButtonSocialFacebook
                            title="Entrar com Facebook"
                            iconName="logo-facebook"
                            onPress={() => {}}
                        />
                    </>
                )}
            </Container>
        </>
    );
};

export { Login };
