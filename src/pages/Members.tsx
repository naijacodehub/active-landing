import MemberCard from '../components/MemberCard';
import { membersList } from '../constants/member';

export default function MembersPage() {
  return (
    <div className='mt-8   general-padding pb-12'>
      <div className='text-center my-6 text-2xl underline'>Team Members</div>
      <div className='flex overflow-x-hidden xmd:grid xmd:grid-cols-4 gap-6 gap-y-8 flex-1 max-xmd:px-1'>
        {membersList.map((member, idx) => {
          return <MemberCard member={member} key={idx} />;
        })}
      </div>
    </div>
  );
}
