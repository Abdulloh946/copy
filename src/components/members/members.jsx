import './members.css'

import Sherzod from '../../assets/IMG_8423.png'
import Kamoliddin from '../../assets/image (91).png'
import Darxonov from '../../assets/image (92).png'
import Arakelyan from '../../assets/IMG_2719 1.png'
import Azam from '../../assets/image (92).png'
import Davron from '../../assets/IMG_5961.png'
import Islom from '../../assets/IMG_6907.png'

function MembersCard(props) {
	return (
		<div className='members-card'>
			<img src={props.image} alt='' className='members-image' />

			<h3 className='members-name'>{props.name}</h3>

			<p className='members-job'>{props.job}</p>
		</div>
	)
}

function Members() {
	return (
		<section className='members'>
			<h2 className='members-title'>Klub a'zolari</h2>

			<div className='members-content'>
				<div className='members-cards'>
					<MembersCard
						image={Sherzod}
						name='Sherzod Rabbimov'
						job='Premium avto ekspertiza'
					/>

					<MembersCard
						image={Kamoliddin}
						name='Kamoliddin Mansur'
						job='Internet marketing mutaxassisi'
					/>

					<MembersCard
						image={Darxonov}
						name='Sherzod Darxonov'
						job="Foodqo kompaniyasi CEO'si"
					/>

					<MembersCard
						image={Arakelyan}
						name='Agasi Arakelyan'
						job='Eksport menejeri'
					/>

					<MembersCard
						image={Azam}
						name='Azam Karimberdiyev'
						job="Yunusobod ko'chmas mulk"
					/>

					<MembersCard
						image={Davron}
						name='Davron Karimov'
						job='Marketing agentligi asoschisi'
					/>

					<MembersCard
						image={Islom}
						name='Islom Fayzullayevich'
						job='SMM mutaxassisi'
					/>
					<div className='members-count'>
						<h1>30+</h1>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Members
