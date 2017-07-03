import React from 'react';

const ContactForm = (props) => (
	<div>
		<input 
			type="text" 
			value={props.value}
			onChange={props.onChange} 
		/>


	</div>

);

export default ContactForm; 
