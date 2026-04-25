import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StabilityCard from "../components/StabilityCard";
import CycleTrends from "../components/CycleTrends";
import BodyTrends from "../components/BodyTrends";
import SymptomsChart from "../components/SymptomsChart";
import LifestyleHeatmap from "../components/LifestyleHeatmap";
import BottomNav from "../components/BottomNav";

export default function InsightsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      
      {/* HEADER */}
      <View style={styles.headerRow}>
        
        <View style={styles.dotGrid}>
          <View style={[styles.dot, { backgroundColor: "#c7bafc" }]} />
          <View style={[styles.dot, { backgroundColor: "#b8a9f8" }]} />
          <View style={[styles.dot, { backgroundColor: "#f2b6b6" }]} />
          <View style={[styles.dot, { backgroundColor: "#e58b8b" }]} />
        </View>

        <Text style={styles.header}>Insights</Text>

        <View style={{ width: 30 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        <Text style={styles.sectionTitle}>Stability Summary</Text>
        <View style={styles.stabilityCard}>
          <StabilityCard />
        </View>

        <Text style={styles.sectionTitle}>Cycle Trends</Text>
          <CycleTrends />


        <Text style={styles.sectionTitle}>Body & Metabolic Trends</Text>
          <BodyTrends />

        <Text style={styles.sectionTitle}>Body Signals</Text>
          <SymptomsChart />


        <Text style={styles.sectionTitle}>Lifestyle Impact</Text>
          <LifestyleHeatmap />

        <View style={{ height: 100 }} />
      </ScrollView>

      <SafeAreaView edges={["bottom"]}>
        <BottomNav />
      </SafeAreaView>

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
    paddingTop: 6,
    paddingBottom: 20, 
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 4,
  },

  header: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },

  dotGrid: {
    width: 22,
    height: 22,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 1,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 10,
    color: "#111",
  },

  stabilityCard: {
    backgroundColor: "#f7f8fb",
  },

  innerTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },

  sub: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },
});