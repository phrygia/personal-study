import 'package:flutter/material.dart'; // 클래스 인스턴스화, 객체 인스턴스화

class StyledText extends StatelessWidget {
  const StyledText({super.key});

  @override
  Widget build(context) {
    return const Text(
      'Hello World!',
      style: TextStyle(color: Colors.white, fontSize: 28),
    );
  }
}
