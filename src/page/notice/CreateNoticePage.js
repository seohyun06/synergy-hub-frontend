import { useState, useEffect } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom"; // useLocation 추가
import "./CreateNoticePage.css";

function CreateNoticePage() {
  const [content, setContent] = useState(""); // 내용 상태
  const [title, setTitle] = useState(""); // 제목 상태
  const [imageUrl, setImageUrl] = useState(""); // 이미지 URL 상태
  const [teamId, setTeamId] = useState(null); // teamId 상태
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 쿼리스트링에서 teamId 추출
    const queryParams = new URLSearchParams(location.search);
    const teamIdFromQuery = queryParams.get("team");
    if (!teamIdFromQuery) {
      alert("유효한 팀 ID가 필요합니다.");
      navigate("/notices");
      return;
    }
    setTeamId(teamIdFromQuery); // teamId 설정
  }, [location, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!teamId) {
      alert("팀 ID가 유효하지 않습니다.");
      return;
    }

    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login"); // 로그인 페이지로 리디렉션
      return;
    }

    const requestBody = {
      title,
      content,
      imageUrl,
    };

    console.log("API 요청 URL:", `http://localhost:8080/notices/${teamId}`);
    console.log("요청 데이터:", requestBody);

    try {
      const response = await fetch(`http://localhost:8080/notices/${teamId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 인증 토큰 추가
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API 요청 실패:", errorData);
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
          <h1 className="fw-bold">공지사항</h1>
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
                        type="text"
                        placeholder="이미지 URL을 입력하세요 (선택)"
                        className="p-3 border-2"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
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
