import avatar from '../assets/images/avatar-michelle.jpg'

export default function AuthorInfo() {
    return (
        <div className='flex items-center gap-6'>

            <img src={avatar} alt="Michelle Appleton avatar" className='rounded-full size-10' />

            <div className='flex flex-col'>
                <strong className='text-very-dark-grayish-blue'>Michelle Appleton</strong>
                <span className='text-grayish-blue'>28 Jun 2020</span>
            </div>

        </div>
    )
};