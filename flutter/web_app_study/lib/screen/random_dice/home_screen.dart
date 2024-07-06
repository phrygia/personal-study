import 'package:flutter/material.dart';
import 'package:web_app_study/const/colors.dart';

class HomeScreen extends StatelessWidget {
  final int number;

  const HomeScreen({
    required this.number,
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Center(
          child: Image.asset('asset/img/$number.png'),
        ),
        SizedBox(
          height: 32.0,
        ),
        Text(
          '행운의 숫자',
          style: TextStyle(
            color: secondaryColor,
            fontSize: 20,
            fontWeight: FontWeight.w700,
          ),
        ),
        SizedBox(
          height: 12,
        ),
        Text(
          number.toString(),
          style: TextStyle(
            color: primaryColor,
            fontSize: 60,
            fontWeight: FontWeight.w200,
          ),
        ),
      ],
    );
  }
}
