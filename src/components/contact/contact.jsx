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
						<a href='https://t.me/asoschilarmanager' target='_blank' rel='noreferrer'>t.me/asoschilarmanager</a>
					</div>

					<div className='contact-item'>
						<h4>Telefon:</h4>
						<a href='tel:+998990339938'>+998 99 033 99 38</a>
					</div>

					<div className='contact-item'>
						<h4>Email:</h4>
						<a href='mailto:abdulgodir938@gmail.com'>abdulgodir938@gmail.com</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
