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
						<p>t.me/asoschilarmanager</p>
					</div>

					<div className='contact-item'>
						<h4>Telefon:</h4>
						<p>+998 99 033 99 38</p>
					</div>

					<div className='contact-item'>
						<h4>Email:</h4>
						<p>abdulgodir938@gmail.com</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
