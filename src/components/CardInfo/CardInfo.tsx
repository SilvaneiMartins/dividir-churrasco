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

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import {
    Container,
    ContentInfoTitle1,
    ContentInfoTitle2,
} from "./styles";

interface Props {
    title1: string;
    title2: string;
}

const CardInfo: React.FC<Props> = ({ title1, title2}) => {

    return (
        <Container>
            <ContentInfoTitle1>{title1}</ContentInfoTitle1>
            <ContentInfoTitle2>{title2}</ContentInfoTitle2>
        </Container>
    );
};

export { CardInfo };
