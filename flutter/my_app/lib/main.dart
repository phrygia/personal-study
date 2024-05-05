import 'package:flutter/material.dart';
import 'package:my_app/gradient_container.dart';
//import : 다른 파일과 연결하는 키워드

// 위젯 : 객체 (메모리에 있는 데이터 구조),   (widget = Objects = Data Structures in Memory)
// const : 앱의 런타임 성능을 최적화하도록 돕기 위해 존재
// 커스텀 위젯 - 재사용 가능

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: GradientContainer(),
      ),
    ),
  );
}
