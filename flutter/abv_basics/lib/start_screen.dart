import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:google_fonts/google_fonts.dart';

// StatelessWidget(상태비저장), StatefulWidget
class StartScreen extends StatelessWidget {
  // super 키워드는 부모 클래스의 생성자를 호출하는 데 사용
  // 자식 클래스에서 부모 클래스의 속성이나 메서드를 사용하고자 할 때 super를 통해 이에 접근할 수 있습니다.
  // 키는 Flutter에서 위젯의 고유 식별자로 사용

  const StartScreen(this.startQuiz,
      {super.key}); // StatelessWidget의 생성자를 호출하며, key 매개변수를 전달

  final void Function() startQuiz;

  @override
  Widget build(context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Opacity(
            opacity: 0.6,
            child: Image.asset(
              'assets/images/quiz-logo.png',
              width: 300,
              color: const Color.fromARGB(150, 255, 255, 255),
            ),
          ),
          const SizedBox(
            height: 80,
          ),
          Text(
            'Learn flutter the fun Way!',
            style: GoogleFonts.lato(
              color: const Color.fromARGB(255, 237, 223, 252),
              fontSize: 24,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(
            height: 30,
          ),
          OutlinedButton.icon(
              onPressed: () {
                startQuiz();
              },
              style: OutlinedButton.styleFrom(foregroundColor: Colors.white),
              icon: const Icon(Icons.arrow_right_alt),
              label: const Text('Start Quiz'))
        ],
      ),
    );
  }
}
