import { router, Link } from "expo-router";
import { Text, TextInput, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { useSession } from "@/context";

/**
 * SignIn component handles user authentication through email and password
 * @returns {JSX.Element} Sign-in form component
 */
export default function SignIn() {
  // ============================================================================
  // Hooks & State
  // ============================================================================
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useSession();

  // ============================================================================
  // Handlers
  // ============================================================================

  /**
   * Handles the sign-in process
   * @returns {Promise<Models.User<Models.Preferences> | null>}
   */
  const handleLogin = async () => {
    try {
      return await signIn(email, password);
    } catch (err) {
      console.log("[handleLogin] ==>", err);
      return null;
    }
  };

  /**
   * Handles the sign-in button press
   */
  const handleSignInPress = async () => {
    const resp = await handleLogin();
    console.log("[SignIn] resp ==>", resp);
    router.replace("/(app)/(drawer)/(tabs)/");
  };

  // ============================================================================
  // Render
  // ============================================================================

  return (
    <View style={styles.container}>
      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome Back</Text>
        <Text style={styles.welcomeSubtitle}>Please sign in to continue</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formSection}>
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
            placeholder="Your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textContentType="password"
            style={styles.input}
          />
        </View>
      </View>

      {/* Sign In Button */}
      <Pressable
        onPress={handleSignInPress}
        style={styles.signInButton}
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </Pressable>

      {/* Sign Up Link */}
      <View style={styles.signUpLinkContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Link href="/sign-up" asChild>
          <Pressable>
            <Text style={styles.signUpLink}>Sign Up</Text>
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
  signInButton: {
    backgroundColor: '#3182ce',
    width: '100%',
    maxWidth: 300,
    paddingVertical: 12,
    borderRadius: 8,
  },
  signInButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  signUpLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  signUpText: {
    color: '#4a5568',
  },
  signUpLink: {
    color: '#3182ce',
    fontWeight: '600',
    marginLeft: 8,
  },
});