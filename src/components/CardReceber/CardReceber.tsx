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
    ContentInfoReceber,
    ContentInforValor,
} from "./styles";

const CardReceber: React.FC = () => {
    return (
        <Container>
            <IconView>
                <IconMoney name="dollar-sign" />
            </IconView>

            <Content>
                <ContentInfoReceber>A receber</ContentInfoReceber>
                <ContentInforValor>R$ 100,00</ContentInforValor>
            </Content>
        </Container>
    );
};

export { CardReceber };
