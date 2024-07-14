import 'package:flutter/material.dart';
import 'dart:async';
import 'package:flutter/services.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

// StatefulWidget 클래스 매개변수로 받는 State 클래스 상속.
class _HomeScreenState extends State<HomeScreen> {
  final PageController pageController = PageController();
  // PageController는 PageView가 보여줄 첫 페이지를 설정하거나 페이지 넘김을 트리거

  @override
  void initState() {
    super.initState();

    Timer.periodic(
      const Duration(seconds: 3),
      (timer) {
        // 현재페이지 가져오기
        int? nextPage = pageController.page?.toInt();

        if (nextPage == null) return;
        if (nextPage == 4) {
          nextPage = 0;
        } else {
          nextPage++;
        }
        pageController.animateToPage(nextPage,
            duration: const Duration(microseconds: 500), curve: Curves.ease);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.light);

    return Scaffold(
      body: PageView(
        // PageView는 여러 페이지를 한 화면에서 구현할 수 있도록 해주는 위젯 클래스
        controller: pageController,
        children: [1, 2, 3, 4, 5]
            .map(
              (number) => Image.asset(
                'asset/img/image_$number.jpeg',
                fit: BoxFit.cover,
              ),
            )
            .toList(),
      ),
    );
  }
}
