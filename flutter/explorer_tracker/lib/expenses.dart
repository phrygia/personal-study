import 'package:flutter/material.dart';
import 'package:explorer/models/expenses.dart';

// 위젯 클래스
class Expenses extends StatefulWidget {
  const Expenses({super.key});

  @override
  State<Expenses> createState() {
    return _ExpensesState();
  }
}

// 상태클래스
class _ExpensesState extends State<Expenses> {
  final List<Expense> _registeredExpenses = [
    Expense(
      title: 'Flutter Course',
      amount: 19.99,
      date: DateTime.now(),
      category: Category.work,
    ),
    Expense(
      title: 'Cinema',
      amount: 15.69,
      date: DateTime.now(),
      category: Category.leisure,
    )
  ];

  @override
  Widget build(BuildContext context) {
    // 위젯 트리 반환
    return const Scaffold(
      body: Column(
        children: [
          Text('The chart'),
          Text('Expenses list...'),
        ],
      ),
    );
  }
}
