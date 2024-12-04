import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import './EditNoticePage.css'; // CSS 파일 임포트

function EditNoticePage() {
  const { id } = useParams(); // URL에서 ID 추출
  const navigate = useNavigate();
  const [notice, setNotice] = useState({ title: "", content: "", image: null });

  useEffect(() => {
    // 수정할 공지사항 데이터를 가져오기
    fetch(`http://localhost:8080/notices/${id}`)
      .then((response) => response.json())
      .then((data) => setNotice(data))
      .catch((err) => console.error("데이터 불러오기 오류:", err));
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNotice({ ...notice, image: reader.result }); // 미리보기 이미지 설정
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!notice.title.trim() || !notice.content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    // FormData로 데이터 준비 (이미지가 있을 경우)
    const formData = new FormData();
    formData.append("title", notice.title);
    formData.append("content", notice.content);
    formData.append("memberId", 1); // 실제 값으로 설정
    formData.append("teamId", 1); // 실제 값으로 설정
    if (notice.image) formData.append("image", notice.image); // 이미지 추가

    fetch(`http://localhost:8080/notices/${id}`, {
      method: "PUT",
      body: formData, // FormData로 보내기
    })
      .then((response) => {
        if (!response.ok) {
          console.error("수정 실패:", response.status, response.statusText);
          alert(`수정 실패: ${response.status} ${response.statusText}`);
          throw new Error(`수정 실패: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        alert("수정되었습니다.");
        navigate(`/notice/${id}`);
      })
      .catch((error) => {
        console.error("수정 오류:", error);
        alert("수정 중 오류가 발생했습니다.");
      });
  };

  return (
    <div className="edit-notice-page">
      <div className="notice-header">
        <h2 className="fw-bold">공지사항 수정</h2>
      </div>

      <Container fluid>
        <Row>
          <Col xs={9}>
            <Card className="p-4">
              <Form onSubmit={(e) => e.preventDefault()}> {/* 폼 제출 시 handleSave 실행 방지 */}
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="제목을 입력하세요"
                    className="p-3 border-2"
                    value={notice.title}
                    onChange={(e) => setNotice({ ...notice, title: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="내용을 입력하세요"
                    className="p-3 border-2"
                    value={notice.content}
                    onChange={(e) => setNotice({ ...notice, content: e.target.value })}
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

                {notice.image && (
                  <div className="mb-3">
                    <Image src={notice.image} alt="미리보기 이미지" fluid />
                  </div>
                )}

                <Button variant="dark" className="float-end px-4" onClick={handleSave}>
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
