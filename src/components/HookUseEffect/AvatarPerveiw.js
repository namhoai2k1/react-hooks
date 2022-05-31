import React, { useEffect, useState } from 'react';

function AvatarPerveiw() {
    const [avatar, setAvatar] = useState('');
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    };

    useEffect(() => {
        // clear the preview url
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    return (
        <div>
            <div className="avatar-preview">
                <input type="file" onChange={handlePreviewAvatar} />
                {avatar && (
                    <img
                        src={avatar.preview}
                        alt="avatar"
                        width="300"
                        height="300"
                    />
                )}
            </div>
        </div>
    );
}

export default AvatarPerveiw;
