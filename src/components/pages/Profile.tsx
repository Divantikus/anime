import { useQueryProfile } from 'src/hooks/useQueryProfile.ts';

export const Profile = () => {
    const { data } = useQueryProfile();

    if (!data) return <div>Error (</div>;

    return <></>;
};
