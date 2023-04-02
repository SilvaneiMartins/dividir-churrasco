/**
 * Data: 01 /01 / 2021
 * Projeto: Salvar Senha
 * Developer: Silvanei Martins
 * Whatsapp: (69) 9.8405-2620
 * Contato: silvaneimartins_rcc@hotmail.com
 *
 * Componente criado pelo proprio framework;
 */
import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
/**
 * Componente criado pelo proprio desenvolvedor;
 */
import { Button, ImageContainer, Text } from "./styles";

/**
 * Interfacee Types do Componente;
 */
interface Props extends RectButtonProps {
    title: string;
    iconName: React.ComponentProps<typeof Fontisto>["name"];
}

export function ButtonSocialApple({ title, iconName, ...rest }: Props) {
    return (
        <Button {...rest}>
            <ImageContainer>
                <Fontisto name={iconName} size={30} />
            </ImageContainer>

            <Text>{title}</Text>
        </Button>
    );
}
