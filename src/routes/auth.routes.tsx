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
import { Dashboard } from "../screens/Dashboard/Dashboard";
import { AppointmentFirstSteep } from "../screens/Appointment/AppointmentFirstSteep/AppointmentFirstSteep";
import { AppointmentSecondSteep } from "../screens/Appointment/AppointmentSecondSteep/AppointmentSecondSteep";
import { AppointmentThirdSteep } from "../screens/Appointment/AppointmentThirdSteep/AppointmentThirdSteep";
import { Finished } from "../screens/Appointment/Finished/Finished";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Dashboard" component={Dashboard} />
            <Screen name="AppointmentFirstSteep" component={AppointmentFirstSteep} />
            <Screen name="AppointmentSecondSteep" component={AppointmentSecondSteep} />
            <Screen name="AppointmentThirdSteep" component={AppointmentThirdSteep} />
            <Screen name="Finished" component={Finished} />
        </Navigator>
    );
};

export { AuthRoutes };
