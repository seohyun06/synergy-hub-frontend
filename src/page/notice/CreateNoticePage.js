import { useState, useEffect, useRef } from "react";
import { Card, Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "./CreateNoticePage.css";

function CreateNoticePage() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [teamId, setTeamId] = useState(null);
  const fileInputRef = useRef(null); // 파일 input 참조 생성
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const teamIdFromQuery = queryParams.get("team");
    if (!teamIdFromQuery) {
      alert("유효한 팀 ID가 필요합니다.");
      navigate("/notices");
      return;
    }
    setTeamId(teamIdFromQuery);
  }, [location, navigate]);

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:8080/images/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("이미지 업로드 실패:", errorData);
        alert("이미지 업로드 실패: " + errorData.message);
        return null;
      }

      const imageUrl = await response.text();
      console.log("이미지 업로드 성공:", imageUrl);
      return imageUrl;
    } catch (error) {
      console.error("이미지 업로드 중 오류 발생:", error);
      alert("이미지 업로드 중 오류가 발생했습니다.");
      return null;
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleImageRemove = () => {
    setImageFile(null); // 파일 상태 초기화
    setImagePreview(""); // 미리보기 초기화
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // 파일 input 값 초기화
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!teamId) {
      alert("팀 ID가 유효하지 않습니다.");
      return;
    }

    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    let uploadedImageUrl = "";
    if (imageFile) {
      uploadedImageUrl = await handleImageUpload(imageFile);
      if (!uploadedImageUrl) return;
    }

    const requestBody = {
      title,
      content,
      imageUrl: uploadedImageUrl,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/notices/${teamId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("공지사항 생성 실패:", errorData);
        alert("공지사항 생성 실패: " + errorData.message);
        return;
      }

      const responseData = await response.json();
      console.log("공지사항 생성 완료:", responseData);
      navigate(`/notices?team=${teamId}`);
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
      alert("공지사항 생성 중 오류가 발생했습니다.");
    }
  };

  return (
      <div className="create-notice-page">
        <div className="notice-header">
          <h1 className="h1">공지사항</h1>
        </div>

        <Container fluid>
          <Row>
            <Col xs={9}>
              <Card className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="제목을 입력하세요"
                        className="p-3 border-2 bold-text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="내용을 입력하세요"
                        className="p-3 border-2"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                        type="file"
                        className="p-3 border-2"
                        ref={fileInputRef} // input 참조 연결
                        onChange={handleImageChange}
                    />
                  </Form.Group>

                  {imagePreview && (
                      <div className="image-preview mb-3 text-center">
                        <Image src={imagePreview} thumbnail fluid />
                        <Button
                            variant="danger"
                            className="mt-2"
                            onClick={handleImageRemove}
                        >
                          이미지 삭제
                        </Button>
                      </div>
                  )}

                  <Button variant="dark" className="submit-button float-end px-4" type="submit">
                    등록
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default CreateNoticePage;
