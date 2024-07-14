import 'package:flutter/material.dart';
import 'package:abv_basics/result_screen.dart';
import 'package:abv_basics/data/questions.dart';
import 'package:abv_basics/questions_screen.dart';
import 'package:abv_basics/start_screen.dart';

class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  // 변수에 위젯 저장 - null
  /*
  Widget? activeScreen; 

  @override
  void initState() {
    activeScreen = StartScreen(switchScreen);
    super.initState();
  }
<<<<<<< HEAD

=======
  
>>>>>>> 8407420cbf6aa160359c480ad029dff70b72821a
  void switchScreen() {
    setState(() {
      activeScreen = const QuestionsScreen();
    });
  }
  */

  List<String> selectedAnswers = [];
  // 위젯을 식별자로 저장
  var activeScreen = 'start-screen';

  void switchScreen() {
    setState(() {
      activeScreen = 'questions-screen';
    });
  }

  void chooseAnswer(String answer) {
    selectedAnswers.add(answer);

    if (selectedAnswers.length == questions.length) {
      setState(() {
        // selectedAnswers = [];
        activeScreen = 'result-screen';
      });
    }
  }

  void restartQuiz() {
    setState(() {
      selectedAnswers = [];
      activeScreen = 'questions-screen';
    });
  }

  @override
  Widget build(context) {
    Widget screenWidget = StartScreen(switchScreen);

    if (activeScreen == 'questions-screen') {
      screenWidget = QuestionsScreen(
        onSelectedAnswer: chooseAnswer,
      );
    }

    if (activeScreen == 'result-screen') {
      screenWidget = ResultScreen(
        chosenAnswers: selectedAnswers,
        onRestart: restartQuiz,
      );
    }

    return MaterialApp(
      home: Scaffold(
        // 앱의 기본적인 구조와 레이아웃을 정의하고 구성하는데 사용되는 위젯
        body: Container(
          decoration: const BoxDecoration(
              gradient: LinearGradient(colors: [
            Color.fromARGB(255, 78, 13, 151),
            Color.fromARGB(255, 116, 53, 159),
          ], begin: Alignment.topLeft, end: Alignment.bottomRight)),
          child: screenWidget,
        ),
      ),
    );
  }
}
