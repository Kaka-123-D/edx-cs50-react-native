import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function LogoutButton({logout}) {
  return (
    <Button title="Logout" onPress={() => logout()}/>
  )
}

const styles = StyleSheet.create({})