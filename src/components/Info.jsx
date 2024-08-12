import mainImage from '../assets/main.png'

function Info(){
    return(
        <header>
            <img src={mainImage} className='main-img'/>
            <h1>Ali Nazir</h1>
            <h2>Frontend Developer</h2>
            <p>alinazir.website</p>

            <div className='btn-container'>
            <button className='email-btn'><a className='email' href='mailto:alinazir105@gmail.com'><i className="fa-solid fa-envelope"></i>Email</a></button>
                <button className='btn-primary'><a className='linkedin' href='https://www.linkedin.com/in/ali-nazir-74b909275?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BnblrB2%2BbSs6REbjS17KA0Q%3D%3D' target="_blank">
                <i className="fa-brands fa-linkedin"></i>LinkedIn</a></button>
            </div>
        </header>
    )
}

export default Info;