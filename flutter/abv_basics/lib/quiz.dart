import 'package:abv_basics/questions.dart';
import 'package:flutter/material.dart';
import 'package:abv_basics/start_screen.dart';

class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  Widget? activeScreen; // 변수에 위젯 저장

  @override
  void initState() {
    activeScreen = StartScreen(switchScreen);
    super.initState();
  }

  void switchScreen() {
    setState(() {
      activeScreen = const QuestionsScreen();
    });
  }

  @override
  Widget build(context) {
    return MaterialApp(
      home: Scaffold(
          // 앱의 기본적인 구조와 레이아웃을 정의하고 구성하는데 사용되는 위젯
          body: Container(
        decoration: const BoxDecoration(
            gradient: LinearGradient(colors: [
          Color.fromARGB(255, 78, 13, 151),
          Color.fromARGB(255, 116, 53, 159),
        ], begin: Alignment.topLeft, end: Alignment.bottomRight)),
        child: activeScreen,
      )),
    );
  }
}
