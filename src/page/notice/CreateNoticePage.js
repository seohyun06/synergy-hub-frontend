import { useState } from 'react';
import { Card, Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import './CreateNoticePage.css';

function CreateNoticePage() {
  const [image, setImage] = useState(null); // image 상태 변수 선언
  const [imageFile, setImageFile] = useState(null); // 이미지 파일 상태
  const [content, setContent] = useState('');
  const [title, setTitle] = useState(''); // 제목 상태 추가

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title); // 제목을 상태에서 가져옴
    formData.append('content', content); // 내용
    formData.append('memberNickname', '사용자 닉네임'); // 필요한 경우 사용자 닉네임 추가
    formData.append('memberId', 1); // 필요한 경우 사용자 ID 추가
    formData.append('teamId', 1); // 필요한 경우 팀 ID 추가
    formData.append('image', imageFile); // 선택된 이미지 파일

    // 공지사항 생성 API 호출
    fetch('http://localhost:8080/notices', {
      method: 'POST',
      body: formData, // FormData 객체를 직접 보냄
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('공지사항 생성 완료:', data);
      })
      .catch((error) => {
        console.error('공지사항 생성 실패:', error);
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
                  <Form.Label>이미지 업로드</Form.Label>
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
