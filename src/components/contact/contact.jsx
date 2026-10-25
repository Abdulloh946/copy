import './contact.css'

function Contact() {
	return (
		<section className='contact'>
			<div className='contact-box'>
				<h2 className='contact-title'>Savollaringiz bormi?</h2>

				<p className='contact-subtitle'>Biz bilan bog'laning:</p>

				<div className='contact-info'>
					<div className='contact-item'>
						<h4>Telegram:</h4>
						<a href='https://t.me/+998950227446' target='_blank' rel='noreferrer'>+998 95 022 74 46</a>
					</div>

					<div className='contact-item'>
						<h4>Telefon:</h4>
						<a href='tel:+998950227446'>+998 95 022 74 46</a>
					</div>

					<div className='contact-item'>
						<h4>Email:</h4>
						<a href='mailto:umarhonabdumutalimov@gmail.com'>umarhonabdumutalimov@gmail.com</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
