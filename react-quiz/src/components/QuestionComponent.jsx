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

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const QuestionComponent = ({
  question_category,
  question_difficulty,
  question_type,
  amount_of_question,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedAns, setSelectedAns] = useState();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isActiveButton, setIsActiveButton] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const [quizAPI, setQuizAPI] =   useState(`/api.php?amount=${amount_of_question}`)   ;

  const { score, correct_answer, wrong_answer } = useSelector(
    (state) => state.questions
  );

  useEffect(() => {
    let quizApi = `/api.php?amount=${amount_of_question}`;

    if (question_category) {
      quizApi = quizApi.concat(`&category=${question_category}`);
    }
    if (question_difficulty) {
      quizApi = quizApi.concat(`&difficulty=${question_difficulty}`);
    }
    if (question_type) {
      quizApi = quizApi.concat(`&type=${question_type}`);
    }
  }, []);


  console.log('check quizApi', quizAPI)



  const { response, error, loading } = useFetch({ url: quizAPI });

  console.log("check response over here", response);

  useEffect(() => {
    if (response?.results.length) {
      const questions = response.results[questionIndex];

      let answer = [...questions.incorrect_answers];

      answer.splice(
        getRandomInt(questions.incorrect_answers.length),
        0,
        questions.correct_answer
      );
      setOptions(answer);
    }
  }, [questionIndex, response]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  const onAnswerSelected = (selectedAns, index) => {
    setSelectedAns(selectedAns);
    setSelectedIndex(index);
    setIsActiveButton(false);
  };

  const onActiveAnswer = () => {
    const question = response.results[questionIndex];

    if (selectedAns === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
      dispatch(handleCorrectAnswer(correct_answer + 1));
    } else {
      dispatch(handleWrongAnswer(wrong_answer + 1));
    }
    setSelectedIndex(null);
    setIsActiveButton(true);

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      router.push("/results");
      setIsActiveButton(true);
    }
  };

  // if (questionIndex + 1 === response.results.length) {
  //   setIsSubmit(true);
  //   setIsActiveButton(true);
  // }

  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ minHeight: "95vh" }}
      >
        <Box
          sx={{
            width: {
              xs: 350,
              sm: 600,
              lg: 700, // theme.breakpoints.up('lg')
              xl: 600,
            },
          }}
        >
          <Typography mt={2} sx={{ fontSize: 24, fontWeight: "bold" }}>
            {`${questionIndex + 1}.  ${decode(
              response?.results[questionIndex].question
            )}`}
          </Typography>
          {/* </Container> */}

          <Box>
            {options.map((option, index) => (
              <ListItemText
                key={index}
                sx={{
                  border: 1,
                  padding: 1,
                  borderRadius: 2,
                  borderColor: "#c4cccc",
                  background: selectedIndex === index ? "#b8e6e6" : "",
                }}
                onClick={() => onAnswerSelected(option, index)}
              >
                {option}
              </ListItemText>
            ))}
          </Box>
          <Box display={"flex"} justifyContent={"end"} alignItems={"center"}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#139c9c",
                ":hover": {
                  bgcolor: "#50b3b3",
                  color: "white",
                },
              }}
              disabled={isActiveButton}
              onClick={onActiveAnswer}
            >
              Next
            </Button>

            {/* <Button>Submit</Button> */}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default QuestionComponent;
