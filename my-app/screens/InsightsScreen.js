import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StabilityCard from "../components/StabilityCard";
import CycleTrends from "../components/CycleTrends";
import BodyTrends from "../components/BodyTrends";
import SymptomsChart from "../components/SymptomsChart";
import LifestyleHeatmap from "../components/LifestyleHeatmap";
import BottomNav from "../components/BottomNav";

export default function InsightsScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.header}>Insights</Text>

        <Text style={styles.sectionTitle}>Stability Summary</Text>
        <StabilityCard />

        <Text style={styles.sectionTitle}>Cycle Trends</Text>
        <CycleTrends />

        <Text style={styles.sectionTitle}>Body & Metabolic Trends</Text>
        <BodyTrends />

        <Text style={styles.sectionTitle}>Body Signals</Text>
        <SymptomsChart />
        <LifestyleHeatmap />
      </ScrollView>

      <BottomNav />

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f3",
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 10, 
    paddingBottom: 80, 
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
    marginTop: 10,
  },
});