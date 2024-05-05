import 'package:flutter/material.dart';

// StatelessWidget(상태비저장), StatefulWidget
class StartScreen extends StatelessWidget {
  // super 키워드는 부모 클래스의 생성자를 호출하는 데 사용
  // 자식 클래스에서 부모 클래스의 속성이나 메서드를 사용하고자 할 때 super를 통해 이에 접근할 수 있습니다.
  // 키는 Flutter에서 위젯의 고유 식별자로 사용

  const StartScreen({super.key}); // StatelessWidget의 생성자를 호출하며, key 매개변수를 전달

  @override
  Widget build(context) {
    return const Center(
      child: Text('start screen'),
    );
  }
}
