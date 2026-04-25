import react from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import StabilityCard from "../components/StabilityCard"
import CycleTrends from "../components/CycleTrends"
import BodyTrends from "../components/BodyTrends"
import SymptomsChart from "../components/SymptomsChart"
import LifestyleHeatmap from "../components/LifestyleHeatmap"
import BottomNav from "../components/BottomNav"

export default function InsightsScreen() {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.header}>Insights</Text>
                <Text style={styles.sectionTitle}>Stability Summary</Text>
                <StabilityCard />
                <View style={{ height: 20 }} />
            </ScrollView>
            <CycleTrends/>
            <BodyTrends/>
            <SymptomsChart/>
            <LifestyleHeatmap/>
            <BottomNav/>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f3",
    padding: 16,
  },

  header: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
});