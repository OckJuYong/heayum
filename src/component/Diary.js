import React, { useState } from "react";
import axios from "axios";

import './Diary.css';

const Diary = () => {
  const [dialogues, setDialogues] = useState([]);
  const [currentDialogue, setCurrentDialogue] = useState("");
  const [emotion, setEmotion] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [comment, setComment] = useState("");
  const [detailStory, setDetailStory] = useState("");
  const [libraryId, setLibraryId] = useState(0);
  const [isDataLoaded, setIsDataLoaded] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 

  const [question, setQuestion] = useState("");

  const address = "https://port-0-hyeeum-backend-9zxht12blqj9n2fu.sel4.cloudtype.app/";

  const handleAddDialogue = async () => {
    const updatedDialogues = [...dialogues, currentDialogue];
    setDialogues(updatedDialogues);
    setCurrentDialogue("");
    
    try {
      const response = await axios.post(`${address}question-generation`, {
        qna_string: updatedDialogues.join(" "), 
        alignment: "alignment_string",
      });

      setQuestion(response.data.question); 
    } catch (error) {
      console.error("Error generating question:", error);
    }
  };

  const handleGenerateImage = async () => {
    setIsLoading(true); 

    const qnaString = dialogues.join(" ");
    try {
      console.log(qnaString, emotion);
      const response = await axios.post(`${address}image-generation`, {
        qna_string: qnaString,
        emotion: emotion,
      });
      setImageUrl(response.data.image_url);
    } catch (error) {
      console.error("Error generating image:", error);
    }

    try {
      const response = await axios.post(`${address}emotion-generation`, {
        qna_string: dialogues.join(" "), 
        alignment: "alignment_string", 
      });

      const emotionRegex = /emotion:\s*([^]+)/;
      const matches = emotionRegex.exec(response.data.Q);
      const emotionPart = matches ? matches[1] : null;
      setEmotion(emotionPart);
      console.log(emotionPart);

      setIsDataLoaded(true);
      setIsLoading(false);

    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveDiary = async () => {
    try {
      console.log(imageUrl, comment, detailStory, emotion);
      await axios.post(`${address}books`, {
        library_id: 1,
        image: imageUrl,
        comment: comment,
        detail_story: detailStory,
        emotion: emotion,
      });
      alert("Diary entry saved successfully!");
    } catch (error) {
      console.error("Error saving diary entry:", error);
    }
  };

  return (
    <div className="container_color">
      <div className="talk_main_container">
        <div className="talk_ans_container">
          {question && (
            <div className="generated_question">
              <p>{question}</p>
            </div>
          )}
        </div>

        <div className="talk_input_container">
          <div className="talk_answer_container">
            <ol>
              {dialogues.map((dialogue, index) => (
                <li key={index}>{dialogue}</li>
              ))}
            </ol>
          </div>
          <div className="talk_input_container_sub">
            <input
              type="text"
              value={currentDialogue}
              className="talk_input"
              onChange={(e) => setCurrentDialogue(e.target.value)}
            />
            <button
              onClick={handleAddDialogue}
              className="talk_btn"
            >
              입력
            </button>
          </div>
        </div>

        {isLoading && (
          <div>Loading...</div>
        )}

        {!isLoading && imageUrl && (
          <div className="generated_image">
            <img src={imageUrl} alt="Generated" className="emotion_img" />
          </div>
        )}

        <div className="emotion_custom_container" style={{ display: isDataLoaded ? 'block' : 'none' }}>
          <label>기분 직접 입력:</label>
          <input
            type="text"
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
          />
        </div>
      </div>

      <div className="button_container">
        <button onClick={handleGenerateImage}>그림으로 표현하기</button>
        <button
          onClick={handleSaveDiary}
          style={{ display: imageUrl ? 'block' : 'none' }} 
        >
          일기장 저장하기
        </button>
      </div>
    </div>
  );
};

export default Diary;
