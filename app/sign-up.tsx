import { router, Link } from "expo-router";
import { Text, TextInput, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { useSession } from "@/context";

/**
 * SignUp component handles new user registration
 * @returns {JSX.Element} Sign-up form component
 */
export default function SignUp() {
  // ============================================================================
  // Hooks & State
  // ============================================================================
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp } = useSession();

  // ============================================================================
  // Handlers
  // ============================================================================

  /**
   * Handles the registration process
   * @returns {Promise<Models.User<Models.Preferences> | null>}
   */
  const handleRegister = async () => {
    try {
      return await signUp(email, password, name);
    } catch (err) {
      console.log("[handleRegister] ==>", err);
      return null;
    }
  };

  /**
   * Handles the sign-up button press
   */
  const handleSignUpPress = async () => {
    const resp = await handleRegister();
    console.log("[SignUp] resp ==>", resp);
    if (resp) {
      router.replace("/(app)/(drawer)/(tabs)/");
    }
  };

  // ============================================================================
  // Render
  // ============================================================================

  return (
    <View style={styles.container}>
      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Create Account</Text>
        <Text style={styles.welcomeSubtitle}>Sign up to get started</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formSection}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Your full name"
            value={name}
            onChangeText={setName}
            textContentType="name"
            autoCapitalize="words"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="name@mail.com"
            value={email}
            onChangeText={setEmail}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textContentType="newPassword"
            style={styles.input}
          />
        </View>
      </View>

      {/* Sign Up Button */}
      <Pressable
        onPress={handleSignUpPress}
        style={styles.signUpButton}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </Pressable>

      {/* Sign In Link */}
      <View style={styles.signInLinkContainer}>
        <Text style={styles.signInText}>Already have an account?</Text>
        <Link href="/sign-in" asChild>
          <Pressable>
            <Text style={styles.signInLink}>Sign In</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

// ============================================================================
// Styles
// ============================================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: '#4a5568',
  },
  formSection: {
    width: '100%',
    maxWidth: 300,
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4a5568',
    marginBottom: 4,
    marginLeft: 4,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#cbd5e0',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  signUpButton: {
    backgroundColor: '#3182ce',
    width: '100%',
    maxWidth: 300,
    paddingVertical: 12,
    borderRadius: 8,
  },
  signUpButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  signInLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  signInText: {
    color: '#4a5568',
  },
  signInLink: {
    color: '#3182ce',
    fontWeight: '600',
    marginLeft: 8,
  },
});