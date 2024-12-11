
export default function Contact () {

    const config = {
        email : 'rajwanwebs@gmail.com',
        phone: '+94775676139'
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl text-gray-800 border-b-4  border-primary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5 text-gray-800'>Feel free to drop a message.I’m always open to new opportunities and conversations</p>
            <p className='py-2 text-gray-800'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2 text-gray-800'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}