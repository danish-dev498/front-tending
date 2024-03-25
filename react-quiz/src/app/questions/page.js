"use client";

import useFetch from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  ListItemText,
  Typography,
} from "@mui/material";

import { decode } from "html-entities";
import {
  handleCorrectAnswer,
  handleScoreChange,
  handleWrongAnswer,
  reset,
} from "@/redux/feature/questionSlice";
import { useRouter } from "next/navigation";
import QuestionComponent from "@/components/QuestionComponent";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
const Questions = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedAns, setSelectedAns] = useState();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isActiveButton, setIsActiveButton] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
    correct_answer,
    wrong_answer,
  } = useSelector((state) => state.questions);

  if (amount_of_question === 0) {
    return (
      <>
        <h1>Please select the the input first</h1>
        {router.push("/")}
      </>
    );
  }


  console.log('=========amount', amount_of_question, question_difficulty)

  return (
    <>
      <QuestionComponent
        question_category={question_category}
        question_difficulty={question_difficulty}
        question_type={question_type}
        amount_of_question={amount_of_question}
      />
    </>
  );
};

export default Questions;
