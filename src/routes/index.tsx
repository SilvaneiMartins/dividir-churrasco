/**
 * Data: 05 / 11 / 2021
 * Projeto: App Churras
 * Developer: Silvanei Martins
 * Contato: silvaneimartins_rcc@hotmail.com
 */

/**
 * Componente criado pelo proprio framework;
 */
import React from "react";

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import {
    NavigationContainer,
} from "@react-navigation/native";

const Routes: React.FC = () => {
    const user = true;

    return (
        <NavigationContainer>
            {user ? <AuthRoutes /> : <AppRoutes />}
        </NavigationContainer>
    );
};

export { Routes };
