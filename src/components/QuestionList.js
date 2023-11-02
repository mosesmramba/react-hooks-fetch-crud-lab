import { useState, useEffect } from "react";
import React from "react";
import QuestionItem from "./QuestionItem";



function QuestionList() {
  const [questions, setQuestions] = useState ([])
  const [changed, setChanged] = useState(false)
  
  useEffect(() => {
    fetch(" http://localhost:4000/questions")
    .then((res) => res.json())
    .then((questions) => {
      //console.log(questions)
      setQuestions(questions)
    })
    .catch(() => {
      console.error('failed to read from server')
    }) 
  }, [changed])

  function handleDelete(id){
    const updateQuestions = questions.filter((question)=>{
      return question !== id
    })
    setQuestions(updateQuestions)
    setChanged(!changed)
  }
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */
          questions.map((item) => (
              <li key={item.id}>
              <QuestionItem onDelete = {handleDelete}  question = {item} />
            </li>
          ))
        }
      </ul> 
    </section>
  );
}

export default QuestionList;