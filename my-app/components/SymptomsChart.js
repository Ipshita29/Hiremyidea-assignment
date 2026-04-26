import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, {
  Path,
  Circle,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg";

export default function SymptomsChart() {
  const size = 260;
  const cx = size / 2;
  const cy = size / 2;

  const outer = 110;
  const inner = 65;

  const data = [
    { value: 30, label: "Mood", color: "#E3B1B1", light: "#fde7e7" },
    { value: 31, label: "Bloating", color: "#A9A3C9", light: "#ece9ff" },
    { value: 21, label: "Fatigue", color: "#D88989", light: "#ffe3e3" },
    { value: 17, label: "Acne", color: "#7F9C91", light: "#e3f3ee" },
  ];

  let startAngle = -90;

  const getPoint = (angle, r) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  const createArc = (start, end) => {
    const p1 = getPoint(start, outer);
    const p2 = getPoint(end, outer);
    const p3 = getPoint(end, inner);
    const p4 = getPoint(start, inner);

    const largeArc = end - start > 180 ? 1 : 0;

    return `
      M ${p1.x} ${p1.y}
      A ${outer} ${outer} 0 ${largeArc} 1 ${p2.x} ${p2.y}
      L ${p3.x} ${p3.y}
      A ${inner} ${inner} 0 ${largeArc} 0 ${p4.x} ${p4.y}
      Z
    `;
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Symptom Trends</Text>
      <Text style={styles.sub}>Compared to last cycle</Text>

      <View style={styles.container}>
        <Svg width={size} height={size}>
          <Defs>
            {data.map((item, i) => (
              <RadialGradient key={i} id={`grad${i}`} cx="50%" cy="50%" r="70%">
                <Stop offset="0%" stopColor={item.light} />
                <Stop offset="100%" stopColor={item.color} />
              </RadialGradient>
            ))}
          </Defs>

          {data.map((item, i) => {
            const angle = (item.value / 100) * 360;
            const endAngle = startAngle + angle;

            const path = createArc(startAngle, endAngle);
            const mid = (startAngle + endAngle) / 2;

            // 🔥 FIX: controlled bubble distance (no overlap)
            const bubblePos = getPoint(mid, outer + 10);

            startAngle = endAngle;

            return (
              <React.Fragment key={i}>
                {/* gradient slice */}
                <Path d={path} fill={`url(#grad${i})`} />

                {/* bubble */}
                <View
                  style={[
                    styles.bubble,
                    {
                      left: bubblePos.x - 35,
                      top: bubblePos.y - 35,
                    },
                  ]}
                >
                  <Text style={styles.percent}>{item.value}%</Text>
                  <Text style={styles.label}>{item.label}</Text>
                </View>
              </React.Fragment>
            );
          })}

          {/* center hole */}
          <Circle cx={cx} cy={cy} r={inner} fill="#fff" />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.9)", // 🔥 blends with gradient
    borderRadius: 20,
    padding: 18,
    marginTop: 20,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  sub: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },

  container: {
    width: 260,
    height: 300, // 🔥 IMPORTANT FIX (prevents overlap)
    alignSelf: "center",
    position: "relative",
  },

  bubble: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },

  percent: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
  },

  label: {
    fontSize: 11,
    color: "#666",
  },
});