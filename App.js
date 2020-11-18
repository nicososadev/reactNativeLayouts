import React, { Fragment } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

const App = () => {
    return (
        <Fragment>
            <ScrollView>

                <View>
                    <View style={styles.bannerContainer}>
                        <Image
                            style={styles.banner}
                            source={require('./assets/img/bg.jpg')}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>Que hacer en Paris</Text>
                    <ScrollView horizontal>
                        <View>
                            <Image
                                style={styles.city}
                                source={require('./assets/img/actividad1.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.city}
                                source={require('./assets/img/actividad2.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.city}
                                source={require('./assets/img/actividad3.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.city}
                                source={require('./assets/img/actividad4.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.city}
                                source={require('./assets/img/actividad5.jpg')}
                            />
                        </View>
                    </ScrollView>

                    <Text style={styles.title}>Los Mejores Alojamientos</Text>
                    <View>
                        <View>
                            <Image
                                style={styles.alojamiento}
                                source={require('./assets/img/mejores1.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.alojamiento}
                                source={require('./assets/img/mejores2.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.alojamiento}
                                source={require('./assets/img/mejores3.jpg')}
                            />
                        </View>
                    </View>

                    <Text style={styles.title}>Hospedajes en LA</Text>
                    <View style={styles.listado}>
                        <View style={styles.listadoItem}>
                            <Image
                                style={styles.alojamiento}
                                source={require('./assets/img/hospedaje1.jpg')}
                            />
                        </View>
                        <View style={styles.listadoItem}>
                            <Image
                                style={styles.alojamiento}
                                source={require('./assets/img/hospedaje2.jpg')}
                            />
                        </View>
                        <View style={styles.listadoItem}>
                            <Image
                                style={styles.alojamiento}
                                source={require('./assets/img/hospedaje3.jpg')}
                            />
                        </View>
                        <View style={styles.listadoItem}>
                            <Image
                                style={styles.alojamiento}
                                source={require('./assets/img/hospedaje4.jpg')}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 20,

    },
    bannerContainer: {
        flexDirection: 'row',
    },
    banner: {
        height: 250,
        flex: 1,
    },
    city: {
        width: 250,
        height: 350,
        marginRight: 10,
    },
    alojamiento: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    listado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    listadoItem: {
        flexBasis: '49%',
    }
});

export default App;
