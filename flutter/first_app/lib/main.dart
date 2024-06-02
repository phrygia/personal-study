import 'package:first_app/gradient_container.dart';
import 'package:flutter/material.dart';

void main() {
  // 함수 정의
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: GradientContianer(
          Color.fromARGB(255, 26, 2, 80),
          Color.fromARGB(255, 92, 31, 235),
        ),
      ),
    ),
  ); // 기능 실행
}

// const : dart가 런타임 성능을 최적화하도록 돕기위해 존재
// Scafford:
// 모든값은 객체다 - Code Dart Concept!
// widget = objects = 메모리의 데이터 구조
// 객체지향 언어
// 클래스 인스턴스화


// 변수 = 데이터 컨테이너