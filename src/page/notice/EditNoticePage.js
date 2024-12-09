import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import "./EditNoticePage.css";

function EditNoticePage() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 URL에서 쿼리스트링 읽기
  const [notice, setNotice] = useState({ title: "", content: "", imageUrl: "" });
  const [newImage, setNewImage] = useState(null); // 새로 업로드할 이미지 상태
  const [error, setError] = useState(null); // 에러 상태 관리
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  // 쿼리스트링에서 teamId와 noticeId 추출
  const queryParams = new URLSearchParams(location.search);
  const teamId = queryParams.get("team");
  const noticeId = queryParams.get("notice");

  useEffect(() => {
    // 공지사항 데이터 가져오기
    if (!teamId || !noticeId) {
      setError("유효하지 않은 팀 ID 또는 공지사항 ID입니다.");
      setIsLoading(false);
      return;
    }

    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    fetch(`http://localhost:8080/notices/${noticeId}?team=${teamId}`, {
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
  }, [teamId, noticeId, navigate]);

  const handleImageDelete = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    fetch(`http://localhost:8080/images/delete?imageAddress=${notice.imageUrl}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error("이미지 삭제 실패");
          }
          setNotice({ ...notice, imageUrl: "" }); // 이미지 URL 초기화
          alert("이미지가 삭제되었습니다.");
        })
        .catch((error) => {
          console.error("이미지 삭제 오류:", error);
          alert("이미지 삭제 중 오류가 발생했습니다.");
        });
  };

  const handleImageUpload = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    if (!newImage) {
      alert("업로드할 이미지를 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("image", newImage);

    fetch("http://localhost:8080/images/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error("이미지 업로드 실패");
          }
          return response.text(); // 업로드된 이미지 URL 반환
        })
        .then((uploadedUrl) => {
          setNotice({ ...notice, imageUrl: uploadedUrl });
          alert("이미지가 업로드되었습니다.");
        })
        .catch((error) => {
          console.error("이미지 업로드 오류:", error);
          alert("이미지 업로드 중 오류가 발생했습니다.");
        });
  };

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

    const requestData = {
      title: notice.title,
      content: notice.content,
      imageUrl: notice.imageUrl, // 이미지 URL 포함
    };

    fetch(`http://localhost:8080/notices/${noticeId}?team=${teamId}`, {
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
          navigate(`/notice/details?team=${teamId}&notice=${noticeId}`);
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

                  {notice.imageUrl ? (
                      <div className="mb-3">
                        <img
                            src={notice.imageUrl}
                            alt="공지 이미지"
                            className="img-fluid mb-2"
                        />
                        <Button
                            variant="danger"
                            onClick={handleImageDelete}
                            className="mt-2"
                        >
                          이미지 삭제
                        </Button>
                      </div>
                  ) : (
                      <Form.Group className="mb-3">
                        <Form.Control
                            type="file"
                            onChange={(e) => setNewImage(e.target.files[0])}
                        />
                        <Button
                            variant="success"
                            onClick={handleImageUpload}
                            className="mt-2"
                        >
                          이미지 추가
                        </Button>
                      </Form.Group>
                  )}

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
