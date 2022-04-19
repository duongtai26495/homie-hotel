import { View, Text, TouchableOpacity, Animated, ScrollView, Image, TextInput, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import styles from './src/assets/styles/home.styles'
import Colors from './src/assets/color/Colors'
import axios from 'axios'
import stringConstants from './src/constants/string.constants'
const App = () => {
  const logo_url = require('./src/assets/icons/logo.png');
  const icon_search = require('./src/assets/icons/search.png');
  const NOT_FOUND = "Có lỗi xảy ra hoặc không tìm thấy mã đặt phòng này, hãy kiểm tra lại";
  const [bookingID, setBookingID] = useState()
  const [isError, setIsError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [data, setData] = useState()


  const checkBooking = async () => {
    setIsError(false)
    setLoading(true)
    setError("")
    if (bookingID > 0 && bookingID !== null) {
      let url = stringConstants.BASE_URL+stringConstants.API + bookingID;
      await axios.get(url)
        .then(response => {
          const result = response.data;
          console.log(result)
          setData(result)
          setLoading(false)

        })
        .catch(error => {
          setIsError(true)
          setError(NOT_FOUND)
          setLoading(false)
          console.log(error)
        })

    } else {
      setData()
      setBookingID()
      setLoading(false)
      setIsError(false)
    }
  }

  const RenderData = () => {
    if (data != null) {
      return (
        <View style={styles.data}>
          <ActivityIndicator
            hidesWhenStopped={true}
            size={'large'}
            animating={isLoading}
            color={Colors.SECONDARY}
            style={styles.indicator} />
          <View style={styles.row}>
            <Text style={styles.title}>{'Mã đặt phòng: '}</Text>
            <Text style={styles.content}>{data.booking_id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{'Họ và Tên: '}</Text>
            <Text style={styles.content}>{data.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{'Số điện thoại: '}</Text>
            <Text style={styles.content}>{data.phoneNumber}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{'Loại phòng: '}</Text>
            <Text style={styles.content}>{data.roomType}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{'Mã phòng: '}</Text>
            <Text style={styles.content}>{data.roomCode}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{'Ngày checkin: '}</Text>
            <Text style={styles.content}>{data.checkInDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{'Ngày trả phòng: '}</Text>
            <Text style={styles.content}>{data.checkOutDate}</Text>
          </View>
        </View>
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated
        backgroundColor={Colors.PRIMARY} />

      <ScrollView style={styles.view}>

        <Image source={logo_url} style={styles.logo} />
        <Text style={styles.app_name}>{'HOMIE HOTEL'}</Text>
        <View style={styles.search_form}>
          <TextInput
            onSubmitEditing={() => checkBooking()}
            onChangeText={(value) => setBookingID(value)}
            keyboardType='numeric'
            style={styles.input}
            placeholder={'Nhập mã đặt phòng để tìm kiếm...'}
            placeholderTextColor={Colors.PRIMARY} />
          <TouchableOpacity onPress={() => checkBooking()} style={styles.btnBg}>
            <Image source={icon_search} style={styles.btnSearch} />
          </TouchableOpacity>
        </View>
        <View style={styles.result}>
          {isError ? <Text style={styles.error}>{error}</Text>
            :
            RenderData()
          }

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App