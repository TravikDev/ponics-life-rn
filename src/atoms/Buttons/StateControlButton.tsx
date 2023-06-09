import { Icon, ListItem, Pressable } from '@react-native-material/core';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* @ts-ignore */
export const StateControlButton = ({ title, value, leadingIcon = '', designation = '', onClick = f => f }) => {

    return (
        <View style={styles.fullContainer}>
            <Pressable
                style={[styles.pressableContainer]}
                //   title={title}
                //   trailing={() => <Icon name={isExpanded ? 'expand-more' : 'chevron-right'} {...props} />}
                onPress={onClick}
            >
                <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: "center" }}>
                    {leadingIcon && <View style={{ borderRightColor: '#ccc', borderRightWidth: 1, paddingRight: 2 }}><Icon name={leadingIcon} size={26} /></View>}
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View style={styles.viewValue}>
                    {value === 'Off'
                        ? (
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textOff}>{value}</Text>
                                {designation && <Text style={styles.textDesignation}>{designation}</Text>}
                            </View>
                        )
                        : (
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textOn}>{value}</Text>
                                {designation && <Text style={styles.textDesignation}>{designation}</Text>}
                            </View>
                        )
                    }
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    fullContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
    },
    pressableContainer: {
        height: 36,
        padding: 4,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
        // padding: 8
    },
    spoilerContent: {
        padding: 5
    },
    viewValue: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: '#e7e7e7'
        // borderLeftColor: '#ccc',
        // borderLeftWidth: 1,
        // paddingHorizontal: 5
    },
    text: {
        paddingLeft: 4,
        fontWeight: '300',
        fontSize: 18,
        color: '#111',
    },
    textOn: {
        paddingLeft: 4,
        fontWeight: '300',
        fontSize: 18,
        color: '#008109',
    },
    textOff: {
        paddingLeft: 4,
        fontWeight: '300',
        fontSize: 18,
        color: '#bb0000',
    },
    textDesignation: {
        paddingLeft: 4,
        fontWeight: '300',
        fontSize: 18,
        color: '#111',
    },
})