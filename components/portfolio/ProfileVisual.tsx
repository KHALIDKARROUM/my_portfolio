import Image from 'next/image';
import { profile } from '@/data/profile';

export function ProfileVisual() {
  return (
    <div className="profile-visual">
      {profile.profileImage ? (
        <Image
          src={profile.profileImage}
          alt={`Portrait of ${profile.name}`}
          fill
          sizes="(max-width: 768px) 80vw, 34vw"
          className="profile-image"
          priority={false}
        />
      ) : (
        <>
          <span className="profile-initials" aria-hidden="true">{profile.initials}</span>
          <span className="profile-placeholder">Portrait optional · work stays primary</span>
        </>
      )}
    </div>
  );
}
