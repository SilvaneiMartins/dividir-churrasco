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
import { View, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

import AppLoading from "expo-app-loading";
import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
} from "@expo-google-fonts/poppins";

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import { Routes } from "./routes";
import theme from "./styles/theme";

const App: React.FC = () => {
    const [areFontLoading, error] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
    });

    if (!areFontLoading) {
        if (error) {
            console.log("Erro ao carregar as fontes:" + error.message);
        }
        return <AppLoading />;
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={theme.colorsTwo.primary}
            />

            <View
                style={{
                    backgroundColor: theme.colorsTwo.primary,
                    flex: 1,
                }}
            >
                <Routes />
            </View>
        </ThemeProvider>
    );
};

export default App;
