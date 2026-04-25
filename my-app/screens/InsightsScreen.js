import react from "react"
import { View, Text , SafeAreaView} from "react-native"
import StabilityCard from "../components/StabilityCard"
import CycleTrends from "../components/CycleTrends"
import BodyTrends from "../components/BodyTrends"
import SymptomsChart from "../components/SymptomsChart"
import LifestyleHeatmap from "../components/LifestyleHeatmap"
import BottomNav from "../components/BottomNav"

export default function InsightsScreen() {
    return (
        <SafeAreaView>
            <Text>Insights Screen</Text>
            <StabilityCard/>
            <CycleTrends/>
            <BodyTrends/>
            <SymptomsChart/>
            <LifestyleHeatmap/>
            <BottomNav/>
        </SafeAreaView>
    )
}