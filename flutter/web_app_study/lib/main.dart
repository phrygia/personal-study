import 'package:flutter/material.dart';
import 'package:web_app_study/screen/image_editor/home_screen.dart';
// import 'package:web_app_study/const/colors.dart';
// import 'package:web_app_study/screen/random_dice/home_screen.dart';
// import 'package:web_app_study/screen/random_dice/root_screen.dart';
// import 'package:web_app_study/screen/vid_player/home_screen.dart';
// import 'package:web_app_study/screen/u_and_i/home_screen.dart';

// https://github.com/codefactory-co/golden-rabbit-flutter-novice/tree/main

/*
// U & I앱 
void main() {
  runApp(
    MaterialApp(
      theme: ThemeData(π
        fontFamily: 'sunflower',
        textTheme: const TextTheme(
          displayLarge: TextStyle(
            color: Colors.white,
            fontSize: 80,
            fontWeight: FontWeight.w700,
            fontFamily: 'parisienne',
          ),
          displayMedium: TextStyle(
            color: Colors.white,
            fontSize: 50,
            fontWeight: FontWeight.w700,
          ),
          bodyLarge: TextStyle(
            color: Colors.white,
            fontSize: 30,
          ),
          bodyMedium: TextStyle(
            color: Colors.white,
            fontSize: 20,
          ),
        ),
      ),
      home: const HomeScreen(),
    ),
  );
}
*/

// Dice App
/*
void main() {
  runApp(
    MaterialApp(
      theme: ThemeData(
        scaffoldBackgroundColor: backgroundColor,
        sliderTheme: SliderThemeData(
          thumbColor: primaryColor,
          activeTrackColor: primaryColor,
          inactiveTrackColor: primaryColor.withOpacity(0.3),
        ),
        bottomNavigationBarTheme: BottomNavigationBarThemeData(
          selectedItemColor: primaryColor,
          unselectedItemColor: secondaryColor,
          backgroundColor: backgroundColor,
        ),
      ),
      home: RootScreen(),
    ),
  );
}
*/

void main() {
  runApp(
    MaterialApp(
      home: HomeScreen(),
    ),
  );
}
