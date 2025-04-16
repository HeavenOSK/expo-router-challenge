import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link, Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <Stack.Screen options={{ 
        title: 'ホーム',
        headerStyle: {
          backgroundColor: isDark ? '#1c1c1c' : '#f8f8f8',
        },
        headerTintColor: isDark ? '#ffffff' : '#000000',
      }} />
      
      <View style={styles.header}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={[styles.title, isDark && styles.darkText]}>ようこそ</Text>
        <Text style={[styles.subtitle, isDark && styles.darkText]}>
          素晴らしいアプリの世界へ
        </Text>
      </View>
      
      <View style={styles.content}>
        <View style={[styles.card, isDark && styles.darkCard]}>
          <Text style={[styles.cardTitle, isDark && styles.darkText]}>
            最新情報
          </Text>
          <Text style={[styles.cardText, isDark && styles.darkText]}>
            アプリの最新機能やアップデート情報をチェックしましょう。
          </Text>
        </View>
        
        <View style={[styles.card, isDark && styles.darkCard]}>
          <Text style={[styles.cardTitle, isDark && styles.darkText]}>
            使い方ガイド
          </Text>
          <Text style={[styles.cardText, isDark && styles.darkText]}>
            アプリの基本的な使い方や便利な機能について学びましょう。
          </Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Link href="/about" asChild>
          <TouchableOpacity style={[styles.button, isDark && styles.darkButton]}>
            <Text style={[styles.buttonText, isDark && { color: '#1c1c1c' }]}>
              私たちについて
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  header: {
    alignItems: 'center',
    padding: 30,
    marginTop: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  darkCard: {
    backgroundColor: '#2a2a2a',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  darkButton: {
    backgroundColor: '#60a5fa',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  darkText: {
    color: '#ffffff',
  },
});
