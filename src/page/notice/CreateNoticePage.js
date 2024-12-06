import { useState, useEffect } from "react";
import { Card, Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom"; // useLocation 추가
import "./CreateNoticePage.css";

function CreateNoticePage() {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [teamId, setTeamId] = useState(null); // teamId 상태
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  //   const teamIdFromQuery = queryParams.get("team");
  //   console.log("URL:", location.href); // 전체 URL 출력
  //   console.log("Query Params:", queryParams.toString()); // 쿼리스트링 확인
  //   console.log("Extracted teamId:", teamIdFromQuery); // teamId 확인
  //
  //   if (!teamIdFromQuery) {
  //     alert("유효한 팀 ID가 필요합니다.");
  //     navigate("/notices");
  //     return;
  //   }
  //   setTeamId(teamIdFromQuery); // teamId 설정
  // }, [location, navigate]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const teamIdFromQuery = queryParams.get("team");

    // 수정된 부분: window.location.href 사용
    console.log("URL:", window.location.href); // 전체 URL 출력
    console.log("Query Params:", queryParams.toString()); // 쿼리스트링 확인
    console.log("Extracted teamId:", teamIdFromQuery); // teamId 확인

    if (!teamIdFromQuery) {
      alert("유효한 팀 ID가 필요합니다.");
      navigate("/notices");
      return;
    }
    setTeamId(teamIdFromQuery); // teamId 설정
  }, [location, navigate]);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!teamId) {
      alert("팀 ID가 유효하지 않습니다.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    // 디버깅: 요청 URL과 데이터 출력
    console.log("API 요청 URL:", `http://localhost:8080/notices/${teamId}`);
    console.log("FormData 내용:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch(`http://localhost:8080/notices/${teamId}`, {
        method: "POST",
        body: formData,
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
                    <Form.Label>이미지 업로드 (선택)</Form.Label>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                  </Form.Group>

                  {image && (
                      <div className="mb-3">
                        <Image src={image} alt="미리보기 이미지" fluid />
                      </div>
                  )}

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
