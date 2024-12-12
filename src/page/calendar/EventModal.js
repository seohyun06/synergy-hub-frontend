import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const EventModal = ({ show, onHide, eventDetails, onEdit, onDelete }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>일정 확인</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {eventDetails && (
                    <div>
                        <p><strong>제목:</strong> {eventDetails.title}</p>
                        <p><strong>시작 날짜:</strong> {new Date(eventDetails.start).toLocaleString()}</p>
                        <p><strong>종료 날짜:</strong> {new Date(eventDetails.end).toLocaleString()}</p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>닫기</Button>
                <Button variant="primary" onClick={onEdit}>수정</Button>
                <Button variant="danger" onClick={onDelete}>삭제</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EventModal;

/*eventContent={(eventInfo) => {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {*//* 동그란 색상 표시 *//*}
                            <span
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: eventInfo.event.backgroundColor,
                                    marginRight: '5px',
                                }}
                            />
                            {*//* 일정 이름만 표시 *//*}
                            <span>{eventInfo.event.title}</span>
                        </div>
                    );
                }}*/
