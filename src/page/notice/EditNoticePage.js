import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import "./EditNoticePage.css";

function EditNoticePage() {
  const { id } = useParams(); // URL에서 ID 추출
  const navigate = useNavigate();
  const [notice, setNotice] = useState({ title: "", content: "", imageUrl: "" });
  const [error, setError] = useState(null); // 에러 상태 관리
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  useEffect(() => {
    // 공지사항 데이터 가져오기
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    fetch(`http://localhost:8080/notices/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error("공지사항 데이터를 불러오는 데 실패했습니다.");
          }
          return response.json();
        })
        .then((data) => {
          setNotice({
            title: data.title,
            content: data.content,
            imageUrl: data.imageUrl || "",
          });
          setError(null);
        })
        .catch((err) => {
          console.error("데이터 불러오기 오류:", err);
          setError(err.message);
        })
        .finally(() => setIsLoading(false));
  }, [id, navigate]);

  const handleSave = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    if (!notice.title.trim() || !notice.content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    // 요청 데이터 준비
    const requestData = {
      title: notice.title,
      content: notice.content,
      imageUrl: notice.imageUrl, // 기존 이미지 URL 유지
    };

    fetch(`http://localhost:8080/notices/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`수정 실패: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(() => {
          alert("공지사항이 수정되었습니다.");
          navigate(`/notice/${id}`);
        })
        .catch((error) => {
          console.error("수정 오류:", error);
          alert("공지사항 수정 중 오류가 발생했습니다.");
        });
  };

  if (isLoading) {
    return <div>공지사항 데이터를 불러오는 중...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
      <div className="edit-notice-page">
        <div className="notice-header">
          <h2 className="fw-bold">공지사항 수정</h2>
        </div>

        <Container fluid>
          <Row>
            <Col xs={9}>
              <Card className="p-4">
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="제목을 입력하세요"
                        className="p-3 border-2"
                        value={notice.title}
                        onChange={(e) =>
                            setNotice({ ...notice, title: e.target.value })
                        }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="내용을 입력하세요"
                        className="p-3 border-2"
                        value={notice.content}
                        onChange={(e) =>
                            setNotice({ ...notice, content: e.target.value })
                        }
                    />
                  </Form.Group>

                  <Button
                      variant="dark"
                      className="float-end px-4"
                      onClick={handleSave}
                  >
                    수정 저장
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default EditNoticePage;
