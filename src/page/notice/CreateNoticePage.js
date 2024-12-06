import { useState, useEffect } from "react";
import { Card, Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom"; // useLocation 추가
import "./CreateNoticePage.css";

function CreateNoticePage() {
  const [image, setImage] = useState(null); // image 상태 변수 선언
  const [imageFile, setImageFile] = useState(null); // 이미지 파일 상태
  const [content, setContent] = useState("");
  const [title, setTitle] = useState(""); // 제목 상태 추가
  const [teamId, setTeamId] = useState(null); // teamId 상태 추가
  const navigate = useNavigate(); // useNavigate 함수 초기화
  const location = useLocation(); // 현재 URL에서 쿼리스트링 읽기

  useEffect(() => {
    // 쿼리스트링에서 teamId 추출
    const queryParams = new URLSearchParams(location.search);
    const teamIdFromQuery = queryParams.get("team");
    if (!teamIdFromQuery) {
      alert("유효한 팀 ID가 필요합니다.");
      navigate("/notices"); // teamId가 없으면 공지사항 목록 페이지로 리디렉션
      return;
    }
    setTeamId(teamIdFromQuery); // teamId 설정
  }, [location, navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // 선택한 파일을 상태에 저장
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // 미리보기 이미지 설정
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
    formData.append("title", title); // 제목을 상태에서 가져옴
    formData.append("content", content); // 내용
    formData.append("teamId", teamId); // 쿼리스트링에서 받은 teamId 사용

    // 이미지가 선택되었을 경우에만 FormData에 추가
    if (imageFile) {
      formData.append("image", imageFile); // 선택된 파일을 FormData에 추가
    }

    // 공지사항 생성 API 호출
    fetch("http://localhost:8080/notices", {
      method: "POST",
      headers: {
        // 인증이 필요한 경우 여기에 Authorization 헤더 추가
        // "Authorization": "Bearer " + token,
      },
      body: formData, // FormData 객체를 직접 보냄
    })
        .then((response) => response.json())
        .then((data) => {
          console.log("공지사항 생성 완료:", data);
          navigate(`/notices?team=${teamId}`); // 공지사항 생성 후 해당 팀의 NoticePage로 리디렉션
        })
        .catch((error) => {
          console.error("공지사항 생성 실패:", error);
        });
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
                <Form onSubmit={handleSubmit}> {/* 폼 제출 시 handleSubmit 실행 */}
                  <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="글 제목을 입력하세요"
                        className="p-3 border-2"
                        value={title} // 제목 값을 상태에서 가져옴
                        onChange={(e) => setTitle(e.target.value)} // 제목 상태 업데이트
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
                        onChange={handleImageChange} // 이미지 선택 시 처리
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
