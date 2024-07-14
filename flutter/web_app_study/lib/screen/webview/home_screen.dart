import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class HomeScreen extends StatelessWidget {
  WebViewController? controller;

  HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(99, 20, 154, 13),
        title: const Text('Code Factory'),
        centerTitle: true,
        actions: [
          IconButton(
              onPressed: () {
                print(controller);
                if (controller != null) {
                  controller!.loadUrl('https://honestflower.kr/home');
                }
              },
              icon: const Icon(
                Icons.home,
              ))
        ],
      ),
      body: WebView(
        onWebViewCreated: (WebViewController controller) {
          this.controller = controller;
        },
        initialUrl: 'https://honestflower.kr/home',
        javascriptMode: JavascriptMode.unrestricted,
      ),
    );
  }
}
