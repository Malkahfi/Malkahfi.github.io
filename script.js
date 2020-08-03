let question = 0
let correct = 0
let test, test_status, problem, choice, choices, pilA, pilB, pilC, pilD

function get(x){
    return document.getElementById(x);
  }

let quiz = [
    {
        problem:"Sungai Nil terletak di Benua?",
        a: "Asia",
        b: "Afrika",
        c: "Australia",
        d: "Amerika",
        answer: "B"
      },
    {
        problem: "Gunung Kilimanjaro terletak di Benua?",
        a: "Asia",
        b: "Afrika",
        c: "Australia",
        d: "Amerika",
        answer: "B"
      },
    {
        problem: "Ibukota dari New South Wales adalah?",
        a: "Canberra",
        b: "Darwin",
        c: "Sydney",
        d: "Adelaide",
        answer: "C"
      },
    {
        problem: "Selat yang menghubungkan Sumatra dan Kalimantan?",
        a: "Karimata",
        b: "Sunda",
        c: "Natuna",
        d: "Benggala",
        answer: "A"
      },
      {
        problem: "Negara terluas di Asia Selatan ?",
        a: "India",
        b: "Nepal",
        c: "Pakistan",
        d: "Iran",
        answer: "A"
      }
    ]

  function renderproblem(){
    test = get("test")

    if(question >= quiz.length){
        test.innerHTML = `<h2>You got ${correct*100/quiz.length}%</h2>`
        get("test_status").innerHTML = "Test completed";
  
        question = 0
        correct = 0
  
        return false
      }

    get("test_status").innerHTML = "PROBLEM "+ (question+1)+" OF "+ quiz.length
    
    problem = quiz[question].problem
    pilA = quiz[question].a
    pilB = quiz[question].b
    pilC = quiz[question].c
    pilD = quiz[question].d

    test.innerHTML = "<h3>"+problem+"</h3>"

    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+pilA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+pilB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+pilC+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+pilD+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

  }
  function checkAnswer(){

    choices = document.getElementsByName("choices");
    for(let i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }

    if(choice == quiz[question].answer){
        alert("CORRECT. YOU GOT THE POINT")
      correct++;
    }
    else {
        alert("WRONG!!!")
    }

    question++;

    renderproblem();
  }

  window.addEventListener("load", renderproblem);