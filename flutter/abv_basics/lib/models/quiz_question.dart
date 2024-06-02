class QuizQuestion {
  const QuizQuestion(this.text, this.answers);

  final String text;
  final List<String> answers;

  List<String> get shuffledAnswers {
    final shuffledList = List.of(answers); // 체이닝
    shuffledList.shuffle(); // 원래 배열을 바꾸기 때문에 배열 복사해서 랜덤화
    return shuffledList;
  }
}
