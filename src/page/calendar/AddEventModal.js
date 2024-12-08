import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// AddEventModal 컴포넌트
const AddEventModal = ({ show, onHide, newEvent, setNewEvent, handleAddEvent }) => {

    // 새 이벤트 입력값 변경 처리 함수
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value });
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>새 이벤트 추가</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* 제목 입력 */}
                    <Form.Group controlId="eventTitle">
                        <Form.Label>이벤트 제목</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={newEvent.title}
                            onChange={handleInputChange}  // 입력값 변경 시 실행
                            placeholder="이벤트 제목을 입력하세요"
                            required
                        />
                    </Form.Group>

                    {/* 시작 날짜 입력 */}
                    <Form.Group controlId="eventStartDate">
                        <Form.Label>시작 날짜 및 시간</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="startDate"
                            value={newEvent.startDate}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    {/* 종료 날짜 입력 */}
                    <Form.Group controlId="eventEndDate">
                        <Form.Label>종료 날짜 및 시간</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="endDate"
                            value={newEvent.endDate}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>취소</Button>
                <Button variant="primary" onClick={handleAddEvent}>이벤트 추가</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddEventModal;
