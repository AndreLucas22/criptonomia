import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Router, Scene } from 'react-native-router-flux';
import { Platform } from 'react-native';

import Login from './src/components/Login';
import ListPosts from './src/components/ListPosts';
import ListPostsCommit from './src/components/ListPostsCommit';
import ListUser from './src/components/ListUser';


class Routes extends Component {

    render() {
        return (
            <Router>

                <Scene key="root" navBarButtonColor='#FFF' navigationBarStyle={{
                    backgroundColor: '#0d0d58', hight: 70, elevation: 0, shadowOpacity: 0, borderBottomWidth: 0
                }}>
                    <Scene key='Login' component={Login} title=''
                        titleStyle={(Platform.OS === 'ios' ? { color: 'white', flex: 1, textAlign: 'center' } :
                            { color: 'white', flex: 1, textAlign: 'center', justifyContent: 'center', marginStart: -40 })} initial
                    />

                    <Scene key='ListPosts' component={ListPosts} title='Postagens'
                        titleStyle={(Platform.OS === 'ios' ? { color: 'white', flex: 1, textAlign: 'center' } :
                            { color: 'white', flex: 1, textAlign: 'center', justifyContent: 'center', marginStart: -40 })}
                    />

                    <Scene key='ListPostsCommit' component={ListPostsCommit} title='Comentarios'
                        titleStyle={(Platform.OS === 'ios' ? { color: 'white', flex: 1, textAlign: 'center' } :
                            { color: 'white', flex: 1, textAlign: 'center', justifyContent: 'center', marginStart: -40 })}
                    />

                    <Scene key='ListUser' component={ListUser} title='Usuarios'
                        titleStyle={(Platform.OS === 'ios' ? { color: 'white', flex: 1, textAlign: 'center' } :
                            { color: 'white', flex: 1, textAlign: 'center', justifyContent: 'center', marginStart: -40 })}
                    />
                </Scene>

            </Router>
        );
    };
}


export default Routes