import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import CustomBackButton from '../components/CustomBackButton';
import FacebookIcon from '../assets/svg/facebook.svg';
import GoogleIcon from '../assets/svg/google.svg';
import Screen from '../components/Screen';
import BaseView from '../components/base/BaseView';
import theme from '../resources/theme';
import TextView from '../components/base/TextView';
import {validEmail, validPassword} from '../resources/globals';
import { CommonActions } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = text => {
    setEmail(text);
    if (!validEmail(text) && text.length > 0) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = text => {
    setPassword(text);
    if (!validPassword(text) && text.length > 0) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (email.length === 0) {
      setEmailError('Email is required');
    } else if (!validEmail(email)) {
      setEmailError('Please enter a valid email address');
    }
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    if (password.length === 0) {
      setPasswordError('Password is required');
    } else if (!validPassword(password)) {
      setPasswordError('Password must be at least 8 characters');
    }
  };

  const isFormValid = validEmail(email) && validPassword(password);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigateToHome()
    }, 2000);
  };

  const navigateToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Dashboard" }],
      })
    );
  }

  return (
    <Screen backgroundColor="mainBackground">
      <CustomBackButton />
      <BaseView style={styles.loginContainer}>
        <BaseView style={styles.brandContainer}>
          <TextView variant="title">EatXpress</TextView>
          <TextView
            variant="largeTitle"
            style={{paddingVertical: theme.spacing.s}}>
            Welcome Back to EatXpress
          </TextView>
          <TextView variant="bodyText">
            Hello there, sign in to continue!
          </TextView>
        </BaseView>

        <BaseView style={{flex: 1}}>
          <TextView
            variant="bodyText2"
            style={{textAlign: 'left', paddingBottom: theme.spacing.iv}}>
            Email Address
          </TextView>
          <TextInput
            style={[
              {padding: 15},
              validEmail(email)
                ? theme.textInputStyles.validInput
                : theme.textInputStyles.input,
              emailTouched && emailError
                ? theme.textInputStyles.inputError
                : null,
            ]}
            placeholder="example@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onPress={() => {
              setEmailTouched(false);
            }}
            onEndEditing={() => setEmailTouched(true)}
            onChangeText={handleEmailChange}
            onBlur={handleEmailBlur}
          />

          {emailTouched && emailError ? (
            <TextView style={{paddingBottom: 5}} variant="errorBodyText">
              {emailError}
            </TextView>
          ) : null}

          <TextView
            variant="bodyText2"
            style={{textAlign: 'left', paddingVertical: theme.spacing.iv}}>
            Password
          </TextView>
          <BaseView
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              },            
              validPassword(password)
                ? theme.textInputStyles.validInput
                : theme.textInputStyles.input,
              passwordTouched && passwordError
                ? theme.textInputStyles.inputError
                : null,
            ]}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onPress={() => {
                setPasswordTouched(false);
              }}
              onEndEditing={() => setPasswordTouched(true)}
              onChangeText={handlePasswordChange}
              onBlur={handlePasswordBlur}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <TextView variant="boldCaption" style={{marginLeft: theme.spacing.s, color: theme.colors.brightPink}}>
                {showPassword ? 'Hide' : 'Show'}
              </TextView>
            </TouchableOpacity>
          </BaseView>
          {passwordTouched && passwordError ? (
            <TextView style={{paddingBottom: 10}} variant="errorBodyText">
              {passwordError}
            </TextView>
          ) : null}

          <TouchableOpacity
            style={[
              theme.buttonStyles.primaryButton,
              {borderRadius: theme.spacing.v, marginTop: theme.spacing.s, opacity: !isFormValid ? 0.5: 1.0},
            ]}
            onPress={handleLogin}
            disabled={loading || !isFormValid}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <TextView color="white" variant="buttonActive">Login</TextView>
            )}
          </TouchableOpacity>

          <TextView variant="miniTitle" style={styles.orText}>Or continue with social account</TextView>

          <TouchableOpacity style={styles.socialButton}>
            <GoogleIcon width={20} height={20} color="#DB4437" />
            <TextView style={styles.socialButtonText} variant="bodyText3">Sign in with Google</TextView>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <FacebookIcon width={20} height={20} color="#4267B2" />
            <TextView style={styles.socialButtonText} variant="bodyText3">Sign in with Facebook</TextView>
          </TouchableOpacity>
        </BaseView>

        <TouchableOpacity style={styles.registerButtonStyle} onPress={() => navigation.navigate('Register')}>
          <TextView variant="bodyText3">Don't have an account? </TextView>
          <TextView color="brightPink" variant="bodyText3"> Register</TextView>
        </TouchableOpacity>
      </BaseView>
    </Screen>

  );
};

const styles = StyleSheet.create({

  loginContainer: {
    flex: 1,
    padding: 20,
  },
  brandContainer: {
    marginTop: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing.x,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
  },
  socialButtonText: {
    marginLeft: 10,
  },

  orText: {
    textAlign: 'center',
    marginVertical: 24,
  },
  registerButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordInput: {flex: 1, paddingVertical: 15},
  button: {backgroundColor: '#FF6347', padding: 15, borderRadius: 8},

});

export default LoginScreen;
