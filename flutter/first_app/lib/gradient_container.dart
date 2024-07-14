import 'package:first_app/dive_roller.dart';
import 'package:flutter/material.dart';
import 'package:first_app/styles_text.dart';

const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;

class GradientContianer extends StatelessWidget {
  // StatelessWidget으로 전달되어야 하는 핵심 인수
  // const GradientContianer(this.colors, {super.key});'

  // const GradientContianer({super.key, required this.colors});
  // final List<Color> colors; // list -> 기본값으로 수정할 수 있다.

  const GradientContianer(this.color1, this.color2, {super.key});
  const GradientContianer.purple({super.key})
      : color1 = Colors.deepPurple,
        color2 = Colors.indigo;

  final Color color1;
  final Color color2;

  @override // annotation
  Widget build(context) {
    // 위젯은 반환된 빌드 형식, -> 위젯을 반환해야 함,    사용자 인터페이스 렌더링할때 자동으로 호출
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [color1, color2],
          begin: startAlignment,
          end: endAlignment,
        ),
      ),
      child: const Center(
        child: DiceRoller(),
        // child: StylesText('Hello2~~'),
      ),
    );
  }
}
