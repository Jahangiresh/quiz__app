let currentQuestion = 0;
let answeredCorrect = 0;

function loadQuestion() {
  return `<div> <fieldset>

        <legend class="question">${
          myQuestions[currentQuestion].question
        }</legend>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-1" tabindex="0" value="a">
        <label for="answer1-1">${myQuestions[currentQuestion].answers.a}</label>
        <br>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-2" tabindex="1" value="b">
        <label for="answer1-2">${myQuestions[currentQuestion].answers.b}</label>
        <br>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-3" tabindex="2" value="c">
        <label for="answer1-3">${
          myQuestions[currentQuestion].answers.c
        }</label><br>
        <input type="radio" name="exercise-question" class="exercise-question" id="answer1-4" tabindex="3" value="d">
        <label for="answer1-4">${myQuestions[currentQuestion].answers.d}</label>
        <button class = "submitAnswer" type="submit"> testiqle</button><br>
        <p>Question ${currentQuestion + 1} of ${myQuestions.length}</p>
        <p>${answeredCorrect} of ${myQuestions.length} correct</p>
      </fieldset>
      <h1 class="name_h">${adSoyad}</h1>

      </div>`;
}
let adSoyad = "";
function startQuiz() {
  $(".signup-form").on("click", ".submitStart", function (event) {
    event.preventDefault();
    adSoyad = this.previousElementSibling.value;
    $(".signup-form").html(loadQuestion);
  });
}

function loadCorrectFeedback() {
  return `
  <p>duzgun cavabdir</p>
  <button class = "submitNext" type="submit"> Novbeti </button>
    
  <p>sual ${currentQuestion + 1} / ${myQuestions.length}</p>
        <p>${answeredCorrect} / ${myQuestions.length} duzdur</p>`;
}

function loadIncorrectFeedback() {
  return `<p>sehv cavab dir</p>
    <p> duzgun cavab,  ${myQuestions[currentQuestion].correctAnswerResult} </p>
   <button class = "submitNext" type="submit"> Novbeti </button>
   
   <p>sual ${currentQuestion + 1} / ${myQuestions.length}</p>
        <p>${answeredCorrect} / ${myQuestions.length} duzdur</p>`;
}
function loadInput() {
  return `<p>variant secin </p>
   <button class = "submitNext" type="submit"> Novbeti </button>
   
   <p>sual ${currentQuestion + 1} / ${myQuestions.length}</p>
        <p>${answeredCorrect} / ${myQuestions.length} duzdur</p>`;
}

function submitAnswer() {
  $(".signup-form").on("click", ".submitAnswer", function (event) {
    event.preventDefault();
    let selectedAnswer = $(".exercise-question:checked").val();

    $("#error").html("");

    if (selectedAnswer === undefined) {
      $(".signup-form").html(loadInput);
    } else {
      if (selectedAnswer === myQuestions[currentQuestion].correctAnswer) {
        answeredCorrect++;
        $(".signup-form").html(loadCorrectFeedback);
      } else {
        $(".signup-form").html(loadIncorrectFeedback);
      }

      currentQuestion++;
    }
  });
}

function loadExitPage() {
  return `<p>You scored ${answeredCorrect} out of ${myQuestions.length}.</p><br><p>You can use your answers to create a study guide or click the Restart button below if you'd like to try again. Best of luck and remember you are a Rock Star!</p><br>
  <button class = "restartQuiz" type="submit">Restart</button>`;
}

function restartQuiz() {
  $(".signup-form").on("click", ".restartQuiz", function (event) {
    event.preventDefault();
    currentQuestion = 0;
    answeredCorrect = 0;

    $(".signup-form").html(loadQuestion);
  });
}

function submitNext() {
  $(".signup-form").on("click", ".submitNext", function (event) {
    event.preventDefault();

    if (currentQuestion == 13) {
      return $(".signup-form").html(loadExitPage);
    } else {
      $(".signup-form").html(loadQuestion);
    }
  });
}

function init() {
  startQuiz();
  submitAnswer();
  submitNext();
  restartQuiz();
}

$(init);
