import 'package:flutter/material.dart';
import 'package:abv_basics/start_screen.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
          // 앱의 기본적인 구조와 레이아웃을 정의하고 구성하는데 사용되는 위젯
          body: Container(
        decoration: const BoxDecoration(
            gradient: LinearGradient(colors: [
          Color.fromARGB(255, 78, 13, 151),
          Color.fromARGB(255, 116, 53, 159),
        ], begin: Alignment.topLeft, end: Alignment.bottomRight)),
        child: const StartScreen(),
      )),
    ),
  );
}

/*
class Main extends StatelessWidget {
  const Main({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: const Color.fromARGB(255, 64, 0, 137),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Center(
                child: Image.asset('assets/images/quiz-logo.png', width: 250)),
            const Padding(
              padding: EdgeInsets.only(top: 60),
              child: Text(
                'Learn Flutter the fun way!',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 18,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 25),
              child: FloatingActionButton.extended(
                onPressed: () {},
                backgroundColor: Color.fromARGB(255, 64, 0, 137),
                elevation: 1,
                shape: const RoundedRectangleBorder(
                    borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(4.0),
                  topRight: Radius.circular(4.0),
                  bottomLeft: Radius.circular(4.0),
                  bottomRight: Radius.circular(4.0),
                )),
                label: const Text(
                  'Start Quiz',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 14,
                  ),
                ),
              ),
              // child: TextButton(
              //   onPressed: () {},
              //   child: const Text(
              //     'Start Quiz',
              //     style: TextStyle(
              //       color: Colors.white,
              //       fontSize: 14,
              //     ),
              //   ),
              // ),
            )
          ],
        ));
  }
}
*/