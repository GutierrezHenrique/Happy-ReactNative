import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrphanagesMap from './Pages/OrphanagesMap';
import OrphanageDetails from './Pages/OrphanageDetails';
import SelectMapPosition from './Pages/CreateOrphanages/SelectMapPosition'
import OrphanageData from './Pages/CreateOrphanages/OrphanageData'
import Header from './Components/header'

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen name="OrphanagesMap" component={OrphanagesMap} />
                <Screen
                    name="OrphanagesDetails"
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Orfanato" />
                    }}
                />
                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Selecione no mapa" />
                    }}
                     />
                <Screen
                    name="OrphanagesData"
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe o dados" />
                    }}
                     />
            </Navigator>
        </NavigationContainer>
    )
}