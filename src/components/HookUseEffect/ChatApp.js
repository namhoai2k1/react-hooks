import React, { useEffect, useState } from 'react';

const lessons = [
    {
        id: 1,
        title: 'Первый урок',
    },
    {
        id: 2,
        title: 'Второй урок',
    },
    {
        id: 3,
        title: 'Третий урок',
    },
];

function ChatApp() {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleComment = (e) => {
            console.log(e.detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment);
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
    },[lessonId]);
    return (
        <div>
            <ul>
                {lessons.map((lesson) => (
                    <li
                        key={lesson.id}
                        className={lessonId === lesson.id ? 'lesson-active' : ''}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatApp;
