import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function AboutScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ 
        title: 'About',
        headerStyle: {
          backgroundColor: isDark ? '#1c1c1c' : '#f8f8f8',
        },
        headerTintColor: isDark ? '#ffffff' : '#000000',
      }} />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={[styles.title, isDark && styles.darkText]}>私たちについて</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, isDark && styles.darkText]}>ミッション</Text>
          <Text style={[styles.paragraph, isDark && styles.darkText]}>
            私たちは革新的なモバイルアプリケーションを通じて、ユーザーの日常生活をより豊かにすることを目指しています。
            使いやすさとデザイン性を重視し、最高のユーザー体験を提供することに取り組んでいます。
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, isDark && styles.darkText]}>チーム</Text>
          <Text style={[styles.paragraph, isDark && styles.darkText]}>
            経験豊富な開発者、デザイナー、プロダクトマネージャーからなる多様なチームが、
            日々新しいアイデアを形にするために協力しています。私たちは常に学び、成長し、
            より良いプロダクトを作るために努力しています。
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, isDark && styles.darkText]}>お問い合わせ</Text>
          <Text style={[styles.paragraph, isDark && styles.darkText]}>
            ご質問やフィードバックがございましたら、以下のメールアドレスまでお気軽にご連絡ください：
            info@example.com
          </Text>
        </View>
        
        <View style={styles.footer}>
          <Text style={[styles.footerText, isDark && styles.darkText]}>
            © 2023 My App. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
  darkText: {
    color: '#ffffff',
  },
});
