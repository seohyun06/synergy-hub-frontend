import { useState, useEffect } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "./CreateNoticePage.css";

function CreateNoticePage() {
  const [title, setTitle] = useState("");        // 제목 상태
  const [content, setContent] = useState("");    // 내용 상태
  const [imageFile, setImageFile] = useState(null); // 이미지 파일 상태
  const [teamId, setTeamId] = useState(null);   // teamId 상태
  const navigate = useNavigate();
  const location = useLocation();

  // 쿼리스트링에서 teamId 추출
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

  // 이미지 업로드 핸들러
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:8080/images/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const imageUrl = await response.text();
      console.log("이미지 업로드 성공:", imageUrl);
      return imageUrl; // 업로드된 이미지 URL 반환
    } catch (error) {
      console.error("이미지 업로드 중 오류 발생:", error.message);
      alert("이미지 업로드 실패: " + error.message);
      return null;
    }
  };

  // 공지사항 제출 핸들러
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

    // 이미지 업로드 수행
    let uploadedImageUrl = "";
    if (imageFile) {
      uploadedImageUrl = await handleImageUpload(imageFile);
      if (!uploadedImageUrl) return; // 이미지 업로드 실패 시 중단
    }

    const requestBody = {
      title,
      content,
      imageUrl: uploadedImageUrl || "",
    };

    try {
      const response = await fetch(`http://localhost:8080/notices/${teamId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.status === 401) {
        alert("인증이 만료되었습니다. 다시 로그인해 주세요.");
        localStorage.removeItem("accessToken");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const responseData = await response.json();
      console.log("공지사항 생성 성공:", responseData);
      navigate(`/notices?team=${teamId}`);
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error.message);
      alert("공지사항 생성 중 오류가 발생했습니다.");
    }
  };

  return (
      <div className="create-notice-page">
        <div className="notice-header">
          <h1 className="fw-bold">공지사항 등록</h1>
        </div>

        <Container fluid>
          <Row>
            <Col xs={9}>
              <Card className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="글 제목을 입력하세요"
                        className="p-3 border-2"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
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
                        required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                        type="file"
                        className="p-3 border-2"
                        onChange={(e) => setImageFile(e.target.files[0])}
                    />
                  </Form.Group>

                  <Button variant="dark" className="float-end px-4" type="submit">
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
