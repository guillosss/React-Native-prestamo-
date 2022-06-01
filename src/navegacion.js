import React from "react";
import {Text,View,StyleSheet} from "react-native";
// importar botones navegacion 

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// importar contenedor de pantalla 

import { NavigationContainer } from "@react-navigation/native";

// importar las pantallas 
import InicioPantalla from "./pantallas/inicio";
import BombilloPantalla from "./pantallas/Bombillos";
import PrestamoPantalla from "./pantallas/prestamos";

// crear objeto tabs 

const tab = createBottomTabNavigator();

//funcion para crear la navegacion 

function MyTabs(){
    return(
        <tab.Navigator>
            <tab.Screen name="Inicio" component={InicioPantalla} />
            <tab.Screen name="Bombillo" component={BombilloPantalla} />
            <tab.Screen name="Prestamos" component={PrestamoPantalla} />
        </tab.Navigator>
    );
}
// funcion para colocar los botones de navegacion en un contenedor

export default function Navegacion(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}
