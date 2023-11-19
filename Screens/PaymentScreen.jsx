import React, { useRef } from 'react';
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
import { View, TouchableOpacity,Text } from 'react-native';

const PaymentScreen = () => {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef); 

  return (
    <View style={{flex: 1}}>
      <Paystack
        paystackKey="pk_test_6b38f7df0cc64d91bf7d90e3d56980b0e2024e4b"
        billingEmail="ikechukwuv052@gmail.com"
        currency='NGN'
        amount={2000}
        onCancel={(e) => {
          console.log('====================================');
          console.log(e);
          console.log('====================================');
        }}
        onSuccess={(res) => {
          console.log('====================================');
          console.log(res);
          console.log('====================================');
        }}
        ref={paystackWebViewRef}
      />

        <TouchableOpacity onPress={()=> paystackWebViewRef.current.startTransaction()}>
          <Text>Pay Now</Text>
        </TouchableOpacity>
      </View>
  )
};

export default PaymentScreen;
