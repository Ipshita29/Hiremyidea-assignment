import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import StabilityCard from "../components/StabilityCard";
import CycleTrends from "../components/CycleTrends";
import BodyTrends from "../components/BodyTrends";
import SymptomsChart from "../components/SymptomsChart";
import LifestyleHeatmap from "../components/LifestyleHeatmap";
import BottomNav from "../components/BottomNav";

export default function InsightsScreen() {
  return (
    <LinearGradient
      colors={["#f7e0e0", "#e1f5f0", "#f9fbf9"]}
      style={{ flex: 1 }}
    >
      <StatusBar style="dark" translucent />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
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
          <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.sectionTitle}>Stability Summary</Text>
            <StabilityCard />
            <Text style={styles.sectionTitle}>Cycle Trends</Text>
            <CycleTrends />
            <Text style={styles.sectionTitle}>Body & Metabolic Trends</Text>
            <BodyTrends />
            <Text style={styles.sectionTitle}>Body Signals</Text>
            <View style={{ marginTop: 10 }}>
              <SymptomsChart />
            </View>
            <Text style={styles.sectionTitle}>Lifestyle Impact</Text>
            <LifestyleHeatmap />
            <View style={{ height: 120 }} />
          </ScrollView>
          <BottomNav />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12, 
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

  content: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 10,
    color: "#111",
  },
});