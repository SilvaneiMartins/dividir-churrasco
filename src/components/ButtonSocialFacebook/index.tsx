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
import { Ionicons } from "@expo/vector-icons";
/**
 * Componente criado pelo proprio desenvolvedor;
 */
import { Button, ImageContainer, Text, IconButton } from "./styles";
import { Platform } from "react-native";

/**
 * Interfacee Types do Componente;
 */
interface Props extends RectButtonProps {
    title: string;
    iconName: React.ComponentProps<typeof Ionicons>["name"];
}

export function ButtonSocialFacebook({ title, iconName, ...rest }: Props) {
    return (
        <Button {...rest}>
            <ImageContainer>
                <Ionicons name={iconName} size={37} />
            </ImageContainer>

            <Text>{title}</Text>
        </Button>
    );
}
