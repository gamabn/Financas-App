import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../pages/Home'
import New from '../pages/New'
import Profile from '../pages/Profile'
import CustomDrawer from '../components/CustomDrawer'


const AppDrawer = createDrawerNavigator()

function AppRoutes(){
    return(
     <AppDrawer.Navigator
     drawerContent={(props)=> <CustomDrawer {...props}/>}
     screenOptions={{
        headerShown:false,
        drawerStyle:{
            backgroundColor: '#fff',
            paddingTop: 20,
        },
        drawerActiveBackgroundColor:'#3b3dbf',
        drawerActiveTintColor: '#fff',

        drawerInactiveBackgroundColor: '#f0f2ff',
        drawerActiveTintColor: '#fff',


     }}
     >

        <AppDrawer.Screen
          name="Home"
         component={Home}
        />

       <AppDrawer.Screen
         name="Registrando"
         component={New}
        />

       <AppDrawer.Screen
          name="Perfil"
          component={Profile}
        />

     </AppDrawer.Navigator>
    )
}
export default AppRoutes;