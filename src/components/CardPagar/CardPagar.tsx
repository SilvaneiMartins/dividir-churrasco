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

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import {
    Container,
    IconView,
    IconMoney,
    Content,
    ContentInfoPagar,
    ContentInforValor,
} from "./styles";

const CardPagar: React.FC = () => {
    return (
        <Container>
            <IconView>
                <IconMoney name="dollar-sign" />
            </IconView>


            <Content>
                <ContentInfoPagar>A Pagar</ContentInfoPagar>
                <ContentInforValor>R$ 50,00</ContentInforValor>
            </Content>
        </Container>
    );
};

export { CardPagar };
