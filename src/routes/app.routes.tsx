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
import { createStackNavigator } from "@react-navigation/stack";

/**
 * Componente criado pelo proprio desenvolvedor;
 */

import { Login } from "../screens/Login/Login";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Login" component={Login} />
        </Navigator>
    );
};

export { AppRoutes };
