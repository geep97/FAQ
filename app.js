import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const QuestionAnswer = ({ question, answer, expanded, onPress }) => (
  <View style={styles.qaContainer}>
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{question}</Text>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name={expanded ? "minuscircle" : "pluscircle"} size={24} color="#3498db" />
      </TouchableOpacity>
    </View>
    {expanded && <Text style={styles.answer}>{answer}</Text>}
  </View>
);

export default function App() {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  const toggleExpansion1 = () => setExpanded1(!expanded1);
  const toggleExpansion2 = () => setExpanded2(!expanded2);
  const toggleExpansion3 = () => setExpanded3(!expanded3);
  const toggleExpansion4 = () => setExpanded4(!expanded4);

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <View style={styles.mystar}>
          <AntDesign name="staro" size={40} color="#f39c12" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Frequently Asked Questions</Text>
          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <QuestionAnswer
              question="What is Frontend Mentor, and how will it help me?"
              answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
              expanded={expanded1}
              onPress={toggleExpansion1}
            />

            <QuestionAnswer
              question="Is Frontend Mentor free?"
              answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
              expanded={expanded2}
              onPress={toggleExpansion2}
            />

            <QuestionAnswer
              question="Can I use Frontend Mentor projects in my portfolio?"
              answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
              expanded={expanded3}
              onPress={toggleExpansion3}
            />

            <QuestionAnswer
              question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
              answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
              expanded={expanded4}
              onPress={toggleExpansion4}
            />
          </ScrollView>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    width: 350,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mystar: {
    paddingRight: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3498db',
  },
  scrollContainer: {
    flex: 1,
  },
  qaContainer: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  questionText: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
    color: '#2c3e50',
  },
  answer: {
    fontSize: 16,
    marginBottom: 10,
    paddingRight: 10,
    color: '#7f8c8d',
  },
});
