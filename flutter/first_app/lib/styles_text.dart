import 'package:flutter/material.dart';

class StylesText extends StatelessWidget {
  // const StylesText(String text, {super.key}) : outputText = text;// String outputText;
// String outputText;

  const StylesText(this.text, {super.key});
  final String text;

  @override
  Widget build(context) {
    return Text(
      text,
      style: TextStyle(color: Colors.white, fontSize: 18),
    );
  }
}
